module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          root: ".",
          extensions: ['.ts', '.tsx', '.json'],
          alias: {
            '~': './src',
          }
        }
      ],
    ],
  };
};
