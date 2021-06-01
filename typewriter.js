const scentence = "hello there from lighthouse labs";
let secs = 1000
for (const char of scentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, secs);
  secs += 50;
  
}
setTimeout(() => {
  console.log("\n")
},3000);