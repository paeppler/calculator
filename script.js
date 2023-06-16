const text1 = document.querySelector('#text1')
let operator = document.querySelector('#operator')
const text2 = document.querySelector('#text2')
let solution = document.querySelector('#solution')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btn0 = document.querySelector('#btn0')
const btn_add = document.querySelector('#btn_add')
const btn_sub = document.querySelector('#btn_sub')
const btn_mul = document.querySelector('#btn_mul')
const btn_div = document.querySelector('#btn_div')
const btn_clear = document.querySelector('#clear')
const btn_equ = document.querySelector('#btn_equ')
const btnx = document.querySelector('#btnx')

    btn1.addEventListener('click', function() {
        if (operator.textContent === '') {
        text1.innerHTML += '1'; } else 
        text2.innerHTML += '1';
        });

    btn2.addEventListener('click', function() {
        if (operator.textContent == '') {
        text1.innerHTML += '2';} else 
        text2.innerHTML += '2';
        });

    btn3.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '3';} else 
            text2.innerHTML += '3';   
        });

    btn4.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '4';} else 
            text2.innerHTML += '4';
        });

    btn5.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '5';} else 
            text2.innerHTML += '5';    
        });

    btn6.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '6';} else 
            text2.innerHTML += '6';    
        });

    btn7.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '7';} else 
            text2.innerHTML += '7';    
        });

    btn8.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '8';} else 
            text2.innerHTML += '8';    
        });

    btn9.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '9';} else 
            text2.innerHTML += '9';   
    });

    btn0.addEventListener('click', function() {
        if (operator.textContent == '') {
            text1.innerHTML += '0';}
            else if (operator.textContent == '/') {
                solution.textContent = 'DONT EVEN TRY'
                text1.textContent = '';
                operator.textContent = '';
            }
             else 
            text2.innerHTML += '0';   
    });

    btn_add.addEventListener('click', function() {
        operator.innerHTML += '+'; 
        operator.textContent = '+';
    });

    btn_sub.addEventListener('click', function() {
        operator.innerHTML += '-'; 
        operator.textContent = '-';
    });

    btn_mul.addEventListener('click', function() {
        operator.innerHTML += '*'; 
        operator.textContent = '*';
    });

    btn_div.addEventListener('click', function() {
        operator.innerHTML += '/'; 
        operator.textContent = '/';
    });

    btn_clear.addEventListener('click', function() {
        operator.textContent = '';
        text1.textContent = '';
        text2.textContent = '';
        solution.textContent = '';
    })

    btn_equ.addEventListener('click', function() {
        let num1 = parseInt(text1.textContent);
        let num2 = parseInt(text2.textContent);
        let sol

        if (operator.textContent === '+') {
        sol = num1 + num2;
        } else if (operator.textContent === '-') {
        sol = num1 - num2;
        solution.innerHTML = '=' + num1 - num2;
        } else if (operator.textContent === '*') {
        sol = num1 * num2;
        } else if (operator.textContent === '/') {
        sol = num1 / num2;
        } else if (operator.textContent === '') {
        sol = num1;
        }

        solution.innerHTML = '=' + sol
    })
 
    btnx.addEventListener('click', function() {
        if (operator.textContent === '') {
            text1.innerHTML = parseInt(text1.textContent) * parseInt(text1.textContent);
        } else text2.innerHTML = parseInt(text2.textContent) * parseInt(text2.textContent);
    })