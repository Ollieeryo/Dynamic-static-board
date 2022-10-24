let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

const dataPanel = document.querySelector("#data-panel");

// write your code here
// 設定符號變數
const plusSymple = '<i class="plus fa-sharp fa-solid fa-circle-plus"></i>';
const minusSymple = '<i class="minus fa-sharp fa-solid fa-circle-minus"></i>';

// 使用函式進行空的 html 組合流程
function displayPlayerList(playersDate) {
  //設定 html 空字串
  let playerHtmlContent = "";

  playersDate.forEach((player) => {
    // 空的 html 加入最上層的 tr
    playerHtmlContent += "<tr>";

    // for in 選取 player 裡的值
    for (let everyKey in player) {
      // 只要是名字的部分不用家符號單純一格<td>
      if (everyKey === "name") {
        playerHtmlContent += `<td>${player[everyKey]}</td>`;
      } else {
        // 其他項目全部加上 加和減 的符號
        playerHtmlContent += `
          <td>
          <span class = "pNum" style = "font-size: 30px">${player[everyKey]}</span>
          ${plusSymple} ${minusSymple}
          </td>
          `;
      }
    }
    // 把最尾端的 tr 組合起來
    playerHtmlContent += "</tr>";
  });
  // 把組合完成的 HTML 放入節點
  dataPanel.innerHTML = playerHtmlContent;
}

// 最後把 players 陣列+物件 的內容放入函式
displayPlayerList(players);

//使用 event listener 綁定滑鼠事件
// 運用 event target 裡的資訊，分開處理加分/扣分的情況 (event delegation)

// 設定table元素變數
// const table = document.querySelector('.scoreboard')

// 新增監聽dataPanel click 事件

dataPanel.addEventListener("click", switchNum);

function switchNum(event) {
  // 設定點擊變數
  const target = event.target;
  // 設定點擊當前元素格子的第一個子元素
  const currentNumber = target.parentElement.children[0];
  // const currentTrueNumber = parseInt(currentNumber.textContent, 10)
  // 如果點擊到的元素class包含 plus 的話
  if (target.classList.contains("plus")) {

    // 型別轉換成數字後 + 1
    currentNumber.textContent = Number(currentNumber.textContent) + 1;
    // 如果點擊到的元素class包含 minus ，而且 數字大於 0 (防止減到 -1 以下)
  } else if (
    target.classList.contains("minus") &&
    currentNumber.textContent > 0
  ) {
    // 型別轉換成數字後 - 1
    currentNumber.textContent = Number(currentNumber.textContent) - 1;
  }
}

// 設定監聽鼠標移動事件，添加 hover 效果，讓鼠標移到 + - 按鈕時有顏色效果，並且鼠標變成手指，這樣在點擊按鈕時可以更加直覺
dataPanel.addEventListener('mouseover', event => {
  const mouseOver = event.target
  if (mouseOver.tagName === 'I') {
    mouseOver.style = "cursor: pointer"
    mouseOver.style.color = "gray"
  }
  dataPanel.addEventListener('mouseout', event => {
    const mouseOut = event.target
    mouseOver.style.color = ''
  })
})

