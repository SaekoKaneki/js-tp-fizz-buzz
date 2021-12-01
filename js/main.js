document.querySelector('body').classList.add('js-enabled');

for (let i =1 ; i<=100; i++){
    if (i%3 === 0 && i%5 === 0) {
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li>FIZZBUZZ</li>`);
    }else if (i%5 === 0) {
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li>BUZZ</li>`);
    }else if ( i%3 === 0) {
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li>FIZZ</li>`);
    }else{
        document.querySelector('#fizzbuzz').insertAdjacentHTML('beforeend',`<li>${i}</li>`);
        }
   }
//}
