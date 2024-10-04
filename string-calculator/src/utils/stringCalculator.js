export function add(number) {
  if (number === "") return 0;

  number = number.replace(/\\n/g, "\n");

  let delimiter = /,|\n/;

  const numArray = number
    .split(delimiter)
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map(Number);

  console.log("Number array after split and conversion:", numArray);

  let negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
