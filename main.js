// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject({name: 'Iphone', age:20})
//     }, 1000)
// })

// .then((data) => console.log(data))
// .catch((err) => console.log(err))


// CRUD операции - create, read, update, delete

// fetch() - встроенная функция для выполнения сетевых запросов

// GET запрос - запрос когда вы запрашиваете какие то данные

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Ошибка при получении пользователей'))
// }
// getUsers()

const users = document.querySelector('.users');

async function getProducts() {
    try {
        let res = await fetch('https://dummyjson.com/products');
        let data = await res.json();
        
        data.products.forEach((product) => {
            let item = document.createElement('div');
            item.classList.add('item');
            
            let title = document.createElement('h2');
            let brand = document.createElement('p');
            let price = document.createElement('p');
            let image = document.createElement('img');

            title.textContent = product.title;
            brand.textContent = `Brand: ${product.brand}`;
            price.textContent = `Price: $${product.price}`;
            image.src = product.thumbnail;
            image.alt = product.title;

            item.append(image, title, brand, price);
            users.append(item);
        });
    } catch (error) {
        console.log('Ошибка при получении данных');
    }
}

window.addEventListener('DOMContentLoaded', () => getProducts());
