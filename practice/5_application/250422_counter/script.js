// カウンターアプリのJavaScriptコード 

// ３つの表示場所の初期値を0に設定
let counter = 0;// 合計を入れる箱
let pluscount =0;// プラスを押した回数を入れる箱
let minuscount =0;// マイナスを押した回数を入れる箱


// ポジティブボタンをクリックしたらカウンターを1増やす

// それぞれのボタンを定義、.getElementByIdでIDを習得documentは今表示されているWebページそのもの
const plusbtn = document.getElementById("plusbtn")
const minusbtn = document.getElementById("minusbtn")
const resetbtn = document.getElementById("resetbtn")


 // 数字を表示する場所を定義
const counterEl = document.getElementById("counter"); // 合計の表示場所
const plusEl = document.getElementById("plus");      // プラス回数の表示場所
const minusEl = document.getElementById("minus");    // マイナス回数の表示場所

// textContentで、表示する場所に文字を挿入
function updateDisplay() {
    counterEl.textContent = counter;// 合計を表示
     plusEl.textContent = pluscount;//プラスを押した数を表示
    minusEl.textContent = minuscount;//マイナスを押した数を表示
}

// .addEventListenerでボタンがクリックされたらこうするよ」という動きの登録
    plusbtn.addEventListener("click", function() {
     counter++; //合計カウンターを１増やす
     pluscount++;    // プラス回数を1増やす
     updateDisplay(); // 画面情報を更新
    });

    minusbtn.addEventListener("click", function() {
        counter--; //合計カウンターを１減らす
        minuscount++;    // マイナス回数を1増やす
        updateDisplay(); // 画面情報を更新
       });
  
    resetbtn.addEventListener("click", function() {
        counter = 0
        pluscount = 0;
        minuscount = 0;
        updateDisplay();
    });



