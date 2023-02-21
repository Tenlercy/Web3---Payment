// https://eth-goerli.g.alchemy.com/v2/rc90mXBToqB4WMH1SDAk9rSExLEyvJp9

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rc90mXBToqB4WMH1SDAk9rSExLEyvJp9',
      accounts: ['0cf3a66eb91bb37cd24240d228e6dddd899d6d1784ca4324628f8d05133823b2']
    }
  }
}