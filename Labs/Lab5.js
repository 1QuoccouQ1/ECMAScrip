// Bài 1
// Trong JavaScript, từ khóa this thường được sử dụng để tham chiếu đến đối 
// tượng hiện tại - tức là đối tượng mà một hàm hoặc phương thức đang được gọi từ đó. 
// Giá trị của this có thể thay đổi dựa trên cách mà hàm được gọi.

// Ví dụ 3: this trong một phương thức đối tượng
const myObject = {
    property: 'Hello',
    method: function() {
        console.log(this.property);
    }
};

myObject.method();

// Bài 2
class Shape {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

const myShape = new Shape();

myShape.move(10, 20);

console.log(myShape.x, myShape.y); 

// Bài 3 
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const output = this.template
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', seconds);

        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

// Sử dụng lớp Clock
const clock = new Clock({ template: 'h:m:s' });
clock.start();

// Dừng đồng hồ sau 5 giây
setTimeout(() => {
    clock.stop();
}, 50000);

// Bài 4
var person = {
    firstname: "Albert",
    lastname: "Einstein",
    
    setLastName: function(_lastname) {
        this.lastname = _lastname;
    },
    
    setFirstName: function(_firstname) {
        this.firstname = _firstname;
    },

    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

person.setLastName('Newton');
person.setFirstName('Isaac');

console.log(person.getFullName()); // Kết quả: Isaac Newton

