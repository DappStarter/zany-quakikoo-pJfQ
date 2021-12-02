require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot blanket radar pumpkin coin hunt kangaroo army genius'; 
let testAccounts = [
"0x353c4d40c02d82fbd3cc79d79ea26d1913eb9f763edf096c1938bef32f6c5b1f",
"0xd199eb9946700369235d36d3b5beec11e3fae0e7508d97f6dc622a83d33c442c",
"0x31686ebd738d90c77c158954bdd88e8b098dac6239d8f64fb0e3f778b9a6f258",
"0x48cfc8646babcb869a0646883079bac6ca6988a9ef2e25b3553c3c146b65d581",
"0xe898e6d63a1caab6721f1ade9b4b0206111eeaa58230fd8f6e9947ba3ff0370d",
"0x55417c0d0f31e4d61b181a8e8ffe8c514f6aec619388a6f19839134e88542ee6",
"0xfc08e0466d296c788c27e8b883bef56b654a01f3200ccf3003383d714cb2d832",
"0x675dea6539cc3f2283549d3382ce32f456b91bf4c05e4694d87f1732106ad4fa",
"0x006d5eb5aaf2cf4a71490bb1b6fea8c07b6749d2995c205459ef62ddea23e882",
"0x2491177fcbd250ace956aead716f602f62bc909eee5237b3928dab56a5d63d65"
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

