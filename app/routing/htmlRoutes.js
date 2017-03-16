// Your `htmlRoutes.js` file should include two routes:
//    * A GET Route to `/survey` which should display the survey page.
//    * A default USE route that leads to `home.html` which displays the home page.


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});