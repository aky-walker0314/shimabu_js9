const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click",async function(){
    //データのやり取り
     const res =await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    //users
for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const list= document.createElement("li");
    list.innerText=user.name;
    lists.appendChild(list);    

    
}

    //users.forEach(function(user) {
        //const list= document.createElement("li");
        //list.innerText=user.name;
        //lists.appendChild(list);    
    //});
});