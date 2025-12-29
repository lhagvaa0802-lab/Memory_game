const emojis = ["🍇","🍓","🍒","🥝","🍍","🍑","🍇", "🍓", "🍒","🥝","🍍","🍑"];
let flippedCards = [];
let moves = 0;
let matches = 0;
let isLocked = false;

// Selection
const grid = document.getElementById('game-grid');

function initGame() {
    grid.innerHTML = '';
    flippedCards = [];
    moves = 0;
    matches = 0;
    isLocked = false;
    
   

    const shuffled = emojis.sort(() => Math.random() - 0.5);
    shuffled.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = emoji;
        card.textContent = emoji;
        
        grid.appendChild(card);
         console.log(card.textContent);
    });
    console.log(shuffled)
   
};

 initGame();
