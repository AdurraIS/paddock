import Web3 from "web3";

const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];

export async function getMetaMaskProvider() {

    if (!window.ethereum) throw new Error('No MetaMask found!');

    const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.requestAccounts();

    if (!accounts || !accounts.length) throw new Error("Permission required!");

    return web3;
}

export async function getBalance(address) {
    const web3 = await getMetaMaskProvider();

    const contractAddress = '0xdbbB13f74609E641BFA0c00DEdAd066De392912D';

    const contract = new web3.eth.Contract(abi, contractAddress);

    const balance:number = await contract.methods.balanceOf(address).call();
    return web3.utils.fromWei(balance, 'ether');
}