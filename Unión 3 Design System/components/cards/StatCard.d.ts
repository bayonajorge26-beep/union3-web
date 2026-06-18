import * as React from "react";

export interface StatCardProps {
  /** Optional icon node above the number. */
  icon?: React.ReactNode;
  /** Big display value, e.g. "+15" or "500+". */
  value: React.ReactNode;
  /** Uppercase label beneath, e.g. "años de experiencia". */
  label: string;
  /** @default "center" */
  align?: "center" | "left";
  style?: React.CSSProperties;
}

/** Oversized trust statistic (Anton numeral + uppercase label) for the confianza band. */
export function StatCard(props: StatCardProps): JSX.Element;
