import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (reg, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});