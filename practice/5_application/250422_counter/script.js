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

// pdateDisplayで画面の表示を更新する
function updateDisplay() {
    counterEl.textContent = counter;
    plusEl.textContent = pluscount;
    minusEl.textContent = minuscount;
}

// .addEventListenerでボタンがクリックされたらこうするよ」という動きの登録
    plusbtn.addEventListener("click", function() {
     counter++; //数を１増やす
    });


document.getElementById("minus")

     // .addEventListenerでボタンが押されたらこうするよ」という動きの登録
     minusbtn.addEventListener("click", function() {
          counter--; 

// .textContentで表示されている文字を変える
 document.getElementById("counter").textContent = counter;
});