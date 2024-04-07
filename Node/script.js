/*console.log("hello snehal");
console.log(process.argv);

let args = process.argv;

for(let i= 2; i<args.length; i++){
    console.log("hello to", args[i]);//values given in terminal will be printed
}*/


/*const maths = require("./maths");

console.log(maths);
console.log(maths.sum(2,2));
console.log(maths.PI);
console.log(maths.mul(2,2));

const info = require("./fruits");

console.log(info);*/

import {sum,PI} from "./maths.js";
console.log(sum(2,2));
console.log(PI);