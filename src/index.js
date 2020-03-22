function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let arr = expr.match(/([+*-/)(]{1}|\d+)/g);

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] == '/' && arr[i+1] == '0') throw new Error('TypeError: Division by zero.');
  }

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] == '*'){
      let result = Number(arr[i-1]) * Number(arr[i+1]);
      arr.splice(i-1, 3, result);
      i--;
    }
    if (arr[i] == '/')  {
      let result = Number(arr[i-1]) / Number(arr[i+1]);
      arr.splice(i-1, 3, result);
      i--;
    }
  }

  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] == '+'){
      let result = Number(arr[i-1]) + Number(arr[i+1]);
      arr.splice(i-1, 3, result);
      i--;
    }
    if (arr[i] == '-')  {
      let result = Number(arr[i-1]) - Number(arr[i+1]);
      arr.splice(i-1, 3, result);
      i--;
    }
  }

  return arr[0];
}

module.exports = {
    expressionCalculator
}
