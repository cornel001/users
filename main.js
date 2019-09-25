'use strict';
const mainUrl = `https://api.github.com/users`;

fetch(`${mainUrl}?per_page=50`).then(
  response=>response.json()
).then(
  users=>users.map(
    user=>fetch(`${mainUrl}/${user.login}`).then(response=>response.json()).then(user=>{
      displayUserName(user.name); 
      // console.log(user);
    })
  )
).then(
  promises=>Promise.all(promises)
).catch(
  displayUserName //for error, use same display
)

let container = document.getElementById('container');
function displayUserName(userName) {
  if (!userName) userName = '-'
  let nameBox = document.createElement('div');
  nameBox.innerHTML = userName;
  container.appendChild(nameBox);
}

