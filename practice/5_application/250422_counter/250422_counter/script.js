// カウンターアプリのJavaScriptコード 

// 初期値を0に設定
let counter = 0;

// ポジティブボタンをクリックしたらカウンターを1増やす

// .getElementByIdでIDを習得documentは今表示されているWebページそのもの
document.getElementById("plus")

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