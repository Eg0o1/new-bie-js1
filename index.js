let container = document.getElementById('cont');
let submit = document.getElementById('sub');
let thankYou = document.getElementById('than');
let rating = document.getElementById('ratings');
let rates = document.querySelectorAll('.btn');

submit.onclick = function()
{
    container.classList.add('hide');
    thankYou.classList.remove('hide');
}

// rates.forEach((rate) => {
//     rate.addEventListener('click', () => {
//     console.log(rate.innerHTML)
// })
// })


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
    ratings.innerHTML = rate.innerHTML
})
})


