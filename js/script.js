const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const body = document.body;
// console.log(burger);
// console.log(nav);
// console.log(body);

burger.addEventListener('click', () => {
   body.classList.toggle('stop-scrill');
   burger.classList.toggle('burger--active');
   nav.classList.toggle('menu__nav--visible')
});


document.querySelector(".form__btn").onclick = function () {
   const userPassFirst = document.querySelector("#password").value;
   const userPassSecond = document.querySelector("#duble-password").value;

   if (userPassFirst == "") {
      document.getElementById("password").style = "border: 1px solid red";
      document.getElementById("duble-password").style = "border: 1px solid red";
   } else if (userPassFirst != userPassSecond) {
      document.getElementById("password").style = "border: 1px solid red";
      document.getElementById("duble-password").style = "border: 1px solid red";
      return false;
   } else if (userPassFirst == userPassSecond) {
      document.getElementById("password").style = "border: 1px solid green";
      document.getElementById("duble-password").style = "border: 1px solid green";
   }
   return true;
};


const form = document.querySelector('.form');
console.log(form);
const buttonS = document.querySelectorAll('.rating__star');
console.log(buttonS);
const comment = document.querySelector('.rating__comment');

buttonS.forEach((radio) => {
   radio.addEventListener('change', function () {
      const checkedNumber = document.querySelector('.rating__star:checked').value || undefined;

      buttonS.forEach((item) => {
         const currentLabel = item.previousElementSibling;
         if (item.value <= checkedNumber) {
            currentLabel.classList.add('check');
         } else {
            currentLabel.classList.remove('check');
         }
      });
   });
});

function ValidMail() {
   var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
   var myMail = document.getElementById('email').value;
   var valid = re.test(myMail);
   if (valid) output = 'Адрес эл. почты введен правильно!';
   else output = 'Адрес электронной почты введен неправильно!';
   document.getElementById('message').innerHTML = output;
   return valid;
};
