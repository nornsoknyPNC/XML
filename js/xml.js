const url = "https://jsonplaceholder.typicode.com/comments";
const sycronous = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method,url,sycronous);
ajax.onload = function(){
    const list = document.querySelector('#list');
    const data  = JSON.parse(ajax.response);
    data.forEach(element => {
        if(element.id <= 5){
            list.innerHTML +=`
            <ul class="list-group mt-4">
            <li class="list-group-item">${element.name}</li>
            <li class="list-group-item">${element.email}</li>
            <li class="list-group-item">${element.body}</li>
            </ul>
            `
        }
    });
}
ajax.send();