const form = document.getElementById('form');
const email = document.getElementById('email');
const cardOne = document.getElementById('card-1');
const cardTwo = document.getElementById('card-2');
const dismiss = document.getElementById('dismiss');



form.addEventListener('submit', function(e){
    e.preventDefault();
    cardOne.classList.add('sec-hide');
    cardTwo.classList.remove('sec-hide');

})

dismiss.addEventListener('click', function(){
    cardOne.classList.remove('sec-hide');
    cardTwo.classList.add('sec-hide');
})