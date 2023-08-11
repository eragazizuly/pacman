    const width = 28
    const grid = document.querySelector(".grid")
    const scoreEl = document.getElementById("score")
    const squares = []
    let score = 0

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    function createBoard() {
        for(let i = 0; i < layout.length; i++) {
            const square = document.createElement("div")
            grid.appendChild(square)
            squares.push(square)

            if(layout[i] === 0) {
                squares[i].classList.add("pac-dot")
            } else if(layout[i] === 1) {
                squares[i].classList.add("wall")
            } else if(layout[i] === 2) {
                squares[i].classList.add("ghost-lair")
            } else if(layout[i] === 3) {
                squares[i].classList.add("power-pellet")
            }
        }
    }

    createBoard()

    let pacmanIndex = 500;
    squares[pacmanIndex].classList.add("pacman")

    function control(e) {
        squares[pacmanIndex].classList.remove("pacman")
        switch(e.key) {
            case "ArrowDown":
                if(
                    !squares[pacmanIndex + width].classList.contains("ghost-lair") &&
                    !squares[pacmanIndex + width].classList.contains("wall") &&
                    pacmanIndex + width < width * width
                    ) {
                    pacmanIndex += width
                }
                break
            case "ArrowUp":
                if(
                    !squares[pacmanIndex - width].classList.contains("ghost-lair") &&
                    !squares[pacmanIndex - width].classList.contains("wall") &&
                    pacmanIndex - width >= 0
                    ) {
                    pacmanIndex -= width
                }
                break
            case "ArrowLeft":
                if(
                    !squares[pacmanIndex - 1].classList.contains("ghost-lair") &&
                    !squares[pacmanIndex - 1].classList.contains("wall") &&
                    pacmanIndex % width !== 0
                    ) {
                    pacmanIndex -= 1
                } else if(pacmanIndex === 364) {
                    pacmanIndex = 391
                }
                break
            case "ArrowRight":
                if(
                    !squares[pacmanIndex + 1].classList.contains("ghost-lair") &&
                    !squares[pacmanIndex + 1].classList.contains("wall") &&
                    pacmanIndex % width < width - 1
                    ) {
                    pacmanIndex += 1
                } else if(pacmanIndex === 391) {
                    pacmanIndex = 364
                }
                break
        }
        squares[pacmanIndex].classList.add("pacman")
        pacDotEaten()
        powerPelletEaten()
        checkForWin()
    }

    document.addEventListener("keyup", control)

    function pacDotEaten() {
        if(squares[pacmanIndex].classList.contains("pac-dot")) {
            score++
            scoreEl.textContent = score
            squares[pacmanIndex].classList.remove("pac-dot")
        }
    }

    function powerPelletEaten() {
        if(squares[pacmanIndex].classList.contains("power-pellet")) {
            score += 10
            scoreEl.textContent = score
            squares[pacmanIndex].classList.remove("power-pellet")
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(function() {ghosts.forEach(ghost => ghost.isScared = false)}, 10000)
        }
    }
    
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost("blinky", 348, 250),
        new Ghost("pinky", 376, 400),
        new Ghost("inky", 351, 300),
        new Ghost("clyde", 379, 500)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add("ghost")
    })

    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost) {
        const directions = [-1, 1, -width, width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function() {
            if(
                !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
                !squares[ghost.currentIndex + direction].classList.contains("wall")
            ) {
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className)
                squares[ghost.currentIndex].classList.add("ghost")
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)]
            }
            if(ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost")
            }

            if(ghost.isScared && ghost.currentIndex === pacmanIndex) {
                squares[pacmanIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.startIndex
                score += 100
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            }
            checkForGameOver()
        }, ghost.speed)
    }

    function checkForGameOver() {
        if(
            squares[pacmanIndex].classList.contains("ghost") && 
            !squares[pacmanIndex].classList.contains("scared-ghost")) {
            squares[pacmanIndex].classList.remove("pacman")
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", control)
            scoreEl.textContent = "WASTED"
        }
    }
    
    function checkForWin() {
        if(score >= 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", control)
            scoreEl.textContent = "WON"
        }
    }