const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./templates/home.html");
const contect_us = readFileSync("./templates/contect_us.html");
const about_us = readFileSync("./templates/about_us.html");
const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  console.log(url);
  // home page
  if (url === "/" || url === "/home.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/contect_us.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contect_us);
    res.end();
  } else if (url === "/about_us.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(about_us);
    res.end();
  }
  // styles
});

server.listen(3000);
