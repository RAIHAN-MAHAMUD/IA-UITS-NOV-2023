// print('test 1', 1);
// console.log('test 2');
// print('test 3', 2000);
// print('test 4', 300);
// print('test 5', 100);
// twice(7, print);

// function print(text) {
//     console.log(text);
// }


// function print(text, time) {
//     setTimeout(() => console.log(text), time);
// }


// function twice(n, fn) {
//     setTimeout(() => {
//         fn(200000);
//     }, 2500);
// }


// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findvalue(fn) {
//     return array.filter(el => fn(el));
// }

// odd = (n) => (n % 2 == 1)
// even = (n) => (n % 2 == 0)

// // console.log(findvalue(odd));
// console.log(findvalue(even));





// function promise_value(ms){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, 5000, 'Call is resolved')
//     });
// }


var XMLHttpRequest = require('xhr2');
const url = 'https://jsonplaceholder.typicode.com';

// function getData(url, fn) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', url);

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status == 200) {
//                 let user = JSON.parse(xhr.response);
//                 fn(user, null);
//             }
//             else {
//                 fn(null, xhr.error);
//             }
//         }
//     }

//     xhr.send();
// }

// function receiver(res, err) {
//     if (!err) console.log(res);
// }

// getData(`${url}/users`, receiver)


function getDataByPromise(url) {
    return new Promise((reject, resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    let user = JSON.parse(xhr.response);
                    resolve(user);
                }
                else {
                    reject(xhr.status);
                }
            }
        }

        xhr.send();
    });
}

// getDataByPromise(`${url}/users`)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



const myurl = 'localhost:3000';
async function getUser() {
    try {
        const user = await getDataByPromise(`${myurl}/users`)
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUser();