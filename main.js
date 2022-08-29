function findThirdMax(arr) {
  sortArray(arr);
  return arr[2];
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

function tryRemoveFromArray(arr, index) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  return arr;
}

function isSubstring(str1, str2) {
  for (let i = 0; i <= str2.length - str1.length; i++) {
    if (str2.slice(i, i + str1.length) === str1) return true;
  }
  return false;
}

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}

const canvas = document.querySelector("canvas");
const rect = new Rectangle(10, 10, 200, 100, "#000000");
rect.render(canvas);
