// truffleプロジェクトのイニシャライズ
truffle init

// openZeppelinのインストール 
npm init -f 
npm install zeppelin-solidity


// テストの実行
truffule develop //対話型コンソールが起動
migrate

sgr = SugarToken.at(SugarToken.address)
sgr.name() //名前の確認
sgr.symbol() //シンボルの確認
sgr.totalSupply() //総発行量の確認
sgr.balanceOf(web.eth.accounts[0]) //アカウント残高の確認
sgr.transfer(web3.eth.accounts[1], 100) //送金


//Development NWにデプロイ
//注：Geth側でアンロックしていないと失敗するよ
truffle migrate --network development


