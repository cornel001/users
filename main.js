'use strict';
const mainUrl = `https://api.github.com/users`;

fetch(`${mainUrl}?per_page=50`).then(
  response=>response.json()
).then(
  users=>users.map(user=>fetch(`${mainUrl}/${user.login}`))
).then(
  Promise.all
).then(
  console.log
).catch(
  console.log
)
//could have finally for same code but we'll change it later anyway)

