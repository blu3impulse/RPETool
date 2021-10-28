// const express = require('express')
// const app = express();
// const port = 8000;

// app.get('/', (req, res) => {
  // res.send('I liek turtles')
// });

// app.listen(port, () => {
  // console.log(`Example app listening on port ${port}!`)
// });

let e1rm = 0;

function calculateE1RM(){
var weight = document.getElementById("weight").value;
var reps = document.getElementById("reps").value;
var rpe = document.getElementById("rpe").value;

if(reps == 1 && rpe == 10){
e1rm = weight;
}
else{
reps = 10 - +rpe + +reps;
e1rm = Math.round(weight/((100-(reps * 2.5))/100));
}
document.getElementById("e1rm").innerHTML = e1rm + "<a> lbs</a>";
}

function clearForm(){
document.getElementById("weight").value = "";
document.getElementById("reps").value = "";
document.getElementById("rpe").value = "6";
document.getElementById("e1rm").innerHTML = "";
}