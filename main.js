'use strict';

function displayUserName(userName) {
    let container = document.getElementById('container');
    let nameBox = document.createElement('div');
    nameBox.innerHTML = userName;
    container.appendChild(nameBox);
}

let names = [
'PJ Hyett',
'Chris Wanstrath',
'Yehuda Katz',
'Ezra Zygmuntowicz',
'Michael D. Ivey',
'Tom Preston-Werner',
'Evan Phoenix',
'Chris Van Pelt',
'Bryan Helmkamp',
'Wayne E. Seguin',
'Kevin Clark',
'risk danger olson',
'Marc-André Cournoyer',
'Toby Sterrett',
'Geoffrey Grosenbach',
'Justin Palmer',
'Jesse Andrews',
'Roland',
'Tom ten Thij',
'Kevin Williams',
'Nitay Joffe',
'Lukas Biewald',
'Dave Fayram',
'James Golick',
'Corey Donohoe',
'Jesse Newland',
'Josh Knowles',
'John Hornbeck',
'Seth Fitzsimmons',
'Jeff Whitmire',
'Blake Mizerany',
'Michael Buffington',
'Rein Henrichs',
'Kenzi Connor',
'Britt Selvitelle',
'Rob Sanheim',
'Eivind Uggedal',
'Bruce Williams',
'Matt Mower',
'Scott Chacon',
'Abhay Kumar',
'rabble',
'Ben Burkert',
'André Arko',
'Sam Smoot',
'Jamie van Dyke',
'Ryan Dahl',
];

for (let name of names) {
    displayUserName(name);
}

