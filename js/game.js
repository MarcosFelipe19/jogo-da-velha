let gameBord = ["", "", "", "", "", "", "", "", ""]
let playtime = 0
let simbols = ["o", "x"]
let gameOver = false
let wins = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['6', '4', '2'],
    ['8', '4', '0'],
]

function updateBord(square) {
    if (!gameOver) {
        let simbol = ""

        if (playtime == 0) {
            simbol = simbols[0]
        } else {
            simbol = simbols[1]
        }

        if (gameBord[square] == "") {
            gameBord[square] = simbol

            gameOver = winPlayer(simbol)


            if (!gameOver) {
                if (simbol == "o") {
                    playtime = 1
                } else {
                    playtime = 0
                }
            }
        }
    }
    return gameOver
}

function winPlayer(simbol) {
    for (let key in wins) {

        let posi1 = wins[key][0]
        let posi2 = wins[key][1]
        let posi3 = wins[key][2]

        if (gameBord[posi1] == simbol && gameBord[posi2] == simbol && gameBord[posi3] == simbol) {
            console.log("entrei")
            return true
        }
    }
    return false
}