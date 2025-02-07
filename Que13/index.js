//. Export an object containing methods (getName(), getAge()) and destructure-import them in another file.
let obj = {
    nam:"ram",
    age:"20",


getName(){
    return this.name;
},

getAge(){
    return this.age;
}
};

export default obj
