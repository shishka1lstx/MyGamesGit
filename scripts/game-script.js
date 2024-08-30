var wincondition = false;
var field = [['', '', ''], ['', '', ''], ['', '', '']];
var winner = '';

function start(el){
    document.querySelector('.game__blocks').classList.remove('off');
    el.classList.remove('active');
    document.querySelector('.reset-btn').classList.add('active');
}

function reset(){
    wincondition = false;
    winner = '';
    document.getElementById('anim').classList.remove('active');
    let al = document.querySelector('.win');
    al.classList.remove('active');
    let els = document.getElementsByClassName('game__blocks-item');
    for(let i = 0; i < els.length; i++){
        if(els[i].classList.contains('x')){
            els[i].classList.remove('x');
            
        }

        if(els[i].classList.contains('o')){
            els[i].classList.remove('o');
            
        }
        els[i].innerHTML = '';
        els[i].disabled = false;
        els[i].classList.remove('used')
    }
    
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            field[i][j] = '';
        
}

function fill(el){
    let num = parseInt(el.id)
    if(turn % 2 == 0){
        el.classList.add('x');
        el.innerHTML = 'X';
        if(num % 3 != 0)
            field[Math.floor(num / 3)][(num % 3) - 1] = 'x';
        else{
            field[Math.floor(num / 3) - 1][2] = 'x';
        }
        turn++;
    }
    else{
        el.classList.add('o');
        el.innerHTML = 'O';
        turn++;
        if(num % 3 != 0)
            field[Math.floor(num / 3)][(num % 3) - 1] = 'o';
        else{
            field[Math.floor(num / 3) - 1][2] = 'o';
        }
    }
    
    el.disabled = true;
    el.classList.add('used');
    checkWin();
    
}

var turn = 0;

function checkWin(){
//    x wins
    if((field[0][0] == "x" && field[0][1] == 'x' && field[0][2] == 'x' ) || 
       (field[1][0] == 'x' && field[1][1] == 'x' && field[1][2] == 'x' ) || 
       (field[2][0] == 'x' && field[2][1] == 'x' && field[2][2] == 'x' ) ||
       (field[0][0] == "x" && field[1][0] == 'x' && field[2][0] == 'x' ) || 
       (field[0][1] == 'x' && field[1][1] == 'x' && field[2][1] == 'x' ) ||
       (field[0][2] == 'x' && field[1][2] == 'x' && field[2][2] == 'x' ) ||
       (field[0][0] == "x" && field[1][1] == 'x' && field[2][2] == 'x' ) ||
       (field[0][2] == 'x' && field[1][1] == 'x' && field[2][0] == 'x' ) ||
       (field[0][2] == 'x' && field[1][2] == 'x' && field[2][2] == 'x' ) 
    ){
        wincondition = true;
        winner = 'X';
    }
    


//  O wins
    if((field[0][0] == "o" && field[0][1] == 'o' && field[0][2] == 'o' ) ||
       (field[1][0] == 'o' && field[1][1] == 'o' && field[1][2] == 'o' ) ||
       (field[2][0] == 'o' && field[2][1] == 'o' && field[2][2] == 'o' ) ||
       (field[0][0] == "o" && field[1][0] == 'o' && field[2][0] == 'o' ) ||
       (field[0][1] == 'o' && field[1][1] == 'o' && field[2][1] == 'o' ) ||
       (field[0][2] == 'o' && field[1][2] == 'o' && field[2][2] == 'o' ) ||
       (field[0][0] == "o" && field[1][1] == 'o' && field[2][2] == 'o' ) || 
       (field[0][2] == 'o' && field[1][1] == 'o' && field[2][0] == 'o' ) || 
       (field[0][2] == 'o' && field[1][2] == 'o' && field[2][2] == 'o' )
    ){
        wincondition = true;
        winner = 'O';
    }

    let els = document.getElementsByClassName('game__blocks-item')
    if(wincondition == true){
        for(let i = 0; i < els.length; i++){
            els[i].disabled = true;
            els[i].classList.add('used')
        }
        let al = document.querySelector('.winner');
        al.innerHTML = `${winner}`;

        if(winner == 'O')
            al.style.color = '#a8d0e6';
        else
            al.style.color = '#f76c6c';
        document.querySelector('.win').classList.add('active');
        document.getElementById('anim').classList.add('active');
    }

}

