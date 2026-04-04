module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./src/tokens/tamagui.config.ts",
          disableExtraction: true,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
