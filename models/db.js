var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cvdb')

mongoose.connection.on('connected', ()=>{
    console.log('connected to database: ' );
});
mongoose.connection.on('error', (err)=>{
    console.log('Connection Error: '+ err);
});
