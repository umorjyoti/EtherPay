//

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AuM38ovEn1Jw6-fG2nDpONtKTX0cgs-a',
      accounts: ['6c1228cb8f3782b81118686a2694b1d161816a7c2b86e0f932c219528a33bd83'],
    },
  },
};