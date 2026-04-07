const { version } = require("./package.json");
const [major, minor] = version.split(".");

const appEnv = process.env.APP_ENV ?? "master";
const envSuffix = appEnv === "master" ? "" : `.${appEnv}`;
const bundleId = `so.arami.ui.storybook${envSuffix}`;

/** @type {(ctx: import('expo/config').ConfigContext) => import('expo/config').ExpoConfig} */
module.exports = ({ config }) => ({
  ...config,
  name: "@aramiworks/ui",
  slug: "cheunjm-ui",
  owner: "aramiworks",
  version,
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  scheme: "aramiworks-ui",
  platforms: ["ios", "android", "web"],
  ios: {
    bundleIdentifier: bundleId,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
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
  runtimeVersion: `${major}.${minor}`,
  extra: {
    eas: {
      projectId: "627267da-0d07-4cb1-8154-8d97adfc7f81",
    },
  },
});
