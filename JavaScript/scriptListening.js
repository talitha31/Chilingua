// Declare variable dari class di HTML
const startButton = document.querySelector(".startButton");
const showQue = document.querySelector(".showQue");
const showOpt = document.querySelector(".showOpt");
const showExpl = document.querySelector(".explanation");
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");
const p = document.querySelector(".p");
const dragDiv = document.querySelector(".dragDiv");
const containerP =document.querySelector(".containerP");
const container = document.querySelector(".container");
const numbS = document.querySelector(".numbS");
let showQueDiv;
let showOptDiv;
const ball = document.querySelectorAll(".ball");

const resultContainer = document.querySelector('.resultContainer');
const dragDivId1 = document.querySelector('.dragDiv1');
const dragDivId2 = document.querySelector('.dragDiv2');
const dragDivId3 = document.querySelector('.dragDiv3');
const dragDivId4 = document.querySelector('.dragDiv4');
const dragDivId5 = document.querySelector('.dragDiv5');

const potion1 = document.querySelector(".optionDiv0");
const potion2 = document.querySelector(".optionDiv1");
const potion3 = document.querySelector(".optionDiv2");
const potion4 = document.querySelector(".optionDiv3");
const potion5 = document.querySelector(".optionDiv4");

let cek222 = document.querySelector(".popup");
let blur = document.getElementsByTagName("body")[0];

// Number soal
let pInt = p.textContent ;

let queCount = 0; // Declare counter
let queCount2 = queCount +1;

let score = 0;  // Declare nilai akhir soal
let divCounter = 0;
let arrCounterX = 0;
let arrCounterY = 0;

window.addEventListener("load", (event) => {
    startFunc();
  });

// Jika start button di click
 function startFunc() {
  let divCounter = '<span class="numbS">' + pInt + '</span>' + '/5';
  p.innerHTML = divCounter;
  numbS.innerHTML = divCounter;


  document.querySelector('.padding1').classList.remove('hilangDiv');
  container.classList.remove('hilangDiv');
  containerP.classList.remove('hilangDiv');
  nextButton.classList.remove('hilangDiv');
  prevButton.classList.remove('hilangDiv');
  if(queCount == 0){
  prevButton.classList.add('disabled');
  }
    showQueFunction(queCount);
 } 

