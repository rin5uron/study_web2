// カウンターアプリのJavaScriptコード 

let counter = 0;
let positive = 0;
let negative = 0;

// HTML要素の取得
const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const resetBtn = document.getElementById('resetBtn');

// カウンターの更新関数
function updateCounter() {
    // 差分を計算して表示
    counter = positive - negative;
    counterElement.textContent = counter;
}

// プラスボタンの処理
plusBtn.addEventListener('click', function() {
    positive++;
    updateCounter();
});

// マイナスボタンの処理
minusBtn.addEventListener('click', function() {
    negative++;
    updateCounter();
});

// リセットボタンの処理
resetBtn.addEventListener('click', function() {
    counter = 0;
    positive = 0;
    negative = 0;
    updateCounter();
});

