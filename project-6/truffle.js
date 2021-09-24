const HDWalletProvider = require("./node_modules/@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/0c8535c9b3714c6e8fa0601024d8c8c0`),
      network_id: 4,
      gas: 8500000,
      confirmations: 2,
      timeoutBlocks: 50000,
      websocket: true,
      skipDryRun: true,
      networkCheckTimeout: 999999,
    },
  },

  compilers: {
    solc: {
      version: "^0.4.24",
    }
  }
};