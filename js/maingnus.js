function createPiece(type) {
    if (type === "T") {
      return [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ];
    } else if (type === "O") {
      return [
        [2, 2],
        [2, 2],
      ];
    } else if (type === "L") {
      return [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
      ];
    } else if (type === "J") {
      return [
        [0, 4, 0],
        [0, 4, 0],
        [4, 4, 0],
      ];
    } else if (type === "I") {
      return [
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
      ];
    } else if (type === "S") {
      return [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
      ];
    } else if (type === "Z") {
      return [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
      ];
    }
  }
  
  const tetri = [];
  
  const playerElements = document.querySelectorAll(".player");
  [...playerElements].forEach((element) => {
    const tetris = new Tetris(element);
    tetri.push(tetris);
  });

  function simulateArrowKeyPress() {
    console.log("Hello")
    const arrowKeys = [37, 38, 39, 40];
    const randomArrowKey = arrowKeys[Math.floor(Math.random() * arrowKeys.length)];
    const event = new KeyboardEvent('keydown', {keyCode: randomArrowKey});
    handlekeyEvent(event);
  }
  
  setInterval(simulateArrowKeyPress, 100);

  const handlekeyEvent = (event) => {
    //player 1
    [
        [65, 68, 87, 83],
         [37, 38, 39, 40]
        /*
        [72, 75, 85, 74], //U, H, J, K
        */
       
      ].forEach((key, index) => {
        const player = tetri[index].player;
        if (event.type === "keydown") {
          if (event.keyCode === key[0]) {
            player.move(-1);
          } else if (event.keyCode === key[1]) {
            player.move(1);
          } else if (event.keyCode === key[2]) {
            player.rotate(1);
          }
        }
    
        if (event.keyCode === key[3]) {
          if (event.type === "keydown") {
            if (player.dropInterval !== player.DROP_FAST) {
              player.drop();
              player.dropInterval = player.DROP_FAST;
            }
          } else {
            player.dropInterval = player.DROP_SLOW;
          }
        }
  
      });

  }

  const keyListener = (event) => {
    handlekeyEvent(event);
  };
  
  document.addEventListener("keydown", keyListener);
  document.addEventListener("keyup", keyListener);
  