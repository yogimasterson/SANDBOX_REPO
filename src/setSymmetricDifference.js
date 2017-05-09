export default function setSymmetricDifference(set1, set2){

  const diff1 = new Set([...set1].filter(x => !set2.includes(x)));
  const diff2 = new Set([...set2].filter(x => !set1.includes(x)));
  const arr1 = Array.from(diff1)
  const arr2 = Array.from(diff2)

  const finalArr = arr1.concat(arr2)

  return finalArr
}
