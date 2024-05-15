const http = require("http");
const fs = require("fs/promises");

const getFiles = async () => {
  const indexHtml = await fs.readFile("./index.html");
  const indexJs = await fs.readFile("./dist/r.bundle.js");
  return [indexHtml, indexJs];
};

http
  .createServer(async ({ url }, res) => {
    const [indexHtml, indexJs] = await getFiles();
    {
      switch (url) {
        case "/":
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(indexHtml);
          res.end();
          break;
        case "/js":
          res.writeHead(200, { "Content-Type": "text/javascript" });
          res.write(indexJs);
          res.end();
          break;
        case "/users":
          const response = await fetch("http://localhost:8000/users");
          const usersData = await response.json();
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(Buffer.from(JSON.stringify(usersData)));
          res.end();
          break;
        default:
          res.writeHead(404);
          res.write("Strona nie znaleziona");
          res.end();
      }
    }
  })
  .listen(8888);
