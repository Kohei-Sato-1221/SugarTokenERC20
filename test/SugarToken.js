var SugarToken = artifacts.require("./SugarToken.sol");

contract('SugarToken', function(accounts){
	it("should put 1000 SugarToken in the first accout", function(){
		return SugarToken.deployed().then(function(instance){
			return instance.balanceOf.call(accounts[0]);
		}).then(function(balance){
			assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first aaccount");
		});
	});
});
