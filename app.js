/*-------------------------------- Constants --------------------------------*/
let currentPlayer = "❌";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;


/*---------------------------- Variables (state) ----------------------------*/

const messageEl = document.getElementById("message");
const squares = document.querySelectorAll(".sqr");

/*------------------------ Cached Element References ------------------------*/

messageEl.textContent = `Player ${currentPlayer}'s turn`;

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

/*-------------------------------- Functions --------------------------------*/
for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      messageEl.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
      return true;
    }
  }

  if (!board.includes("")) {
    messageEl.textContent = "It's a tie!";
    gameActive = false;
    return true;
  }
  return false;
}

function handleClick(e) {
  const index = e.target.id;

  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (!checkWinner()) {
   currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
    messageEl.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "❌";
  gameActive = true;
  messageEl.textContent = `Player ${currentPlayer}'s turn`;
  squares.forEach(square => square.textContent = "");
}

document.getElementById("restart-btn").addEventListener("click", restartGame);




// 
// function handleClick(e) {
//   const index = e.target.id;
//   if (!gameActive || board[index] !== "") return;

//   board[index] = currentPlayer;
//   const img = document.createElement("img");

//   if (currentPlayer === "❌") {
//     img.src = "https://th.bing.com/th/id/R.73db97c0c4a9c9b009d69f21ea48ecdc?rik=czIj0NNaLJq9%2bg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-darth-vaderdarth-vaderanakin-skywalkerstar-wars-franchiseskywalker-1701527754654imyyv.png&ehk=vMVKEV2EXdqon7okfAd%2bGDrrpEWhDZlCR9oo0z%2faynA%3d&risl=&pid=ImgRaw&r=0";
//     img.alt = "❌";
//   } else {
//     img.src = "https://i.pinimg.com/originals/29/ad/d2/29add2e79640d7d07653dfcd39a74bf8.png";
//     img.alt = "⭕";
//   }

//   img.style.width = "80%";
//   img.style.height = "80%";
//   img.style.objectFit = "contain";
//   e.target.appendChild(img);

//   if (!checkWinner()) {
//     currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
//     messageEl.textContent = `Player ${currentPlayer}'s turn`;
//   }
// }

/* this work that is blanked out was me testing to see if i could put imgs inside the squares instead of the x's and o's
this was a lot of fun creating and customizing overall most fun project and it wasnt too mind bogling 
everything is getting a bit easier and im enjoying putting everything together!!!
*/

/*----------------------------- Event Listeners -----------------------------*/


squares.forEach(square => square.addEventListener("click", handleClick));


