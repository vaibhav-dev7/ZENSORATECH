const container = document.getElementById("userContainer");
const errorMsg = document.getElementById("errorMsg");

async function fetchUsers(){

try{

const response = await fetch("https://jsonplaceholder.typicode.com/users");

if(!response.ok){
throw new Error("API request failed");
}

const users = await response.json();

displayUsers(users);

}

catch(error){

errorMsg.textContent = "Failed to load users. Please try again later.";

console.error(error);

}

}

function displayUsers(users){

users.forEach(user=>{

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${user.name}</h3>
<p><strong>Email:</strong> ${user.email}</p>
<p><strong>City:</strong> ${user.address.city}</p>
`;

container.appendChild(card);

});

}

fetchUsers();