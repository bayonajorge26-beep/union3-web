import * as React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  /** Tick color. @default "var(--accent)" */
  color?: string;
  style?: React.CSSProperties;
}

/** Wide-tracked uppercase overline with a red tick — sits above section titles. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
