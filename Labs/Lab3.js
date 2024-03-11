// Bài 1
const multiply = (num1, num2) => num1 * num2;

const toCelsius = fahrenheit => (5/9) * (fahrenheit - 32);

const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
};

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

const greet = who => console.log("Hello " + who);

// Bài 2
const calculateSum = arr => arr.reduce((acc, currentValue) => acc + currentValue, 0);

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(calculateSum(arr)); // Kết quả mong muốn 28

// Bài 3

// var Entity = function(name, delay) {
//     this.name = name;
//     this.delay = delay;
// };

Entity.prototype.greet = function(name, delay) {
    this.name = name;
    this.delay = delay;
    this.greet=() => {
        setTimeout(() => {
            console.log('Xin chào, tên tôi là ', this.name);
        }, this.delay);
    };
};

var java = new Entity('Java', 5000);
var cpp = new Entity('C++', 30);
java.greet();
cpp.greet();
