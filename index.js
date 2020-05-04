const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click",async function(){
    //データのやり取り
    // const res =await fetch("https://jsonplaceholder.typicode.com/users");
    //const users = await res.json();
    //console.log(users);

    //DOm操作
    const list= document.createElement("li");
    list.innerText="yeah";
    lists.appendChild(list);
    console.log(list);

});