var pets = require('../controllers/pets.js');
var path = require("path") // Don't forget!!!
module.exports = function(app) {

    // create a new pet
    app.post("/api/pet", (req, res) => { 
        pets.addPet(req,res);
    });


    //get all the pets
    app.get("/api/pets", (req, res) => { 
        //make a request to the database
        // call the getTask() in controller, get data
        pets.getPet(req,res);
    });

    // update pet 
    app.put("/api/pet", (req, res) => { 
        console.log(req.body,"*****");
        pets.updataPet(req,res);
    });
    

    // retrieve a pet by id
    app.get("/api/pet/:id", (req, res) => {
        console.log("&&&&&&&&&& inside routes", req)
        pets.getAPet(req,res);
    }); 

    // delete a pet by id
    app.delete("/api/pet/:id", (req, res) => { 
        pets.deleteAPet(req,res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });

    
    
}