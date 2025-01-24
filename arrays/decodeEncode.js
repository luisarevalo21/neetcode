class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  //encode take the lenght of the string and add it to the front of the string+ the deliminter # then the string
  //add it to my string array.

  //return the string array using join
  encode(strs) {
    let res = "";
    for (let i = 0; i < strs.length; i++) {
      const size = strs[i].length;

      res += `${size}#${strs[i]}`;
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */

  //to decode
  //the iterate through the list grabbing the number
  //the number will tell me how many characters to get
  //and add them to my result array
  //removing the delimeter after the number

  //create the strings and place them into array
  decode(str) {
    const res = [];

    console.log("the strngis", str);

    //string to extract 5#neet
    //iterate throuhg the entire string
    //i need to find the length which is a number
    //the next value will be the deminter
    //then i begin counting up till the number
    //add to my list
    //and continue again

    //iterate until i find a #
    //count until i find the next #
    //substring the start to end
    //add to res
    //contionuie again

    //itearte throuhg the string
    //find the #
    //then i know the string is after it + the number which is i?

    //get the string and add it to res
    //increment i to b j + the character?
    // let i = 0;
    // while (i < str.length) {
    //   console.log("i", i);
    //   const num = Number(str[i]);
    //   i += 2;
    //   let resStr = str.substring(i, num + 2 + i);
    //   res.push(resStr);
    //   i += num;
    // }

    // console.log("res.join", res.join(" "));
    // return res.join(" ");
    // console.log(res);

    let i = 0;
    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }
      let num = Number(str.substring(i, j));

      let myString = str.substring(j + 1, num + j + 1);
      console.log("my string", myString);

      res.push(myString);

      i = j + num + 1;
    }

    return res;
    //     const myString = str[i];
    //     const size = myString[0];
    //     const deliminter = myString[1];

    //     console.log("my string", myString);
    //     let resStr = ''
    //     for (let j = 0; j < size; j++) {
    //         resStr += myString[j + 2]
    //     }

    //     res.push(resStr);
    // }

    // console.log('res', res)
  }
}

const s = new Solution();
const res = s.encode(["we", "say", ":", "yes", "!@#$%^&*()"]);

const response = s.decode(res);
