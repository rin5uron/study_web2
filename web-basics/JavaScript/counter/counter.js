/**
 * シンプルカウンターアプリのJavaScript
 * DOM操作と基本的なイベント処理の練習
 */

// DOMの読み込み完了時に実行
document.addEventListener('DOMContentLoaded', function() {
  // カウンター初期値
  let count = 0;
  
  // HTML要素の取得
  const countDisplay = document.getElementById('count');
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  // カウント表示の更新関数
  function updateDisplay() {
    countDisplay.textContent = count;
  }
  
  // 増加ボタンのクリックイベント
  incrementBtn.addEventListener('click', function() {
    count++;
    updateDisplay();
  });
  
  // 減少ボタンのクリックイベント
  decrementBtn.addEventListener('click', function() {
    count--;
    updateDisplay();
  });
  
  // リセットボタンのクリックイベント
  resetBtn.addEventListener('click', function() {
    count = 0;
    updateDisplay();
  });
  
  // 初期表示の更新
  updateDisplay();
}); 