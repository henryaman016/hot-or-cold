var rando=Math.floor((Math.random()*10))+1;
guess=parseInt(guess);
var tries=5;

function clac(){
    if(1<guess && guess <10){

    }else if(guess>10){
        alert("the number is over 10");
        end ;
    }else if(guess<1){
        alert("The number is under 1")
        end ;
    }
    if(guess==rando){
        alert('You Guessed the number!');
        end;
    }else{
        alert('Nope,you guessed wrong');
    }
}

function event_handle(evt){
    evt.preventDefault();
    evt.stopPropagation();
    if(tries>=0){
        var guess=prompt('Guess a number. You start with ' + tries +'tries');
        while(tries>0){
            clac();
            tries --;
            var guess = prompt('Guess a New number.You have ' + tries + 'tries leftt');
        }
    }else{
        alert('You are out of tries');
        end;
    }
}

var form = document.querySelector('#guess');
form.addEventListener('submit',event_handle);