import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "whatsapp" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Leading icon node (e.g. an inline SVG). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Bold uppercase action button — the core CTA of the Unión 3 brand.
 * @startingPoint section="Forms" subtitle="Brand CTA button, 4 variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
