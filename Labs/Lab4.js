// Bài 1
let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);

});
promise.then(alert);
// Hiên lên aler thông báo 1;

// Bài 2
const axios = require('axios');
// 1.
async function fetchUrls (urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}
// 2.
async function fetchUrlsParallel (urls) {
    const results = await Promise.all(
        urls.map(function(url) {
        return axios.get(url);
        })
    );
    return results;
}
// Func 2 dùng promise nên nó sẽ tối ưu hoá được dữ liệu và giúp đoạn code chạy nhanh hơn .

// Bài 3 

const fs = require('fs').promises;
const axios = require('axios');

async function loadData() {
    try {
        // Đọc dữ liệu từ file
        const data = await fs.readFile('./data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', data);

        // Tải dữ liệu từ URL
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from URL', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Gọi hàm loadData
loadData();

