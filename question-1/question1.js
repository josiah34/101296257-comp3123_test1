const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (arr) => new Promise((resolve, reject) => {
    if (arr.length > 0) {
        const result = arr.filter((item) => typeof item === "string").map((item) => item.toLowerCase());
        resolve(result);
    } else {
        reject("No string in array");
    }
});
   


lowerCaseWords(mixedArray)
.then((result) => console.log(result))
.catch((error) => console.log(error))

