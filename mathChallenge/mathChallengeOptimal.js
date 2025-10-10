const mathChallenge = str => {
  //first split

  const strArr = str.split(" ");

  const num1 = strArr[0];
  const operation = strArr[1];
  const num2 = strArr[2];

  const result = strArr[4];

  //iterae through num1 to find the idnex of the quesiton mark
  //then calcualte the solution using brute froce for each value
  //compute if the results match if so return and solution /break
  //if they don't continute with the next iteration

  const questionMarkIndex = num1.indexOf("?");
  console.log("questinMarkindex", questionMarkIndex);
  let firstResultVal = -1;
  let secondResultVal = -1;
  for (let i = 0; i <= 9; i++) {
    const testValue = parseInt(num1.slice(0, questionMarkIndex) + i + num1.slice(questionMarkIndex + 1));

    let testResult = -1;
    switch (operation) {
      case "*":
        testResult = testValue * parseInt(num2);
        break;
      case "+":
        testResult = testValue + parseInt(num2);
        break;
      case "-":
        testResult = testValue - parseInt(num2);
        break;
      case "/":
        testResult = testValue / parseInt(num2);
        break;
    }

    const testResultStr = testResult.toString();
    //chcek if the solution is valid or not
    //sizes don't match continue as it can't be valid
    if (testResultStr.length !== result.length) {
      console.log("isnide if");
      continue;
    }
    //check if they match
    for (let j = 0; j < testResultStr.length; j++) {
      if (result[j] === "?") {
        secondResultVal = testResultStr[j];
        firstResultVal = i;
      } else if (result[j] !== testResultStr[j]) {
        firstResultVal = -1;
        secondResultVal = -1;
        break;
      }
    }
    if (firstResultVal !== -1 && secondResultVal !== -1) {
      console.log(firstResultVal, secondResultVal);
      break;
    }
  }
  return `${firstResultVal} ${secondResultVal}`;
  // console.log("question", questionMarkIndex);
};

console.log(mathChallenge("18?1 + 9 = 189?"));
// Output: "3 9"));
