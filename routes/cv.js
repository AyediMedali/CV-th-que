var express = require('express')
var router = express.Router()
var Cv = require('../models/cvSchema')


router.get('/candidature',function (req,res,next) {
    res.render('addCV.twig');
})

router.post('/candidature',function(req,res,next) {

    var newCV = new Cv.model({
        nom : req.body.nom ,
        prenom : req.body.prenom ,
        email : req.body.email , 
        tel : req.body.tel , 
        poste : req.body.poste ,
        message : req.body.message,
        path: req.body.cv
    })

    newCV.save((err,d)=> {
        if(err) {
            res.send(err)
        }
        else {
            res.send('ok') ;
        }
    })
})
router.get('/candidats' , (req,res,next)=> {
    Cv.model.find( (err,data) => {
        if(err) res.send(err) 
        else {
            res.render('listeCandidats.twig',{candidats : data})
        }
    })
})


router.get('/profil/:id' , (req,res,next) => {
    console.log('dkhal')
    Cv.model.find( (err,data) => {
        if(err) res.send(err) 
        else {
            cvDetails = {} 
            for(var x in data) {
                console.log(data[x]._id)

                if (data[x]._id == req.params.id) {
                    cvDetails = data[x]
                }
                console.log("docdetails :")
                console.log(cvDetails)
            }
            res.render('profil.twig' , {profil : cvDetails})
        }
    })
})

router.get('/download/:fileName', function(req, res){

   // var file = fs.readFileSync(__dirname + '/upload-folder/'+req.params.fileName, 'binary');
    const file = `${__dirname}/files/`+req.params.fileName;
    res.download(file); // Set disposition and send it.
  });


module.exports = router;
