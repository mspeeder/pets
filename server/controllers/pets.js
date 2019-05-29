var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    addPet: (req,res) => {

        Pet.create(req.body, function(err,data) {
            if(err || data == null) {
                console.log("Something wrong when add a pet");
                res.json({message: "Error", error: err})
            } else {
                console.log("Created a pet");
                res.json({message: "Success: added a pet", pet: data})
            }
        })
    },
    getPet: (req,res) => {
        // make a request to the database
        Pet.find({}, (err,data) => {
            if(err|| data == null) {
                console.log('Something wrong when finding tasks!');
                res.json({message: "Error", error: err})
            } else {
                console.log("Found pets!");
                res.json({message: "Success", pets: data})
            }
        });
    },

    updataPet: (req,res) => {
        //Task.update({_id:req.body.id}, {title:req.body.title}, function(err,data) {
        Pet.update({name:req.body.name, type:req.body.type, description:req.body.description, skill:req.body.skill}, function(err,data) {
            if(err|| data == null ) {
                console.log("Something went wrong when update")
                res.json({message: "Error", error: err})
            } else {
                console.log("Successfully updated a pet")
                res.json({message: "Success", data:data})
            }
    
        });
    },

    getAPet: (req,res) => {
        Pet.findOne({_id:req.params.id}, function(err,data) {
            if(err || data == null) {
                console.log('Something wrong when finding a pet!')
                res.json({message: "Error", error: err})
            } else {
                console.log("Found an pet!");
                res.json({message: "Success", pet:data})
            }
        });
    },
    
    deleteAPet: (req,res) => {
        Pet.remove({_id:req.params.id}, function(err,data) {
            if(err || data == null) {
                console.log("Something went wrong when deleting a pet!")
                res.json({message: "Error", error: err})
            } else {
                console.log('Record Deleted');
                res.json({message: "Success", data:data})
            }
        })
    },



}
