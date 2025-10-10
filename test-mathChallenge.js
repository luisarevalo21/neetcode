// // Copy of your mathChallenge function (kept unchanged)
// const mathChallenge = str => {
//   const resultArr = str.split(" ");
//   const num1 = resultArr[0];
//   const operation = resultArr[1];
//   const num2 = resultArr[2];
//   const result = resultArr[4];

//   // find where the question mark is in the first number
//   let questionMarkIndex = -1;
//   for (let i = 0; i < num1.length; i++) {
//     if (num1[i] === "?") {
//       questionMarkIndex = i;
//     }
//   }

//   // find the index of the question mark in result
//   let questionMarkResultIndex = -1;
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === "?") {
//       questionMarkResultIndex = i;
//     }
//   }

//   let resultNumOne = -1;
//   let resultNumTwo = -1;
//   for (let i = 0; i <= 9; i++) {
//     const num1Array = num1.split("");
//     num1Array[questionMarkIndex] = i;
//     const num1Option = num1Array.join("");

//     const evalResult = eval(`${num1Option}${operation}${num2}`);

//     function helper(eval1, eval2) {
//       const evalArr = eval2.split("");
//       const eval1Arr = eval1.toString().split("");
//       evalArr[questionMarkResultIndex] = eval1Arr[questionMarkResultIndex];
//       const evalRes = evalArr.join("");

//       if (evalRes.toString() === eval1.toString()) {
//         resultNumTwo = evalArr[questionMarkResultIndex];
//         return true;
//       }
//       return false;
//     }

//     if (helper(evalResult, result)) {
//       resultNumOne = i;
//       break;
//     }
//   }

//   return `${resultNumOne} ${resultNumTwo}`;
// };

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

    //chcek if the solution is valid or not
    //sizes don't match continue as it can't be valid
    if (testResult.toString().length !== result.length) {
      continue;
    }
    //check if they match
    const testResultStr = testResult.toString();
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

// Output: "3 9"));

// Test cases: each input has '?' in both the first and last number and a unique solution.
const tests = [
  // 18?1 + 9 = 189?  => 1881 + 9 = 1890  => first ? = 8, result ? = 0
  { in: "18?1 + 9 = 189?", expect: "8 0" },

  // ?5 + 5 = 6?  => 55 + 5 = 60  => first ? = 5, result ? = 0
  { in: "?5 + 5 = 6?", expect: "5 0" },

  // 4? - 2 = 4?  => 42 - 2 = 40  => first ? = 2, result ? = 0
  { in: "4? - 2 = 4?", expect: "2 0" },

  // 10? + 90 = 1?0 => 100 + 90 = 190 => first ? = 0, result ? = 9
  { in: "10? + 90 = 1?0", expect: "0 9" },

  // 1? * 9 = 17? => 19 * 9 = 171 => first ? = 9, result ? = 1
  { in: "1? * 9 = 17?", expect: "9 1" },

  // 100? + 9 = 100? => 1000 + 9 = 1009 => first ? = 0, result ? = 9
  { in: "100? + 9 = 100?", expect: "0 9" },

  // 9? - 1 = 8? => 90 - 1 = 89 => first ? = 0, result ? = 9
  { in: "9? - 1 = 8?", expect: "0 9" },

  // ?7 * 2 = 1?4 => 87 * 2 = 174 => first ? = 8, result ? = 7
  { in: "?7 * 2 = 1?4", expect: "5 1" },
];

let pass = 0;
tests.forEach((t, i) => {
  const out = mathChallenge(t.in);
  const ok = out === t.expect;
  if (ok) pass++;
  console.log(`#${i + 1} input: "${t.in}"`);
  console.log(`   expected: "${t.expect}", got: "${out}" => ${ok ? "PASS" : "FAIL"}`);
});

console.log(`\n${pass}/${tests.length} tests passed.`);
