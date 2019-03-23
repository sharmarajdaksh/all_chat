I, **sharmarajdaksh**, created this application just for fun in ReactJS, which I learnt recently.

I hosted the app on Github-Pages, which you can check out [here](https://sharmarajdaksh.github.io/all_chat/)

### All_Chat is essentially my attempt to try and create the front-end of a chatroom.
* Currently, the app works completely in an invidual user's browser and messages only remain as long as the browser page is not refreshed, since there is no back-end.

### Why though?
* Even if a back-end is added, the front-end need not be changed. The only difference would be that instead of storing messages in the user's browser temporarily, the messages would be stored in a database (common for all users), which would be retrieved everytime the page is loaded/reloaded. In that case, all user's will be able to message in the chat room, to communicate at once.
* In a scenario of a login-based app, the username could, obviously, be retrieved directly without the user having to input his name to chat.

### Specifications
* The app was bootstrapped using the `create-react-app` utility.
* The app uses **ReactJS**, along with **Redux** for managing state.
  * Redux was not really necessary on this particular app, but I wanted to test out Redux to get comfortable with it.
