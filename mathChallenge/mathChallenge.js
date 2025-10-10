const mathChallenge = str => {
  //first get the operations and split the string to seperate values
  //i need the first value and find which index the question mark is
  //the second value to perform the operation

  //then the result and also find where the question mark is?
  //no just store the value i'll iterate through it afterwards and see if the result matches my result

  const resultArr = str.split(" ");
  const num1 = resultArr[0];

  const operation = resultArr[1];
  const num2 = resultArr[2];
  const result = resultArr[4];

  console.log("result", num1);

  //find where the quesiton mark is in the first numebr and save the idnex

  let questionMarkIndex = -1;
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] === "?") {
      questionMarkIndex = i;
    }
  }

  //find the index of the question mark in result
  let questionMarkResultIndex = -1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "?") {
      questionMarkResultIndex = i;
    }
  }

  console.log("quesion mak result inde", questionMarkIndex);

  //perform the opertaiosn and checking if i found the result

  let resultNumOne = -1;
  let resultNumTwo = -1;
  for (let i = 0; i <= 9; i++) {
    const num1Array = num1.split("");
    num1Array[questionMarkIndex] = i;
    const num1Option = num1Array.join("");

    const evalResult = eval(`${num1Option}${operation}${num2}`);

    //check i the evalResult matches the result i've been given by adding the number from my evalresult into the result and check i they are the same
    if (helper(evalResult, result)) {
      resultNumOne = i;
      break;
    }

    function helper(eval1, eval2) {
      const evalArr = eval2.split("");

      const eval1Arr = eval1.toString().split("");
      evalArr[questionMarkResultIndex] = eval1Arr[questionMarkResultIndex];
      const evalRes = evalArr.join("");

      if (evalRes.toString() === eval1.toString()) {
        resultNumTwo = evalArr[questionMarkResultIndex];
        return true;
      }
      return false;
    }
  }

  return `${resultNumOne} ${resultNumTwo}`;
};
//ecpect 8 7
console.log(mathChallenge("?7 * 2 = 1?4"));
