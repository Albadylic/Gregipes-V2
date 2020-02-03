export default function genRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return index;
}
