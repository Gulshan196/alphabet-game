let user_value;
let rand_val;

let btn = document.querySelector(".my-btn");
let ques = document.getElementById('ques');
// when you submit your answer
btn.addEventListener("click",()=>{
    user_value = document.getElementById('input');
    
    checkCorrect(user_value.value,rand_val);

    user_value.value = '';

    setTimeout(()=>{
     generateRandom();
    },3000);
    
    
});

let allBtn = document.querySelectorAll(".main-container > div");

// allBtn.forEach((button)=>
//     {
//       button.addEventListener('click',()=>{
//         console.log(button.innerHTML.charCodeAt(0)-64);
//         rand_val = button.innerHTML;
//         ques.innerHTML = `what is the position of ${rand_val}`;

//       });  
//     })

    function checkCorrect(userval,randval) {
     if(randval === String.fromCharCode(+userval+64)){
      ans.innerHTML = "correct answer";
     }
  else 
      ans.innerHTML = `incorrect answer, correct position of ${randval} is ${randval.charCodeAt(0)-64}`;

    }

    let ans = document.getElementById("ques-ans");


    let alphabet_arr = [];

    allBtn.forEach(button=>{
      alphabet_arr.push(button.innerHTML[0]);
    })

    const temp_arr = alphabet_arr;


  


    function generateRandom() {
      let index = Math.floor(Math.random()*alphabet_arr.length);
      rand_val = alphabet_arr[index];
      ans.innerHTML = '';
      ques.innerHTML = `what is the position of ${rand_val}`;
    alphabet_arr = alphabet_arr.length > 1 ?  [...alphabet_arr.slice(0,index),...alphabet_arr.slice(index+1)] : [...temp_arr];
      console.log(alphabet_arr);
    }
    generateRandom();


    let showHintBtn = document.querySelector('.show-btn');

    showHintBtn.addEventListener('click',()=>{
      document.querySelector('.main-container').style.scale = document.querySelector('.main-container').style.scale == 0 ?  1 : 0 ;

      showHintBtn.innerHTML = showHintBtn.innerHTML === "SHOW HINT" ? "HIDE HINT" : "SHOW HINT";
    })

    



    
     


