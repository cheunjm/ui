/**
 * Animation Tokens — hand-written (not from Figma)
 *
 * These define motion presets used across the design system.
 * Based on MD3 motion guidelines: https://m3.material.io/styles/motion
 */

/**
 * Duration scale — MD3 standard duration tokens
 * https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
 */
export const duration = {
  short1: 50,
  short2: 100,
  short3: 150,
  short4: 200,
  medium1: 250,
  medium2: 300,
  medium3: 350,
  medium4: 400,
  long1: 450,
  long2: 500,
  long3: 550,
  long4: 600,
  extraLong1: 700,
  extraLong2: 800,
  extraLong3: 900,
  extraLong4: 1000,
} as const;

export type DurationToken = keyof typeof duration;

export const animation = {
  /** Standard easing for most transitions */
  standard: {
    duration: duration.medium2,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  },
  /** Standard decelerate — elements entering the screen */
  standardDecelerate: {
    duration: duration.medium1,
    easing: "cubic-bezier(0, 0, 0, 1)",
  },
  /** Standard accelerate — elements leaving the screen */
  standardAccelerate: {
    duration: duration.short4,
    easing: "cubic-bezier(0.3, 0, 1, 1)",
  },
  /** Emphasized — full emphasized path-easing preset (enter + exit).
   *  MD3 path easing is approximated here with the standard decelerate curve
   *  because CSS/RN do not natively support path easing.
   *  See: https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
   */
  emphasized: {
    duration: duration.long2,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  },
  /** Emphasized decelerate — entrances with emphasis */
  emphasizedDecelerate: {
    duration: duration.medium4,
    easing: "cubic-bezier(0.05, 0.7, 0.1, 1)",
  },
  /** Emphasized accelerate — exits with emphasis */
  emphasizedAccelerate: {
    duration: duration.short4,
    easing: "cubic-bezier(0.3, 0, 0.8, 0.15)",
  },
  /** Quick interactions (ripples, state changes) */
  quick: {
    duration: duration.short2,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  },
} as const;

export type AnimationToken = keyof typeof animation;
