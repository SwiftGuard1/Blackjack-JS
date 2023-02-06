let currentScore = 0;
const cards = [
  { 'name': 'two', "value": 2 },
  { 'name': 'three', "value": 3 },
  { 'name': 'four', 'value': 4 },
  { 'name': 'five', 'value': 5 },
  { 'name': 'six', 'value': 6 },
  { 'name': 'seven', 'value': 7 },
  { 'name': 'eight', 'value': 8 },
  { 'name': 'nine', 'value': 9 },
  { 'name': 'ten', 'value': 10 },
  { 'name': 'jack', 'value': 10 },
  { 'name': 'queen', 'value': 10 },
  { 'name': 'king', 'value': 10 },
  { 'name': 'ace', 'value': [1, 11] }
]


function dealCard() {
  var cardNum = Math.floor(Math.random() * cards.length + 1);
  let card = cards[cardNum];
  if (card.name == "ace") {
    if (confirm("You drew an ace!  Hit OK for 1, and Cancel for 11")) {
      currentScore += card.value[0];
    } else {
      currentScore += card.value[1];
    }
    if (confirm("Your current score is " + currentScore + ", draw another or stop?")) {
      dealCard();
    } else {
      endGame();
    }
  } else {
    currentScore += card.value;
    if (confirm("You drew an " + card.name + ". Your current score is " + currentScore + ", draw another or stop?")) {
      dealCard();
    } else {
      endGame();
    }
  }
}



// const drawCard = (cards) => {
//   let randNum = Math.floor(Math.random() * cards.length);

//   if (Object.keys(cards)[randNum] === 'ace') {
//     if (confirm("You drew an ace!  Hit yes for 11 and no for 1.")) {
//       return Object.keys(cards)[randNum][1];
//     } else {
//       return Object.keys(cards)[randNum][0];
//     }
//   }
// }

// const randomCard = (cards) => {
//   // random value between 1 and 13 (size of object)
//   let randNum = Math.floor(Math.random() * 14)
//   // returns random element from cards as an array
//   if (Object.keys(cards)[randNum] === 'ace') {
//     return Object.keys(cards)[randNum][Math.floor(Math.random())];
//   }
//   return Object.keys(cards)[randNum];
// }

// const initialDeal = () => {
//   // deals two cards to start the game
//   card1 = drawCard(cards);
//   card2 = drawCard(cards);
//   // returns object with card names and values
//   return { card1, card2 };
// }

// const dealCard = () => {
//   // if user requests additional card, card is drawn and score is incremented
//   let newCard = randomCard(cards);
//   // returns card and value
//   return { newCard };
// }

// const playGame = () => {
//   alert('Welcome to blackjack!');
//   let firstCards = initialDeal();
//   currentScore += firstCards[card1].val + firstCards[card2].val;
//   alert(`Your first cards are: ${firstCards[card1]} and ${firstCards[card2]}`);
//   alert(`Your score is ${currentScore}`);
//   drawCard();
// }

function init() {
  currentScore = 0;
  dealCard();
}

function endGame() {
  let dealerHand = Math.floor(Math.random() * 22);
  if ((dealerHand < currentScore) && (currentScore < 22)) {
    alert("You won!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    if (confirm("Play again?")) {
      init();
    }
  } else if (dealerHand > 21 && currentScore > 21) {
    alert("You both lost!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    if (confirm("Play again?")) {
      init();
    }
  } else {
    alert("You lost!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    if (confirm("Play again?")) {
      init();
    }
  }
}

init();
