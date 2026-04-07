import React from "react";

function createIconComponent(fontFamily: string) {
  function IconComponent({
    name,
    size = 24,
    color = "#000",
    style,
    testID,
    accessibilityLabel,
    ...props
  }: {
    name: string;
    size?: number;
    color?: string;
    style?: any;
    testID?: string;
    accessibilityLabel?: string;
    [key: string]: any;
  }) {
    return (
      <span
        data-testid={testID}
        aria-label={accessibilityLabel || name}
        role="img"
        style={{
          fontFamily: "'Material Icons'",
          fontSize: size,
          color,
          display: "inline-block",
          width: size,
          height: size,
          lineHeight: `${size}px`,
          textAlign: "center",
          fontFeatureSettings: "'liga'",
          WebkitFontSmoothing: "antialiased" as any,
          ...style,
        }}
        {...props}
      >
        {name.replace(/-/g, "_")}
      </span>
    );
  }
  IconComponent.displayName = fontFamily;
  return IconComponent;
}

export const MaterialIcons = createIconComponent("MaterialIcons");
export default MaterialIcons;
