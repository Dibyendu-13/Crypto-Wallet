require('@nomiclabs/hardhat-waffle') //plugin to build smart contracts tests

module.exports={
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/8sdVbfBPk98pnt7i9jjCtvOLCHAcf7BT',
      accounts:['6850247075f7aec4029b72ecf1ab4ec1c060ff64f7d350935183eb697bfb3630']
    }
  }

}