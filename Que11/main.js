import users from "./user.js";

let res = users.filter(user=>user[1]>30)
console.log(res);