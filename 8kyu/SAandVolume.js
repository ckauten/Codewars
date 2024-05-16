// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, d) {
  let arr = [];
  arr[0] = 2 * d * w + 2 * d * h + 2 * h * w;
  arr[1] = w * h * d;
  return arr;
}
