import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "solid" */
  variant?: "solid" | "outline" | "neutral";
  style?: React.CSSProperties;
}

/** Small uppercase badge for categories / status (solid red, outline, neutral). */
export function Badge(props: BadgeProps): JSX.Element;
