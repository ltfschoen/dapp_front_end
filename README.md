# Dapp Front End

## About

* Etherium blockchain smart contract Dapp Front End implementation of the sample Donation contract to interact with associated Dapp Back End coded in Solidity following the [Remix tutorial using Mist and Geth](https://remix.readthedocs.io/en/latest/tutorial_mist.html)

## Setup Instructions

* Create Blockchain Test Directory:
	
	```
	mkdir ~/blockchain/test_chain_directory/
	```

* Run Geth (Go Ethereum) Test Node HTTP-RPC server endpoint at http://0.0.0.0:8545

	```
	geth --ipcpath="~/blockchain/test_chain_directory/geth.ipc" \
	--datadir="~/blockchain/test_chain_directory/" \
	--dev console \
	--targetgaslimit "994712388" \
	--port 3000 \
	--networkid 23422 \
	--identity node1 \
	--nodiscover \
	--nat none \
	--rpccorsdomain '*' \
	--rpc \
	--rpcport 8545 \
	--rpcaddr 0.0.0.0 \
	--rpcapi "eth,web3" \
	--nodiscover \
	--maxpeers=6
	``` 

	* Note: Optionally close server in Geth console with: `admin.stopRPC()`

* Install [Node.js](https://nodejs.org/en/download/)

* Install [Yarn](https://yarnpkg.com)

* Install dependencies `yarn install`

* Run server `npm start`

* Open in web browser [http://localhost:8080](http://localhost:8080) `open http://localhost:8080`

* Open web browser Developer Tools. Run the following in browser console to show Ethereum Accounts and latest Block:

	```
	web3.eth.accounts
	web3.eth.blockNumber
	```

## Screenshots

	![alt tag](https://raw.githubusercontent.com/ltfschoen/dapp_front_end/master/screenshots/dapp_front_end.png)


