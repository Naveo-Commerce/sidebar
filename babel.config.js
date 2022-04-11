module.exports = {
  presets: ['@babel/preset-typescript', ['@babel/preset-env',
    { useBuiltIns: 'entry' }]],

    env: {
      test: {
        presets: [
          ['@babel/preset-env', { modules: 'commonjs', 
            targets: {
              node: 'current',
          }, }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ]
      },
    },
}

