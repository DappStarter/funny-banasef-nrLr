require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach cost ridge common grace cover army genius'; 
let testAccounts = [
"0x38842640e80de128786fa00c1f1f83ac137051718d6ceaeffa3abc027d60c8e6",
"0x5fdb8e85440a071034bf1cc676156b7a78da4cd8eb4abe15a02db7062612bacc",
"0xbf53716c12c93e8a5cb38971c9fe878bd38a4c514eaa5510944893fed3de211a",
"0xe440c916e851cc4d7403708847d7d3f5c82d40ff9ec9d264977cd5eeca8de406",
"0x67062b425ac865c93bd8f8c38d17ef65bbe1ba49882a6ac9fa421605bcd5a72e",
"0x98138ec5a1a88cc33f2177e8611bd91db2f3eb1afd13b095ce66102820eccb30",
"0x0502605bb0045f459d3e241f782ab2f9c7924bd82f8905d9c33255ec176a4ba3",
"0xb89720d9749848a8a82fda408054896b91f0949a3f282b4089161a61bd70c807",
"0x16c7f797ae4c9378b33ad59dd5a305cbc7bb25f7209aab269ed22b20d35cf9c6",
"0x95462b7767b5361aa13632a72d646841891458d1a286a96c41aae0743e0c8e18"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

