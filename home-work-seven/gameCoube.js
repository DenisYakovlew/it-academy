const moveCount = 3;
const firstPlayerName = 'Peter';
const secondPlayerName = 'Gustav';
const itemsCoub = [1, 2, 3, 4, 5, 6];
let playerMoves = [];
let getValueCoub = () => { return itemsCoub[Math.floor(Math.random()*itemsCoub.length)] }; 
let playerMove = (playerName) => { playerMoves.push({name: playerName, valueCoub: getValueCoub()})}

function gameProcess(countIterations) {
    for (let i = 1; i <= countIterations; i++) {
        playerMove(firstPlayerName, i);
        playerMove(secondPlayerName, i);
    }
}

function winnerCheck (gameMoves) {
    const totalFirstPlayer = gameMoves.filter(item => item.name === firstPlayerName).map(item => item.valueCoub).reduce((a, b) => a + b);
    const totalSecondPlayer = gameMoves.filter(item => item.name === secondPlayerName).map(item => item.valueCoub).reduce((a, b) => a + b);
    if (totalFirstPlayer > totalSecondPlayer) {
        console.log(`Игрок "${firstPlayerName}" набрал ${totalFirstPlayer} и победил игрока "${secondPlayerName}"`)
    }
    if (totalFirstPlayer === totalSecondPlayer) {
        console.log(`Ничья! У ${firstPlayerName} и ${secondPlayerName} одинаковое колличество очков - ${totalFirstPlayer}`)
    }
    if (totalFirstPlayer < totalSecondPlayer) {
        console.log(`Игрок "${secondPlayerName}" набрал ${totalSecondPlayer} и победил игрока "${firstPlayerName}"`)
    } 
}

function printGameResult(gameMoves) {
    gameMoves.forEach(item => {
	console.log(`Ходит игрок ${item.name} и получает цифру - ${item.valueCoub}`)
});
}

gameProcess(moveCount)
printGameResult(playerMoves)
winnerCheck(playerMoves);