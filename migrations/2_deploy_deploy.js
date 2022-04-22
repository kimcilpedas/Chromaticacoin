const Chromatica = artifacts.require('../Chromatica.sol');
const Payable = artifacts.require('../Payable.sol');

module.exports = function (deployer ) {
  deployer.deploy(Deploy);
};
