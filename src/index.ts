import express, { Request, Response } from "express";
import { ethers, JsonRpcProvider } from "ethers";
import dotenv from "dotenv";
import routes from "./Routes/routes";
import fs from 'fs';

import API_URL = process.env.API_URL;
import PRIVATE_KEY = process.env.PRIVATE_KEY; 
import contractAddress = process.env.CONTRACT_ADDRESS;


const abi = JSON.parse(fs.readFileSync('./abi.json', 'utf-8'));
// Setup ethers provider and contract
const provider = new JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
//const contractAddress = "0xB1727e55B7A3941E73987c55efF75d96EEAa0194";
//const abi = [("./abi.json")];
//const abi = ["function getData() view returns (string)", "function setData(string calldata _data)"];
const contract = new ethers.Contract(contractAddress, abi, wallet);

// Initialize routes
routes(app, contract);

app.listen(3000, () => console.log("Server is running on port 3000"));
