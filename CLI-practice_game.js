var readlineSync = require("readline-sync");                                              //getting readlineSync module

var score = 0;                                                                            //setting score to 0

var userName = readlineSync.question("What is your name?");                               //taking in user name

console.log("Welcome "+userName+" to Amruta's quiz");                                     //welcoming user

function playGame(questions,answer){
  var userAnswer = readlineSync.question(questions);                                      //asking question
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right Answer!");                                                         //declaring Right for apropriate answer
    score = score + 1;
  }
  else{
    console.log("Wrong Answer");                                                          //declaring Wrong for inapropriate answer
    score = score -1;
  }
  console.log("your current score is "+score);                                           //declaring score
  console.log("---------------------------------------");
}

var questions=[                                                                          //list of questions with answers
  {question:"Where does Amruta live?",answer:"Mumbai"},
  {question:"Which is her favourite automobile brand?",answer:"bugatti"},
  {question:"Which is her favourite subject other than IT?",answer:"history"}
]

for(var i=0;i<questions.length;i++){
var currentQuestion = questions[i];                                                      //loop for asking questions
playGame(currentQuestion.question,currentQuestion.answer)
}

console.log("Your final score is "+score)                                                //declaring final score