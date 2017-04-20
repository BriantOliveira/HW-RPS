var score = 0; 
var playerChoice;

var readable = {
    
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors',
};

var cpuChoice = {
    init: function(){
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
    },
        store: '' ,
        text: ''
}; 

var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu) {
    if(order[player] === [cpu]){
        return 'The game is tied. Try again?';
    }
    if (order[player] === order [cpu + 1]) {
        score++
        return "You won!"
    } else {
        score--;
        return 'You lost! :(';
    }
}

console.log(chooseWinner(1, 0));

var paragraph = document.querySelector('p');

var assingClick = function(tag, pos) {
 // assign a click listener 
 tag.addEventListener('click', function() {
 // set the players choice 
 playerChoice = pos;
 // get feedback to the cpu cpuChoice 
 cpuChoice.init();
 paragraph.innerText = ' The computer chose: ' + cpuChoice.text;
 //determine a winner 
 //display the winner and the current score
 paragraph.innerText += chooseWinner(playerChoice, cpuChoice.store);
 paragraph.innerText += '\n' + 'SCORE: ' + score; 
    });
}

var images = {
    tags: document.getElementsByTagName('img'),
    init: function() {
        for(var step = 0; step < this.tags.length; step++) {
            assingClick(this.tags[step], step);
        }
    }
}
images.init();