function showQueFunction(index){
  
  // Mengambil nomor dan option di dalam object array (div dan span)
  let queNumb = '<p class="spanLeft">' + questions[index].numb + ". " + questions[index].question + '</p>';
  let queOption = 
    '<div class="option"><span>' + questions[index].options[0] + "</span></div>" +
    '<div class="option" id="padding"><span>' + questions[index].options[1]  + "</span></div>"

  showQueDiv = document.createElement('div');
  showOptDiv = document.createElement('div');
  

  showOptDiv.classList.add('optionDiv' + queCount);
  showQueDiv.classList.add('queDiv' + queCount);
  showOptDiv.classList.add('onHover');
  showOptDiv.classList.add('fontBlack');
  showQueDiv.classList.add('fontGrey');
  showQueDiv.classList.add('showQueFont');
  
  
  document.getElementById("dragDivId").appendChild(showQueDiv);
  document.getElementById("dragDivId").appendChild(showOptDiv);

  showQueDiv.innerHTML = queNumb;
  showOptDiv.innerHTML = queOption;
  






  // Menampilkan nomor dan option
  // showQue.innerHTML = queNumb;
  // showOpt.innerHTML = queOption;

  // Declare variable dari semua option di variable showOpt
  const option = showOptDiv.querySelectorAll(".option");
  // Set attribute semua option menjadi jika onclick, menjalankan function
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Jika nextButton di click
nextButton.onclick = () => {
  if(queCount !=5){
    queCount ++ ;

  }

  if(queCount !=0){
    prevButton.classList.remove('disabled');
    prevButton.classList.remove('opacity');
  }

  

  if(queCount < questions.length -1){   
    myFunct(pInt);

  }else if(queCount == 4){
    nextButton.textContent = " Lihat Hasil " ;
    myFunct(pInt);
  }else{
    result(queCount);
  }
  console.log(queCount);
}

function result(x){
  resultContainer.classList.remove("hilangDiv");

  // let cek = document.getElementById('que11');
  let cek = document.querySelectorAll('.que1');
  let j =1;
  for(i=0;i<cek.length;i++){
    cek[i].innerHTML = j + ". " + questions[i].question;
    j++;
  }

  const explanation = document.querySelectorAll('.explanationP');
  for(i=0; i<explanation.length;i++ ){
    explanation[i].innerHTML = questions[i].explanation;
  }
  
  blur.classList.add('blur');
  blur.classList.add('blur1');
}

// Function jika nextButton di click
function myFunct(){
  pNextFunct();
  
  
  if(arrCounterX == arrCounterY && arrCounterX!=5 && arrCounterY!=5){
    showQueFunction(queCount);
    arrCounterX ++;
    arrCounterY ++;
  }else if(arrCounterY == 5){
    
  }
  else{
    displayShowFunct2()
    arrCounterY ++;
  }
  
  displayNoneFunct(queCount); 
}

function displayNoneFunct(){
  queCount3 = queCount -1;
  const hilangOptDiv = document.querySelector(".optionDiv" + queCount3 );
  const hilangQueDiv = document.querySelector(".queDiv" + queCount3 );
  hilangOptDiv.classList.add("hilangDiv");
  hilangQueDiv.classList.add("hilangDiv");
}

function pNextFunct(){
  pInt++;
  let divCounter = '<span class="numbS">' + pInt + '</span>' + '/5';
  p.innerHTML = divCounter;

  numbS.innerHTML = divCounter;
}



// Jika Prev Button di Click
prevButton.onclick = () => {
  if(queCount == 5){
    queCount = 4;
  }

  nextButton.textContent = "Next Questions" ;
  arrCounterY --;
  queCount--;

  if(queCount == 0){
    prevButton.classList.add('disabled');
    prevButton.classList.add('opacity');
  }

  

  console.log(queCount);
  displayNoneFunctPrev();
  displayShowFunct();
  pPrevFunct();
}

// Function Jika Prev Button di Click
function displayNoneFunctPrev(){
  queCount2 = queCount +1;
  let hilangOptDiv = document.querySelector(".optionDiv" + queCount2 );
  let hilangQueDiv = document.querySelector(".queDiv" + queCount2 );
  hilangOptDiv.classList.add("hilangDiv");
  hilangQueDiv.classList.add("hilangDiv");
}


function displayShowFunct(){
  let hilangOptDiv = document.querySelector(".optionDiv" + queCount );
  let hilangQueDiv = document.querySelector(".queDiv" + queCount );
  hilangOptDiv.classList.remove("hilangDiv");
  hilangQueDiv.classList.remove("hilangDiv");
}

function displayShowFunct2(){
  let hilangOptDiv = document.querySelector(".optionDiv" + queCount );
  let hilangQueDiv = document.querySelector(".queDiv" + queCount );
  hilangOptDiv.classList.remove("hilangDiv");
  hilangQueDiv.classList.remove("hilangDiv");
}


function pPrevFunct(){
  pInt--;
  let divCounter = '<span class="numbS">' + pInt + '</span>' + '/5';
  numbS
  .innerHTML = divCounter;
}


let optionTrue;

function optionSelected(answer1){
  let cek22 = document.querySelector(".optionDiv" + queCount);

  // Declare variable jawaban user
  let userAnswer = answer1.textContent;
  console.log( "ini : "+ answer1.textContent);

  // Declare variable jawaban benar dari soal
  let correctAnswer = questions[queCount].answer;

  // Menghitung jumlah option yang ada
  const allOptions = showOptDiv.children.length;
  
  if(userAnswer == correctAnswer){
    score++;
    console.log("score : " + score);
    answer1.classList.add("checkListTrue");
    answer1.classList.remove("optionBackgroundColor");
    answer1.classList.remove("onHover");
    console.log("true");
    resultOptionTrue(queCount);
    
  }else{
    
    console.log("false");
    answer1.classList.add("checkListFalse");
    answer1.classList.remove("onHover");
    
    resultOptionFalse(queCount,userAnswer);
    
    for(i=0; i<allOptions;i++){

      
      if(questions[queCount].options[i].textContent == questions[queCount].answer.textContent){
        
        
        cek22.children[i].classList.add("checkListTrue");
        

        
        // console.log(questions[queCount].answer);
        // showOptDiv.children[i].classList.add("checkListTrue");
      }
    }
  }

  for(i=0; i<allOptions;i++){
    cek22.children[i].classList.add("disabled");
  }
}


let option1 = document.querySelectorAll(".option1");
let option2 = document.querySelectorAll(".option2");

function resultOptionTrue(x){
  console.log(queCount2);
    if(option1[x].textContent == questions[x].answer){
      option1[x].classList.add('checkListTrue');
    }else{
      option2[x].classList.add('checkListTrue');
    }
  
}

function resultOptionFalse(x){
  console.log(queCount2);
  
  if(option1[x].textContent == questions[x].answer){
    option1[x].classList.add('checkListTrue');
    option2[x].classList.add('checkListFalse');
  }else{
    option2[x].classList.add('checkListTrue');
    option1[x].classList.add('checkListFalse');
  }

}



// function resultOptionTrue(){
//   console.log(queCount2);
//   for(i=0;i<questions.length;i++){
//     let optTrue = document.querySelector(".option" + queCount2);
//     optTrue.classList.add("checkListTrue");
//   }
//   }

// function resultOptionFalse(){
//   let queCount3 = queCount2 + 1;
//   let optFalseTrue = document.querySelector(".option" + queCount2);
//   let optFalse = document.querySelector(".option" + queCount3);
//   optFalseTrue.classList.add("checkListTrue");
//   optFalse.classList.add("checkListFalse");
// }



function onMouseButton(){
  prevButton.classList.add('onMouseButton');
}

function onMouseUp(){
  prevButton.classList.remove('onMouseButton');
}

function onMouseButton2(){
  nextButton.classList.add('onMouseButton2');
}

function onMouseUp2(){
  nextButton.classList.remove('onMouseButton2');
}





function popup(){
  console.log("true");
  cek222.classList.remove("hilangDiv");
  blur.classList.add("blur");
}

function close1(){
  console.log("false");
  cek222.classList.add("hilangDiv");
  blur.classList.remove("blur");
}

function resultClose(){
  resultContainer.classList.add('hilangDiv');
  blur.classList.remove('blur');
  blur.classList.remove('blur1');
}


// =================
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}















// // Function untuk menampilkan explanation
// function showExplanationFunction(){
//   let explanation = '<div>' + '<span>' + questions[queCount].explanation + '</span>' +'</div>';
//   showExpl.innerHTML = explanation;
// }




