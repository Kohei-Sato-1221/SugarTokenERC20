pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract SugarToken is StandardToken{
	string public name = "SugarToken";
	string public symbol = "SGR";
	uint public decimals = 10;
	uint public totalSupply;

	function SugarToken(uint initialSupply){
		// uint initialSupply = 1000;
		totalSupply = initialSupply;
		balances[msg.sender] = initialSupply;
	}
}