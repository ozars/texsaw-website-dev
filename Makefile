all:
	pug index.pug -o www/

dev:
	nodemon app.js

edit:
	vim index.pug data.js *.pug includes/* app.js Makefile

