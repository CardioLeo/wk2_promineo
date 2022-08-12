var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var myGrade = parseInt(input[0]);
var passingGrade = 70;

//write your code here.
if (myGrade >= passingGrade) {
    console.log(true);
} else {
    console.log(false);
}

if (myGrade >= 90) {
    console.log(true);
} else {
    console.log(false);
}