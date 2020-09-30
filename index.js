console.log("Bài 1")
function checkArray(A1, A2){
  let newArray = []
  let arrayLength;
  if(A1.length >= A2.length){
    arrayLength = A1.length
  }else{
    arrayLength = A2.length
  }
  for(let i = 0; i < arrayLength; i++){
    newArray.push(A1[i])
  }
  for(let i=0;i<A2.length;i++){
    if(newArray.indexOf(A2[i]) !== -1){
      newArray.splice(newArray.indexOf(A1[i]),1)
      newArray.splice(newArray.indexOf(A2[i]),1)
    }else{
      newArray.push(A2[i])
    }
}
  console.log(newArray)
}

let A1 = [5, 2, "a", 1, 7]
let A2 = [1, 3, "b", 5]
checkArray(A1, A2)

console.log("Bài 2")

const teamRanking = [{
  name: "Arsernal",
  points: 99,
  GD: 45
},{
  name: "Chelsea",
  points: 75,
  GD: 39
},{
  name: "Manchester United",
  points: 60,
  GD: 29
},{
  name: "Liverpool",
  points: 88,
  GD: 39
}]
function condition( pointsA, pointsB){
  if ( pointsA.points > pointsB.points ){
    return -1;
  }
  if ( pointsA.points < pointsB.points ){
    return 1;
  }
  return 0;
}
teamRanking.sort(condition)
let j = 1
for(let i = 0; i < teamRanking.length; i++){
  teamRanking[i].position = j
  j = j+1
}
console.log(teamRanking)


console.log("Bài 3") 
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => listQuestions(data.results))

function listQuestions(data){
  console.log(data)
  console.log(data.length)
  document.getElementById('question').innerText = data[0].question
  let point = 0
  let pointQuizz = document.getElementById('point')
  pointQuizz.innerText = point
  const correctAnswer = document.getElementById('answer1')
  correctAnswer.innerText = data[0].correct_answer
  correctAnswer.addEventListener('click', () =>{
    alert("Correct answer")
    pointQuizz.innerText = point + 1

  })
  const answer1 = document.getElementById('answer2')
  answer1.innerText = data[0].incorrect_answers[0]
  eventClick(answer1)
  const answer2 = document.getElementById('answer3')
  answer2.innerText = data[0].incorrect_answers[1]
  eventClick(answer2)
  const answer3 = document.getElementById('answer4')
  answer3.innerText = data[0].incorrect_answers[2]
  eventClick(answer3)
}

function eventClick(answer){
  answer.addEventListener('click', () => {
    alert("Incorrect answer")
  })
}