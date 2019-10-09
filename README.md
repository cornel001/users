# users
Get a limited list of users from github, using fetch.
For each memeber of the list, dispatch another fetch, get name from result, and display it; each operation is a promise, does not wait for others to complete, so each name is displayed as soon as it arrives, so names are dispayed on arrival order.
This use case has no necesarry business meaning, is a demo based on an idea from javascript.info.
Live page of this project is here : https://cornel001.github.io/users/ . Mobile friend, even mobile first.
Could be re-written with async/await.
