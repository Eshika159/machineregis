
//var sequelize=require('../app');

console.log("Inside Machine Model");
module.exports=(sequelize,type) =>{
return sequelize.define('Machine',{
    'machineID':{type: type.STRING,primaryKey:true},
    'machineName':type.STRING,
    'serialNo':type.STRING,
    'modelID':type.STRING,
    'ip':type.STRING,
    'machineStatus':type.STRING
});

}
//module.exports=Machine;