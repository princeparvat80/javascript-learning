//Code of Prime number

var x = 0;

if (x >= 2) {
  if (x == 2) {
    console.log("This is the Smallest Prime number");
  } else if (x % 2 == 0) {
    console.log("it is not a Prime number");
  } else {
    console.log("it is Prime number");
  }
} 

else {
    console.log("number must be greater than 1");
}

