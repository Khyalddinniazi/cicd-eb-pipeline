const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
    <h1>CI/CD Pipeline Demo ✅</h1>
    <p>This app is deployed automatically using AWS CodePipeline + CodeBuild + Elastic Beanstalk.</p>
    <p><b>Timestamp:</b> ${new Date().toISOString()}</p>
  `);
});

app.get("/health", (req, res) => res.status(200).send("ok"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
