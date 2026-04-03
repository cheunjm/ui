import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "@arami-works/ui",
  slug: "arami-works-ui",
  owner: "arami-works",
  version: "0.0.1",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  scheme: "arami-works-ui",
  platforms: ["ios", "android", "web"],
  ios: {
    bundleIdentifier: "com.aramiworks.ui.storybook",
    developmentTeam: "2ZM4PS6CMF",
  },
  android: {
    package: "com.aramiworks.ui.storybook",
  },
  web: {
    bundler: "metro",
  },
  updates: {
    url: "https://u.expo.dev/627267da-0d07-4cb1-8154-8d97adfc7f81",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  extra: {
    eas: {
      projectId: "627267da-0d07-4cb1-8154-8d97adfc7f81",
    },
  },
});
