const MissionCommander = require("./app/missionCommander")

const carlo = new MissionCommander("Carlo")
const FrontEnd = new MissionCommander("Rodrigo")
const OnBoarding = new MissionCommander("Fernanada")

console.log(carlo.name);
console.log(FrontEnd.name);
console.log(OnBoarding.name);