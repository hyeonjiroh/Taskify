export function getColorName(hex: string): string {
  switch (hex) {
    case "#7AC555":
      return "green";
      break;
    case "#760DDE":
      return "purple";
      break;
    case "#FFA500":
      return "orange";
      break;
    case "#76A6EA":
      return "blue";
      break;
    case "#E876EA":
      return "pink";
      break;
    default:
      return "";
  }
}
