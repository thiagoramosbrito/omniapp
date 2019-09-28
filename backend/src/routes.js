const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DisLikeController');


const routes = express.Router();




// routes.get('/', (req,res)=>{
//     return res.json({message:`E ai ${req.query.name}`});
// });

// routes.post('/devs',(req,res)=>{
//     return res.json(req.body);
// });

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);
routes.post('/devs/:devId/likes',LikeController.store);
routes.post('/devs/:devId/dislikes',DisLikeController.store);


module.exports = routes;