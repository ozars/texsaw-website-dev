var express = require('express');
var pug = require('pug');
var watch = require('node-watch');
var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
var app = express();

var outDir = './www/';
var cssDir = outDir + 'css/';

app.use('/', express.static('www'));

function ignoredWatch(reg, name)
{
  // console.log('checking ' + name + ' against ' + reg);
  return !/node_modules/.test(name) && !/www/.test(name) && !/webdav/.test(name) && !/\.git/.test(name) &&
    ((fs.existsSync(name) && fs.lstatSync(name).isDirectory()) || reg.test(name));
}

function handler(callback)
{
  return (err, res) => {
    if(err) {
      console.error(err);
    } else if(callback) {
      callback(res);
    }
  }
}

function compile_pug(data, pugFile, outFile)
{
    var template = pug.compileFile(pugFile, { pretty : true });
    var html = template(data);
    fs.writeFile(outFile, html, handler());
}

function compile_all_pug()
{
  console.log('compile all pug');
  try {
    delete require.cache[require.resolve('./data.js')];
  } catch(_) {}
  try {
    var data = require('./data.js')();
    compile_pug(data, './index.pug', path.join(outDir, 'index.html'));
    compile_pug(data, './presenter_bio.pug', path.join(outDir, 'presenter_bio.html'));
    compile_pug(data, './sw_hw_requirements.pug', path.join(outDir, 'sw_hw_requirements.html'));
    compile_pug(data, './suggested_material.pug', path.join(outDir, 'suggested_material.html'));
  } catch(err) {
    console.error(err.stack);
  }
}

function compile_all_scss()
{
  console.log('compile all scss');
  var outFile = path.join(cssDir, 'default.css');
  sass.render({ file : 'includes/default.scss'},
      handler((res) => { fs.writeFile(outFile, res.css, handler()); })
  );
}

watch('./', { recursive: true, filter: (name) => ignoredWatch(/\.scss$/, name)}, (evt, fname) => {
  console.log('scss update: ' + fname);
  var outFile = path.join(cssDir, path.basename(fname, '.scss') + '.css');
  sass.render({ file : fname },
      handler((res) => { fs.writeFile(outFile, res.css, handler()); })
  );
});

watch('./', { recursive: true, filter: (name) => ignoredWatch(/(\.pug$)|(\.js$)/, name)}, (evt, fname) => {
  console.log('pug update: ' + fname);
  compile_all_pug();
});

compile_all_scss();
compile_all_pug();

const PORT = 8082;

console.log(`Starting server on http://0.0.0.0:${PORT}`);
app.listen(PORT);
