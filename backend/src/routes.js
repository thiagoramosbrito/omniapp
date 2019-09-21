const express = require('express');
const DevController = require('./controllers/DevController');


const routes = express.Router();



// routes.get('/', (req,res)=>{
//     return res.json({message:`E ai ${req.query.name}`});
// });

// routes.post('/devs',(req,res)=>{
//     return res.json(req.body);
// });

routes.post('/devs',DevController.store);


module.exports = routes;