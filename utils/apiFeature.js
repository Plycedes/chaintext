import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { ChaintextAddress, ChaintextABI } from "../context/constants";

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        //console.log(firstAccount);
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ChaintextAddress, ChaintextABI, signerOrProvider);

export const connectWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        const result = await contract.getAllAppUser();
        console.log(result);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const convertTime = (time) => {
    const newTime = new Date(time.topNumber());

    const realTime =
        newTime.getHours() +
        "/" +
        newTime.getMinutes() +
        "/" +
        newTime.getSeconds() +
        "Date: " +
        newTime.getDate() +
        "/"(newTime.getMonth() + 1) +
        "/" +
        newTime.getFullYear();

    return realTime;
};
