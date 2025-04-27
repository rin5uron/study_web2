// 今回はボタンセレクタ全体を定義したいのでquerySelectorAllを使用
const buttons = document.querySelectorAll('.button');

// displayを定義する
const display = document.getElementById('display');

// クリックイベントを追加
// ボタンがクリックされたら、文字を取得してdisplayに表示させる

// class="buttons"からそれぞれ取得する
buttons.forEach(button => {
    // もしボタンがクリックされたら
    button.addEventListener('click', function()  {
        // ボタンの文字（buttontext）を取得し、buttonという箱の中に入れる
        const buttontext = button.textcontent
        // ボタンの文字をdisplay表示する,
        // +=:今の表示に追加する
        display.textContent += buttontext
    });
});

