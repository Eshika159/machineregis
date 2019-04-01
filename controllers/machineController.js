
const Sequelize = require('sequelize');

var machineModel=require('../models/machineModel');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/postgres');

//ADD MACHINE CODE
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

//VIEW MACHINE CODE

exports.viewMachine=function (req,res) {
    const machine= machineModel(sequelize,Sequelize);
    machine.findAll({}).then((data) => {
        //it will be objects of machine
        console.log("View machines------------->"+data);
    }).catch((err) => {
        console.log(err);
    });
}

//UPDATE MACHINE CODE

exports.updateMachine=function (req,res) {
    const machine= machineModel(sequelize,Sequelize);
    machine.update({
       // machineID:req.body.machineID,
        machineName:req.body.machineName,
        serialNo:req.body.serialNo,
        modelID:req.body.modelID,
        ip:req.body.ip,
        machineStatus:req.body.machineStatus
    }, {
        where: {
            id: req.body.machineID
        }
    }).then(() => {
        console.log('Updated');
    }).catch((e) => {
        console.log("Error"+e);
    });
}


//DELETE MACHINE CODE
exports.deleteMachine=function() {
    const machine= machineModel(sequelize,Sequelize);
    machine.destroy({
        where: {
            id: 1
        }
    }).then(() => {
        console.log("Deleted");
    }).catch((e) => {
        console.log("Error" + e);
    });
}