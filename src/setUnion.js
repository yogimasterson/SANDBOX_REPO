export default function setUnion(set1, set2){

  let union = new Set([...set1, ...set2]);
  return Array.from(union)
}
