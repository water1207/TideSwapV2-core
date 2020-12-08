module.exports = {
  compilers: {
    solc: {
      version: '0.5.16',
      docker: false,
      parser:'solcjs',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
}