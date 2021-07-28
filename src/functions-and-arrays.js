// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    //console.log(n1);
    return n1;
  } else {
    //console.log(n2);
    return n2;
  }
}
// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(arr) {
  let temp;
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length == 2) {
    if (arr[0].length == arr[1].length) {
      return arr[0];
    }
  } else if (arr.length > 2) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[0].length < arr[i].length) {
        arr[0] = arr[i];
      }
    }
    return arr[0];
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    if (arr.length == 1) {
      return arr[0];
    } else {
      arr.forEach((element) => {
        sum += element;
      });
      return sum;
    }
  }
}

function add(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else if (arr.length > 1) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        sum += arr[i];
      } else if (typeof arr[i] == "string") {
        sum += arr[i].length;
      } else if (typeof arr[i] == "boolean") {
        if (arr[i] == true) {
          sum += 1;
        } else {
          sum = sum + 0;
        }
      } else if (typeof arr[i] == "object") {
        throw new Error("Unsupported data type sir or ma'am");
        return;
      }
    }
    //console.log(sum)
    return sum;
  }
}

// Progression #4: Calculate the average
function midPointOfLevels(array) {
  let sum = 0;
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return array[0];
  } else {
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  }
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageWordLength(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return null;
  } else if (arr.includes("bread")) {
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i].length;
    }
    return sum / arr.length;
  }
}
// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function avg(arr) {
  let n = arr.length;
  if (arr.length === 0) {
    return null;
  } else if (arr.length > 1) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        sum += arr[i];
      } else if (typeof arr[i] == "string") {
        sum += arr[i].length;
      } else if (typeof arr[i] == "boolean") {
        if (arr[i] == true) {
          sum += 1;
        } else {
          sum = sum + 0;
        }
      } else if (typeof arr[i] == "object") {
        throw new Error("Unsupported data type sir or ma'am");
        return;
      }
    }
    //console.log(sum)
    return parseFloat((sum / arr.length).toFixed(2));
  }
}
// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];
function uniqueArray(arr) {
  let newArr = [];
  if (arr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (newArr.includes(arr[i]) === false) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    return newArr;
    // let set = new Set(arr);
    // newArr = [...set];
    // return newArr;
  }
}
// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
function searchElement(arr, searchWord) {
  let exists = false;
  if (arr.length === 0) {
    return null;
  } else {
    arr.includes(searchWord) ? (exists = true) : (exists = false);
    return exists;
  }
}
// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(array, key) {
  if (array.length === 0) {
    return 0;
  } else if (array.length > 0) {
    //console.log("else");
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == key) {
        count = count + 1;
      }
    }
    //console.log(count);
    return count;
  }
  return 0;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  let size = matrix.length;
  let max = 0;
  console.log(size);
  for (let i = 0; i < size; i++) {
    //let row = matrix[i];
    for (let j = 0; j < size; j++) {
      if (j < size - 3) {
        let rowMax =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (max < rowMax) {
          max = rowMax;
        }
      }

      if (i < size - 3) {
        let columnMax =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (max < columnMax) {
          max = columnMax;
        }
      }
    }
  }
  console.log(max);
  return max;
}
