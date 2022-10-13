
let title = document.querySelector(".title");
let turn = 'x';
let squares = [];

function endGame (num1, num2 , num3){

    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";

    setInterval(function () { title.innerHTML += "."; }, 1000);
    setTimeout(function () { location.reload(); }, 4000);

}

function winnner()
{
    for(let i =1; i<10 ; i++)
    {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    // Rows
    if( squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        endGame(1 , 2 , 3);
    }
    else if( squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '')
    {
        endGame(4, 5, 6);
    }
    else if( squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')
    {
        endGame(7, 8, 9);
    }

    // columns

    else if( squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
    {
        endGame(1, 4, 7);
    }
    else if( squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '')
    {
        endGame(2, 5, 8);
    }
    else if( squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '')
    {
        endGame(3, 6, 9);
    }

    // cross

    else if( squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '')
    {
        endGame(1, 5, 9);
    }
    else if( squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '')
    {
        endGame(3, 5, 7);
    }
}

function game (id)
{
    let element = document.getElementById(id);
    if( turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML ='x';
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if( turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winnner();
}