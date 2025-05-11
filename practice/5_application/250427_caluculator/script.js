// 今回はボタンセレクタ全体を定義したいのでquerySelectorAllを使用
const buttons = document.querySelectorAll('.number-button, .operator-button, .function-button');

// displayを定義する
const display = document.getElementById('display');

// クリックイベントを追加
// ボタンがクリックされたら、文字を取得してdisplayに表示させる

// class="buttons"からそれぞれ取得する
buttons.forEach(button => {
    // もしボタンがクリックされたら
    button.addEventListener('click', function()  {
        // ボタンの文字（buttontext）を取得し、buttonという箱の中に入れる
        const buttontext = button.textContent
        
     // ボタンの文字をdisplay表示する設定

    // ACなら強制終了
     if (buttontext === 'AC') { //ボタンの文字の型た値がACと一致したら
        display.textContent = '0' 
        return // ここで処理をやめてください！」っていう意味の命令
    }
    

    if (buttontext === '=') {
        // ここで計算する
        display.textContent = eval(display.textContent// evalでtextContentの文字列を式として認識して実行する
        .replace('×', '*')  // 表示の「×」を JSの掛け算「*」に変える
        .replace('÷', '/')  // 表示の「÷」を JSの割り算「/」に変える
        .replace('−', '-')  // 表示の「−」（全角ハイフン）を 半角の「-」に変える
        .replace('+', '+')  // 表示の「＋」（全角）を 半角の「+」に変える
        );
        return;
    }
      
    // 画面の表示が０なら上書き、それ以外なら+= で追加
    if (display.textContent === '0') {
        display.textContent = buttontext; // 0なら上書き
     
    }
    else {
        display.textContent += buttontext; // そうじゃなければ追加

    }


    });
});