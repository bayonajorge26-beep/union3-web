import * as React from "react";

export interface ServiceCardProps {
  /** Icon node rendered in the chip (e.g. an inline Lucide SVG). */
  icon?: React.ReactNode;
  /** Service name, e.g. "Frenos". */
  title: string;
  /** One-line description of the service. */
  description: string;
  style?: React.CSSProperties;
}

/**
 * Dark service tile with icon chip, title and description; red top-rule on hover.
 * @startingPoint section="Cards" subtitle="Service tile for the services grid" viewport="700x260"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
