const myBtn = document.querySelector('.myBtn button');


 const RulsBox = document.querySelector('.RulsBox');
 const ExitButton = document.getElementById('ExitButton');

 const CountinueBtn = document.getElementById('Countinue');
 const Questions = document.querySelector('.Questions')

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
}
const nextBtn = document.querySelector('.nextBtn');

let que_count = 0;

nextBtn.onclick = () =>{
     if(que_count < questions.length - 1){
          que_count++;
          showQuestions(que_count);
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


function optionSelected(answer){
     let usrAns = answer.textContent;
     let correctsAns = questions[que_count].answer;

     let alloptions = document.querySelector('.MyOptions');
     let alloptionsList = alloptions.children.length

     if(usrAns == correctsAns){
          answer.classList.add('correct');
          console.log('Answer is Correct')
          
     }
     else{
          answer.classList.add('incorrect');
          console.log('Answer is Wrong');
          for(let i= 0; i<alloptionsList; i++){
               if(alloptions.children[i].textContent == correctsAns){
                    alloptions.children[i].setAttribute('class','Options correct');
               }
          }
     }
    for(let i=0; i<alloptionsList; i++){
      alloptions.children[i].classList.add('disabled')
    }
}