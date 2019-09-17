'use strict';
const mainUrl = 'https://api.github.com/users';

fetch(mainUrl+'?per_page=50').then(
  response=>response.json()
).then(
  users=>users.map(user=>mainUrl+'/'+user.login)
).then(
  console.log
).catch(
  console.log
)
//could have finally for same code but we'll change it later anyway)

