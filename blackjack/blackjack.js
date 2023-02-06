function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

let currentScore = 0;
let cards = [
  { 'name': 'two', "value": 2, "emojis":["🂢"] },
  { 'name': 'three', "value": 3, "emojis":["🂣"] },
  { 'name': 'four', 'value': 4, "emojis": ["🂤"] },
  { 'name': 'five', 'value': 5, "emojis": ["🂥"] },
  { 'name': 'six', 'value': 6, "emojis": ["🂦"] },
  { 'name': 'seven', 'value': 7, "emojis": ["🂧"] },
  { 'name': 'eight', 'value': 8, "emojis": ["🂨"] },
  { 'name': 'nine', 'value': 9, "emojis": ["🂩"] },
  { 'name': 'ten', 'value': 10, "emojis": ["🂪"] },
  { 'name': 'jack', 'value': 10, "emojis": ["🂫"] },
  { 'name': 'queen', 'value': 10, "emojis": ["🂭"] },
  { 'name': 'king', 'value': 10, "emojis": ["🂭"] },
  { 'name': 'ace', 'value': [1, 11], "emojis": ["🂡"] }
]


async function dealCard() {
  var cardNum = Math.floor(Math.random() * cards.length + 1);
  let card = cards[cardNum];
  if (card.name == "ace") {
    if (confirm("You drew an ace! " + card.emojis[0] + "  Hit OK for 1, and Cancel for 11")) {
      currentScore += card.value[0];
    } else {
      currentScore += card.value[1];
    }
    if (confirm("Your current score is " + currentScore + ", draw another or stop?")) {
      await delay(250);
      dealCard();
    } else {
      await delay(250);
      endGame();
    }
  } else {
    currentScore += card.value;
    if (confirm("You drew an " + card.name + " " + card.emojis[0] + ". Your current score is " + currentScore + ", draw another or stop?")) {
      await delay(250);
      dealCard();
    } else {
      await delay(250);
      endGame();
    }
  }
}

async function init() {
  currentScore = 0;
  await delay(250);
  dealCard();
}

async function endGame() {
  let dealerHand = Math.floor(Math.random() * 26);
  if ((dealerHand < currentScore) && (currentScore < 22)) {
    alert("You won!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    await delay(250);
    if (confirm("Play again?")) {
      await delay(250);
      init();
    }
  } else if (dealerHand > 21 && currentScore > 21) {
    alert("You both lost!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    await delay(250);
    if (confirm("Play again?")) {
      await delay(250);
      init();
    }
  } else {
    alert("You lost!\n\nDealer's Hand: " + dealerHand + "\nPlayer's Hand: " + currentScore);
    await delay(250);
    if (confirm("Play again?")) {
      await delay(250);
      init();
    }
  }
}

init();