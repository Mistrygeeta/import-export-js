// Create a module that exports multiple functions (add, subtract, multiply), then import only multiply in another file.
function add(a,b){
 return a+ b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

export default multiply