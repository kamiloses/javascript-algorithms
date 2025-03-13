//1) Given an array of integers, write a function that
//returns an array containing the next greater element for each index of the original array.

function nextGreaterElement(arr) {
    let newArray = []
    for (let i = 0; i < arr.length ; i++) {
        let found = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                newArray.push(arr[j]);
                found = true;
                break;
            }
        }

        if (!found) {
            newArray.push(-1);
        }
    }
return newArray;}
//console.log(nextGreaterElement([4, 5, 2, 10, 8]))

// 2) reversed word

function reversedWord(word) {
     let reversed=''
    for (let i = word.length; i >= 0; i--) {
    reversed+=word.charAt(i)
    }

return reversed;
}

//console.log(reversedWord("Hello"))


//3)

