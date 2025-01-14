function mySlice(arr, start = 0, end = arr.length) {
  let result = [];
  if (start < 0) {
    start = arr.length - Math.abs(start);
  }
  if (end < 0) {
    end = arr.length - Math.abs(end);
  }
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}

function myIndexOf(arr, item, from = 0) {
  if (from < 0) from = arr.length + from;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

function myIncludes(arr, item, from = 0) {
  if (from < 0) from = arr.length + from;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }
  return false;
}
