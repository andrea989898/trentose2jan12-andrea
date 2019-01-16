const express = require('express');
const area = require('./area');

const areaRoutes = express.Router(); 

areaRoutes.route('/')
.get(function (req, res) {
    var sides = [parseFloat(req.query.side1),parseFloat(req.query.side2)]
    var result = area.getArea(sides)
    if(result == -1){
        res.status(400)
        res.json({result:result})
    }else{
        res.status(200)
        res.json({result:result})
    } 
})

module.exports = areaRoutes;