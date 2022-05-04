/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
// const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
// const concepts = joinList(conceptList);
// console.log(`Today I learned about ${concepts}.`);


//isolate each element of the array
//use a loop to isolate and go through array  (FOR EACH LOOP?)
//concatenate array items back together into a string with commas inside loop

// (let i = [0]; i < conceptList.length; i++);
//or would for in loop be better?
// let index in conceptList
//build inner concatenate array function below?
let newString = '';
function concatConcepts(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      newString += arr[i];
    } else {
      newString += arr[i] + ', ';
    }
  }
  return newString;//manipulate 
  
}
console.log(concatConcepts(["gists", "types", "operators", "iteration", "problem solving"]));
console.log(`Today I learned about ${newString}.`);
console.log(concatConcepts(["gists", "types", "operators", "iteration", "problem solving"]));
console.log(`Today I learned about ${newString}.`);

