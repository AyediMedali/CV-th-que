var mongoose = require('mongoose');
var validator = require('validator');

var enu = {
    values: ['PFE', 'Stage']
  , message: 'Poste is required'
  }
  

var cvSchema = new mongoose.Schema();
cvSchema.add({
    nom : {type:String , required: true} ,
    prenom : {type:String , required: true} , 
    email : {type:String , required: true,validate: [ validator.isEmail, 'invalid email' ]} , 
    tel : {type: String , required:true  },
    poste : {type:String , enum:enu, required:true},
    message:  {type:String , required:true } ,
    date: {
        type: Date,
        default: Date.now
      },
    path: {type:String}
})

module.exports.schema = cvSchema ;
module.exports.model =  mongoose.model('Cvs', cvSchema)