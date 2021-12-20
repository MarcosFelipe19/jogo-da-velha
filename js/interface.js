window.addEventListener("load",function(){
    let square = document.querySelectorAll(".square")

    for (let key of square) {
        key.addEventListener("click", playerClick)
    }

    function playerClick(event){
        if(!gameOver){
            let square = event.target
            let id = square.id
            
            let acabou = updateBord(id)
    
            if(acabou){
                setTimeout(()=>{
                    alert(`O jogador-${playtime} venceu o jogo!`)
                },200)
            }
    
            simbolsUpdate(square)
        }
    }

    function simbolsUpdate(square){
        let id = square.id
        square.classList.add(gameBord[id])   
        console.log(square)           
    }
})