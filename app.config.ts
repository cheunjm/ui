import { ExpoConfig, ConfigContext } from "expo/config";

const appEnv = process.env.APP_ENV ?? "production";
const envSuffix = appEnv === "production" ? "" : `.${appEnv}`;
const bundleId = `so.arami.ui.storybook${envSuffix}`;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "@aramiworks/ui",
  slug: "cheunjm-ui",
  owner: "aramiworks",
  version: "0.0.1",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  scheme: "aramiworks-ui",
  platforms: ["ios", "android", "web"],
  ios: {
    bundleIdentifier: bundleId,
  },
  android: {
    package: bundleId,
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
