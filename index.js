import express from 'express';
import path from "path";

const __dirname = import.meta.dirname;

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up Express app to have a static file path
app.use(express.static(path.join(__dirname, "public")));

//test message
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

//set up server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});