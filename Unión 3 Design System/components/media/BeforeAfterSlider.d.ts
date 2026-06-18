import * as React from "react";

export interface BeforeAfterSliderProps {
  /** Content for the BEFORE layer; defaults to a color placeholder. */
  before?: React.ReactNode;
  /** Content for the AFTER layer; defaults to a color placeholder. */
  after?: React.ReactNode;
  /** @default "Antes" */
  beforeLabel?: string;
  /** @default "Después" */
  afterLabel?: string;
  /** Initial handle position, 0–100. @default 50 */
  start?: number;
  /** Pixel height. @default 380 */
  height?: number;
  style?: React.CSSProperties;
}

/**
 * Draggable before/after comparison wipe with a red handle.
 * @startingPoint section="Media" subtitle="Before/after work comparison slider" viewport="700x420"
 */
export function BeforeAfterSlider(props: BeforeAfterSliderProps): JSX.Element;
