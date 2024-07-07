
totalMarks = 550;
var engMarks = +prompt("Type your english number");
var mathMarks = +prompt("Type your Math number");
var phyMarks = +prompt("Type your Physics number");
var islMarks = +prompt("Type your Islamiat number");
var obtainMarks = engMarks + mathMarks + phyMarks + islMarks;
var percentage = obtainMarks/totalMarks*100;
if (percentage >=80){
    console.log("A++")
}else if(percentage >= 70){
    console.log("A Grade")
}else if (percentage >= 60){
    console.log("B Grade")
} else {
    console.log('fail')
}