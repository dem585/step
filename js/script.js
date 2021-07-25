const time = 100;
const step = 1;  

function outNum(num, elem) {
    let e = document.querySelector('#out');
    n = 0;
    let t = Math.round(time/(num/step));
    setTimeout(() => {
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
              clearInterval(interval);
         }
    e.innerHTML = n;
                },
  t);
}, 3000);
};

outNum(548, '#out'); 