# texsaw-website-dev

This project stores development environment used for Texas Security Awareness
Week (TexSAW) webpage. Actual webpage is compiled from scss and pug files
included in this repository.

- Demos: [2019][texsaw-2019], [2018][texsaw-2018], [2017][texsaw-2017]
- Replaced Design: [2016][texsaw-2016]

[texsaw-2019]: https://csi.utdallas.edu/events/TexSAW-2019/
[texsaw-2018]: https://csi.utdallas.edu/events/TexSAW-2018/
[texsaw-2017]: https://csi.utdallas.edu/events/TexSAW-2017/
[texsaw-2016]: https://csi.utdallas.edu/events/TexSAW-2016/TexSAW_2016.html

## Usage

- Make sure you have node.js and npm installed.
- `npm install`: Run once to install required dependencies locally.
- `npm run dev`: Run development server on port 8081. This server watchs
modified files automatically and compiles them into `www` directory.
- `npm run edit`: Open source code files in the default editor (`$EDITOR`).
- Just copy contents of `www` directory to web server to publish.

## Author

Omer Ozarslan
