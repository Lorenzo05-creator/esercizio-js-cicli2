let acc = 0;
let counter = 0;

for (let i = 1; i <= 20; i++) {
   if (i % 2 == 0) {
    console.log(i);
   }else{
    acc = acc + i
    counter ++
   }
 }

console.log(`media = ${acc / counter}`);
