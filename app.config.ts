import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "@cheunjm/ui",
  slug: "cheunjm-ui",
  version: "0.0.1",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  scheme: "cheunjm-ui",
  platforms: ["ios", "android", "web"],
  ios: {
    bundleIdentifier: "com.aramiworks.ui.storybook",
  },
  android: {
    package: "com.aramiworks.ui.storybook",
  },
  web: {
    bundler: "metro",
  },
  extra: {
    eas: {
      projectId: "f87a5c53-8609-45df-8af5-67cde87098c1",
    },
  },
});
