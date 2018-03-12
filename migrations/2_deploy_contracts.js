var ownable = artifacts.require("ownable");
var safemath = artifacts.require("safemath");
// var erc721 = artifacts.require("erc721");
var zombiefactory = artifacts.require("zombiefactory");
var zombiefeeding = artifacts.require("zombiefeeding");
var zombiehelper = artifacts.require("zombiehelper");
var zombieattack = artifacts.require("zombieattack");
var zombieownership = artifacts.require("zombieownership");

module.exports = function(deployer) {
	deployer.deploy(ownable);
	deployer.deploy(safemath);
	// deployer.deploy(erc721);
	deployer.deploy(zombiefactory);
	deployer.deploy(zombiefeeding);
	deployer.deploy(zombiehelper);
	deployer.deploy(zombieattack);
	deployer.deploy(zombieownership);
};