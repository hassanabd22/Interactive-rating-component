let btn = document.querySelector('button');
let box = document.querySelector('.text');
let reting = document.querySelector('.box');
let arrNumStar = document.querySelectorAll('li');

let retingStarNum =1;

arrNumStar.forEach((li) => {
    li.addEventListener('click', () => {
       return retingStarNum = li.value;
        
    })

})





btn.addEventListener('click', () => {
    box.style.display = "none";
    reting.innerHTML= `
        <div class = 'active'>
            <img src="./images/illustration-thank-you.svg" alt="thank">
            <span>You selected ${retingStarNum} out of 5</span>
            <h2>Thank you!</h2>
            <p> We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch! 
            </p>
        </div>
        
    `

})