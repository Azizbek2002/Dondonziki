const choices = document.querySelectorAll('.choice'),
  score = document.querySelector('#score'),
  modal = document.querySelector('.modal'),
  result = document.querySelector('#result'),
  restart = document.querySelector('#restart'),
  scoreBoard = {
      player: 0,
      compyuter: 0
  };
  console.log(restart);

  // play game 
  function play(event){
        restart.style.display = 'inline-block'
        const playerChoise = event.target.id
        const compyuterChoise = getCompyuterChoice()
        const winner = getWinner(playerChoise,compyuterChoise)
        showWinner(winner,compyuterChoise)
  }
  //choise
  function getCompyuterChoice() {
      const rand = Math.random()
      if (rand < 0.34){
          return 'rock'
      }else if(rand <= 0.67){
          return 'paper'
      }else{
          return 'scissors'
      }
  }
  //winnner
  function getWinner(p , c) {
    if (p === c){
        return 'draw'
    }else if (p === 'rock'){
      
        if (c === 'paper'){
            return 'compyuter'
        }else{
            return 'player'
        }

    }else if (p === 'paper'){
     
        if (c === 'scissors'){
          return 'compyuter'
      }else {
          return 'player'
      }

    }else if(p === 'scissors'){
      if (c === 'rock'){
          return  'compyuter'
      }else if(c === 'paper'){
          return 'player'
      }
    }
  }
//   showWinner
  function showWinner(winner,compyuterChoise) {
    if(winner === 'player'){
        scoreBoard.player++
        result.innerHTML = `
        <h1 class="text-win">You win</h1>
        <i class="fas fa-hand-${compyuterChoise} fa-10x"</i>
        <p>Compyuter Choise <strong>${compyuterChoise.charAt(0).toUpperCase() + compyuterChoise.slice(1)}</strong></p>
        `
    }else if(winner === 'compyuter'){
        scoreBoard.compyuter++
        result.innerHTML = `
        <h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${compyuterChoise} fa-10x"</i>
        <p>Compyuter Choise <strong>${compyuterChoise.charAt(0).toUpperCase() + compyuterChoise.slice(1)}</strong></p>
        `
    }else{
        result.innerHTML = `
        <h1>Its A Draw</h1>
        <i class="fas fa-hand-${compyuterChoise} fa-10x"</i>
        <p>Compyuter Choise <strong>${compyuterChoise.charAt(0).toUpperCase() + compyuterChoise.slice(1)}</strong></p>
        `
    }
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Compyuter: ${scoreBoard.compyuter}</p>
    `
    modal.style.display = 'block'
  }
  function restartGame() {
      scoreBoard.player = 0
      scoreBoard.compyuter = 0
      score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Compyuter: ${scoreBoard.compyuter}</p>
    `
    restart.style.display = 'none'
  }
  //clear modal 
  function clearModal(event) {
      if(event.target == modal){
          modal.style.display = 'none'
      }
  }

  //event
  choices.forEach(choice => choice.addEventListener('click',play));
      window.addEventListener('click',clearModal)
      restart.addEventListener('click',restartGame)