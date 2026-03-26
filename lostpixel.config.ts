import { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  generateOnly: true,
  failOnDifference: true,
  imagePathBaseline: ".lostpixel/baseline/",
  imagePathCurrent: ".lostpixel/current/",
  imagePathDifference: ".lostpixel/difference/",
  threshold: 0,
  browser: "chromium",
};
