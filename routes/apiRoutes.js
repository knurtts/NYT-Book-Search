const Book = require("../models/Book");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        Book.find({}).then(function(data) {
            res.json(data);
        }).catch(function(err){
            console.log(err);
        })
    });

    app.post("/api/books", function(req, res) {
        Book.create(req.body).then(function() {
            console.log("Record Created");
            console.log("================");
            res.send("done!")
        });
    });

    app.delete("/api/books/:id", function(req, res) {
        Book.deleteOne({_id: req.params.id})
            .then(function() {
                res.send("Record Deleted");
            });
    });

    app.get("*", function(req, res) {
        res.send("../client/build/index.html");
    });

};
