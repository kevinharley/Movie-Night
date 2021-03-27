export const tabletBreakpoint = `${768}px`;
export const laptopBreakpoint = `${1024}px`;
export const desktopBreakpoint = `${1280}px`;
export const largeScreenBreakpoint = `${2048}px`;
export const ginormousScreenBreakpoint = `${3840}px`;

/**
 * A simple utility function go convert px to rem
 * in case measurement units are supplied in px
 */
export function pxToRem(px) {
  const mulitplier = 0.0625;

  return `${px * mulitplier}rem`;
}