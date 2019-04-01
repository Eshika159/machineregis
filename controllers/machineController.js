
const Sequelize = require('sequelize');

var machineModel=require('../models/machineModel');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/postgres');


exports.index=function(req,res){
const machine= machineModel(sequelize,Sequelize);

machine.create(
    {
    machineID:req.body.machineID,
    machineName:req.body.machineName,
    serialNo:req.body.serialNo,
    modelID:req.body.modelID,
    ip:req.body.ip,
    machineStatus:req.body.machineStatus

}).catch(function(err) {
    // print the error details
    console.log(err);
});
console.log("After Machine model data sent ");

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });

  res.render('index',{title:"Machine added  "});
}