import createInt8TypedArray from "./5-typed_arrays.js";

const typedArray = createInt8TypedArray(10, 2, 89) 
console.log(typedArray);
console.log(typedArray.getInt8(2));
