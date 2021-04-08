const DidRegistryContract = require('ethr-did-registry');
const Web3 = require('web3');
const web3 = new Web3();

let networkId = 3 // Ropsten


const didReg = new web3.eth.Contract(DidRegistryContract.abi, DidRegistryContract.networks[networkId].address);

console.log(didReg);