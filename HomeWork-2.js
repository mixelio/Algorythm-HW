const nums = [2, 2, 3, 3, 3, 4, 5, 5];
const arr1 = [1, 3, 7];
const arr2 = [2, 4, 5, 6];

let simplier = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (result[i]) {
      arr[i] = result[i]
    } else {
      arr[i] = '_';
    }
  }
  
  console.log(result, arr);
}

let unityArr = (arr1, arr2) => {
  let result = [];
  let start1 = 0;
  let start2 = 0;
  do {
    if (arr1[start1] < arr2[start2]) {
      result.push(arr1[start1])
      start1++
    } else {
      result.push(arr2[start2])
      start2++
    }
  } while(start1 < arr1.length - 1 || start2 < arr2.length - 1);
  
  if (arr1[start1] < arr2[start2]) {
    result.push(arr1[start1])
    result.push(arr2[start2])
  } else {
    result.push(arr2[start2])
    result.push(arr1[start1])
  }
  
  console.log(result)
  return result;
}


simplier(nums);

unityArr(arr1, arr2);
