
// Bài 1
const result ={
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};


function makeList(arr) {
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // Thay đổi code ở đây
    return failureItems;
}
const failuresList = makeList(result. failure);
console.log(failuresList)


// Bài 2
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
const [a, b,...arr] = list; // Thay đổi code ở đây
return arr;
}
const arr = removeFirstTwo(source);
console.log(arr) // Kết quả mong muốn [3,4,5,6,7,8,9,10];
console.log(source) // Kết quả mong muốn [1,2,3,4,5,6,7,8,9,10];

// Bài 3

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
 // Thay đổi code ở đây
arr2 = [...arr1];
console.log(arr2) ; // Kết quả mong muốn: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

// Bài 4
function spreadOut() {
    let fragment=['to', 'code'];
    let sentence =['learning',...fragment,'is','fun'] // Thay đổi đoạn code này
    return sentence;
    }
        console.log(spreadOut());