export function add(number) {
  if (number === "") {
    return 0;
  }

  const numArray = number.split(",").map(Number);
  let negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  } else {
    const sum = numArray.reduce((sum, num) => sum + num, 0);
    return sum;
  }
}
