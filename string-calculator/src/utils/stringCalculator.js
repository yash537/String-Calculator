export function add(number) {
  if (number === "") return 0;

  number = number.replace(/\\n/g, "\n");

  let delimiter = /,|\n|;/;

  const customDelimiterMatch = number.match(/^\/\/(.+?)\n/);
  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
    number = number.slice(customDelimiterMatch[0].length);
  }

  const numArray = number
    .split(delimiter)
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map(Number);

  let negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
