'use strict';
fetch('https://api.github.com/users?per_page=50').then(
  response=>response.json()
).then(
  users=>{
    let logins = users.map(user=>user.login);
    console.log(logins);
  }
).catch(
  console.log
)
//could have finally for same code but we'll change it later anyway)

