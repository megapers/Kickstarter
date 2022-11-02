# Decentralized Kickstarter project for EatTheBlocks bootcamp

## Tech stack

### Smart Contracts

- Build with Solidity

### Unit testing

- Hardhat

### Interface library

- EthersJS
- Rainbow/WAGMI

### Front end

- NextJS, Semantic UI for CSS

### Deployed

[-Vercel:](https://kickstarter-five.vercel.app/)

## Deployment: run locally

### 1. Clone/download the repo

### 2. Start Frontend

To start the frontend run

```
npm install
npm run dev
```

### 3. Connect your wallet to Goerli test network (contract id: 0xEF6cF9a03c9B8eC471e2E53d8f7841CE54ba1671)

### 3a. Or start a [local node](https://hardhat.org/getting-started/#connecting-a-wallet-or-dapp-to-hardhat-network)

Hardhat is a blockchain development toolkit used to compile your solidity files, run tests and run a local blockchain node.

```
	npm install
	npx hardhat node
```

### 3b. Open a new terminal and deploy the smart contract in the `localhost` network

```
npx hardhat run --network localhost scripts/deploy.js
```

### 3c. Follow the instructions to link hardhat to metamask

[Connecting hardhat to metamask](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node)

### 3d. Reset Metamask Account in Advanced Settings

## Access deployed application

### 1. Folow the link to open the app: [-Kickstarter](https://kickstarter-five.vercel.app/)

### 2. Connect your wallet

### 3. Select Goerli network
