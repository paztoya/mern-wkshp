const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const partnerRouter = require("./routes/partnerRouter");
const promotionRouter = require("./routes/promotionRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/campsites", campsiteRouter);
app.use("/partners", partnerRouter);
app.use("/promotions", promotionRouter);

app.all("/campsites", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/campsites", (req, res) => {
  res.end("Will send all the campsites to you");
});

app.post("/campsites", (req, res) => {
  res.end(
    `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
  );
});

app.put("/campsites", (req, res) => {
  res.statusCode = 403;
  res.end("Put operation not supported on /campsites");
});

app.delete("/campsites", (req, res) => {
  res.end("Deleting all campsites");
});
//campsiteid
app.get("/campsites/:campsiteId", (req, res) => {
  res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post("/campsites/:campsiteId", (req, res) => {
  res.statusCode = 403;
  res.end(
    `POST operation not supported on /campsites/${req.params.campsiteId}`
  );
});

app.put("/campsites/:campsiteId", (req, res) => {
  res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
  res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete("/campsites/:campsiteId", (req, res) => {
  res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

//partners
app.all("/partners", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/partners", (req, res) => {
  res.end("Will send all the partners to you");
});

app.post("/partners", (req, res) => {
  res.end(
    `Will add the partners: ${req.body.name} with description: ${req.body.description}`
  );
});

app.put("/partners", (req, res) => {
  res.statusCode = 403;
  res.end("Put operation not supported on /partners");
});

app.delete("/partners", (req, res) => {
  res.end("Deleting all partners");
});

app.get("/partners/:partnersId", (req, res) => {
  res.end(`Will send details of the partners: ${req.params.partnersId} to you`);
});

app.post("/partners/:partners", (req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /partners/${req.params.partnersId}`);
});

app.put("/partners/:partnersId", (req, res) => {
  res.write(`Updating the partners: ${req.params.partners}\n`);
  res.end(`Will update the partners: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete("/partners/:partnersId", (req, res) => {
  res.end(`Deleting partners: ${req.params.partners}`);
});

//promotions
app.all("/promotions", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/promotions", (req, res) => {
  res.end("Will send all the promotions to you");
});

app.post("/promotions", (req, res) => {
  res.end(
    `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
  );
});

app.put("/promotions", (req, res) => {
  res.statusCode = 403;
  res.end("Put operation not supported on /promotions");
});

app.delete("/promotions", (req, res) => {
  res.end("Deleting all promotions");
});

app.get("/promotions/:promotionId", (req, res) => {
  res.end(
    `Will send details of the promotion: ${req.params.promotionId} to you`
  );
});

app.post("/promotions/:promotions", (req, res) => {
  res.statusCode = 403;
  res.end(
    `POST operation not supported on /promotions/${req.params.promotionId}`
  );
});

app.put("/promotions/:promotionId", (req, res) => {
  res.write(`Updating the promotions: ${req.params.promotions}\n`);
  res.end(`Will update the promotions: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete("/partners/:promotionId", (req, res) => {
  res.end(`Deleting promotions: ${req.params.promotions}`);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
