const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(card)
      if(card.className === "card")
      {
        console.log("entro");
        card.className ="card turned"
      }
      
      console.log(memoryGame.pickedCards.push(card));
      console.log("comparacion",memoryGame.pickedCards[0].getAttribute('data-card-name'),memoryGame.pickedCards[1].getAttribute('data-card-name'))
      const isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'),memoryGame.pickedCards[1].getAttribute('data-card-name'))
      const pairClicked = document.querySelector("#pairs-clicked")
      const pairGuessed = document.querySelector("#pairs-guessed")
      pairClicked.innerText = memoryGame.pairsClicked
      pairGuessed.innerText = parseInt(memoryGame.pairsGuessed/2)
      console.log(isPair);
      if(memoryGame.pickedCards.length === 3)
      {
        if(!isPair)
        {
          memoryGame.pickedCards[0].className = "card"
          memoryGame.pickedCards[1].className = "card"
        }
        memoryGame.pickedCards.shift(memoryGame.pickedCards[0])
        memoryGame.pickedCards.shift(memoryGame.pickedCards[0])
        atributes.shift(atributes[0]);
        atributes.shift(atributes[0]);
      }
      console.log(`Card clicked: ${card}`);
    });
    // card.classList.toggle('turned');
    
  });
  
});
