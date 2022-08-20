const myBtn = document.querySelector('.myBtn button');


 const RulsBox = document.querySelector('.RulsBox');
 const ExitButton = document.getElementById('ExitButton');

 const CountinueBtn = document.getElementById('Countinue');
 const Questions = document.querySelector('.Questions');
 const TimeCount = document.querySelector('.TimeCount .seconds');

myBtn.onclick = () =>{
     RulsBox.classList.add('activeInfo');
     
}

ExitButton.onclick = () =>{
     RulsBox.classList.remove('activeInfo');
}

//

CountinueBtn.onclick = () =>{
     RulsBox.classList.remove('activeInfo');
     Questions.classList.add('activeQuiz'); 
     showQuestions(0)
     startTimer(15) 
}
const nextBtn = document.querySelector('.nextBtn');

let que_count = 0;
let counter;
let timeValue = 15;

nextBtn.onclick = () =>{
     if(que_count < questions.length - 1){
          que_count++;
          showQuestions(que_count);
          clearInterval(counter);
          startTimer(timeValue);
     }
     else{
          console.log('you have complite your task')
     }
}

//
function showQuestions(index){
     const que_text = document.querySelector('.text');
     const option_list = document.querySelector('.MyOptions');
     let option_tag =  '<div class="Options"><span>'+ questions[index].options[0] + '</span></div>'
                    +  '<div class="Options"><span>'+ questions[index].options[1] + '</span></div>'
                    +  '<div class="Options"><span>'+ questions[index].options[2] + '</span></div>'
                    +  '<div class="Options"><span>'+ questions[index].options[3] + '</span></div>'                      
     option_list.innerHTML = option_tag;
     let que_tag = "<span>" + questions[index].numb + '.' + questions[index].question + "</span>";
     que_text.innerHTML = que_tag;

     const TotalQue = document.querySelector('.TotalQue');
     let total_QuizTag = '<p>' +  questions[index].numb + ' of 5</p>'
     TotalQue.innerHTML = total_QuizTag;

    const option = option_list.querySelectorAll(".Options");
    
    for(let i=0; i<option.length; i++){
     option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>';



function optionSelected(answer){
     clearInterval(counter);
     let usrAns = answer.textContent;
     let correctsAns = questions[que_count].answer;

     let alloptions = document.querySelector('.MyOptions');
     let alloptionsList = alloptions.children.length

     if(usrAns == correctsAns){
          answer.classList.add('correct');
          // console.log('Answer is Correct')
          answer.insertAdjacentHTML("beforeend", tickIcon)
          
     }
     else{
          answer.classList.add('incorrect');
          // console.log('Answer is Wrong');
          answer.insertAdjacentHTML("beforeend", crossIcon)
          for(let i= 0; i<alloptionsList; i++){
               if(alloptions.children[i].textContent == correctsAns){
                    alloptions.children[i].setAttribute('class','Options correct');
                    alloptions.children[i].insertAdjacentHTML("beforeend", tickIcon);
               }
          }
     }
    for(let i=0; i<alloptionsList; i++){
      alloptions.children[i].classList.add('disabled')
    }
}

function startTimer(time){
     counter = setInterval(timer, 1000);
     function timer(){
          TimeCount.textContent = time;
          time--;
     }
}
//  const timen = startTimer(15);
//  console.log(timen)