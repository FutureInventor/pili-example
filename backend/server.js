const http = require("http");

const persons = [ //change
  {
    id: 0,
    name: "Piotr",
    surname: "Michalski",
  },
  {
    id: 1,
    name: "Barbara",
    surname: "Wrona",
  },
];

http
  .createServer(async ({ url }, res) => {
    switch (url) {
      case "/persons": //change
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(Buffer.from(JSON.stringify(users)));
        res.end();
        break;
      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3535); //change
