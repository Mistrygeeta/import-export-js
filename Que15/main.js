//Export a function that returns the factorial of a number using recursion and import it in main.js to calculate 5!.
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

export default factorial;