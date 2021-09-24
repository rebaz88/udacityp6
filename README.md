# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/overview.png)

![truffle test](images/farm_details.png)

![truffle test](images/product_details.png)

![truffle test](images/events.png)


## Diagrams

![diagrams](images/diagram_activity.jpg)
![diagrams](images/diagram_sequence.jpg)
![diagrams](images/diagram_state.jpg)
![diagrams](images/diagram_class.jpg)

## Transaction and Contract Info
### Transaction Hash
0x2d6dcbc1538c9b62441099aaf2ac6583e9a5202872a719b9413c774aaa33e9ec

### Contract Address
0x3719463f8640bD0680356bcCaF87bF24B11aF1B5

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

You also need to create a .secret file with your own mnemonic

### Installing

A step by step by step guide

Clone this repository:

```
git clone https://github.com/rebaz88/udacityp6.git
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_1.png)
![truffle test](images/truffle_2.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
