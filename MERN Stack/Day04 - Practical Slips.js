const b1 = Buffer.from("Hello ");
const b2 = Buffer.from("World");

const b3 = Buffer.concat([b1, b2]);
console.log(b3.toString());

if (b1.compare(b2) == 0)
    console.log("Both String are same");
else
    console.log("Both String are not same");

b1.copy(b2);
console.log(b2.toString());