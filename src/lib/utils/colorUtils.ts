export function getHEXCode(color: string): string {
  switch (color) {
    case "green":
      return "#7AC555";
      break;
    case "purple":
      return "#760DDE";
      break;
    case "orange":
      return "#FFA500";
      break;
    case "blue":
      return "#76A6EA";
      break;
    case "pink":
      return "#E876EA";
      break;
    default:
      return "";
  }
}
