// Create a module that exports multiple functions (add, subtract, multiply), then import only multiply in another file.
import multiply from "./file.js";

console.log(multiply(2,4))