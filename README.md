# texsaw-website-dev

This project stores development environment used for Texas Security Awareness
Week (TexSAW) webpage. Actual webpage is compiled from scss and pug files
included in this repository.

- Demo: [TexSAW 2017 webpage][texsaw-2017]
- Replaced Design: [TexSAW 2016 webpage][texsaw-2016]

[texsaw-2017]: https://csi.utdallas.edu/events/TexSAW-2017/
[texsaw-2016]: https://csi.utdallas.edu/events/TexSAW-2016/TexSAW_2016.html

## Usage

- Make sure you have node.js and npm installed.
- `npm install`: Run once to install required dependencies locally.
- `npm run dev`: Run development server on port 8081. This server watchs
modified files automatically and compiles them into `www` directory.
- `npm run edit`: Open source code files in the default editor (`$EDITOR`).
- Just copy contents of `www` directory to web server to publish.

## License Acknowledgements

This project is licensed under [MIT](./LICENSE).

Other packages distributed with this repository and their licenses:
- jQuery v3.2.1 (MIT)
- fullPage v2.9.4 (MIT)
- Bootstrap v3.3.7 (MIT)
- bootswatch v3.3.7 (MIT)
- fontawesome v4.7.0 (Font: SIL OFL 1.1, CSS: MIT)
- animate.css v3.5.2 (MIT)

See related files for more detailed license information.

## Author

Omer Ozarslan
