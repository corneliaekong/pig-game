var scores, roundScore, activePlayer, gamePlaying, newScore;
  init();
 
 // adding event listeners//

 document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
   //1 generate random number
   
   var dice = Math.floor(Math.random() * 6) + 1;
   //2 display the result
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = './Images/dice-' + dice + '.png';
   
   if(newScore === 6 && dice === 6){
     // player ooses
     scores[activePlayer] = 0;
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     nextPlayer();
   }
   // 3 update roundScore
   else if (dice !== 1){
     roundScore += dice;
     document.querySelector('#current-' + activePlayer).textContent = roundScore;

   }
   else{
     // next player
     nextPlayer(); 
   }
   newScore = dice;
  }

  })

  document.querySelector('.btn-hold').addEventListener('click', function(){

    // update the global score
    if(gamePlaying){
    scores[activePlayer] += roundScore;
    // next player
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if palyer won the game
    if(scores[activePlayer] >= 20){
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.dispaly = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;

    }
    else{
      nextPlayer();
      //document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
    }
  }
    
  });

  function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     document.getElementById('current-0').textContent = "0";
     document.getElementById('current-1').textContent = "0";

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
  }

  document.querySelector('.btn-new').addEventListener('click', init)

  function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

   document.querySelector('.dice').style.display = "none";

   document.getElementById('score-0').textContent = "0";
   document.getElementById('score-1').textContent = "0";
   document.getElementById('current-0').textContent = "0";
   document.getElementById('current-1').textContent = "0";
   document.getElementById('name-0').textContent = "PLAYER 1";
   document.getElementById('name-1').textContent = "PLAYER 2";
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
   

  
  }













//document.querySelector('#current-' + activePlayer).textContent = dice;
 //var x = document.querySelector('#score-0').textContent;
 //console.log(x);