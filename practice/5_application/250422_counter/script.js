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
const plusEl = document.getElementById("plus");      // プラス記号の表示場所
const minusEl = document.getElementById("minus");    // マイナス記号の表示場所
const plusCountDisplayEl = document.getElementById("plusCountDisplay");  // プラスカウント表示場所
const minusCountDisplayEl = document.getElementById("minusCountDisplay"); // マイナスカウント表示場所

// 初期表示設定
plusEl.textContent = "+"; // プラス記号を表示
minusEl.textContent = "-"; // マイナス記号を表示

// textContentで、表示する場所に文字を挿入
function updateDisplay() {
    counterEl.textContent = counter;// 合計を表示
    plusCountDisplayEl.textContent = pluscount; // プラスを押した回数を表示
    minusCountDisplayEl.textContent = minuscount; // マイナスを押した回数を表示
}

// 初期表示を更新
updateDisplay();

// .addEventListenerでボタンがクリックされたらこうするよ」という動きの登録
    plusbtn.addEventListener("click", function() {
        counter++; 
        pluscount++;    
        updateDisplay(); 
     
        // アニメーション付与
        plusCountDisplayEl.classList.remove('count-animate');
        void plusCountDisplayEl.offsetWidth;
        plusCountDisplayEl.classList.add('count-animate');
     });
     

    minusbtn.addEventListener("click", function() {
        counter--; //合計カウンターを１減らす
        minuscount++;    // マイナス回数を1増やす
        updateDisplay(); // 画面情報を更新
       
       
    minusCountDisplayEl.classList.remove('count-animate');
       void minusCountDisplayEl.offsetWidth;
       minusCountDisplayEl.classList.add('count-animate');
    });
    
    resetbtn.addEventListener("click", function() {
        counter = 0
        pluscount = 0;
        minuscount = 0;
        updateDisplay();
    });


