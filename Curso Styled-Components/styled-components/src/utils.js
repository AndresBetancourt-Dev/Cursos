export const Colors = {
  primary: "#333333",
  dark: "#111111",
};

export function setupBorder({ color, width, type = "solid" }) {
  return `${width}px ${type} ${color}`;
}
