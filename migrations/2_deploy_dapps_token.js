var SugarToken = artifacts.require("./SugarToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SugarToken, 1000);
};
