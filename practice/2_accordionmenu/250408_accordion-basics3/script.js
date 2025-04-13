// アコーディオンの全ヘッダーを取得
const accordionHeaders = document.querySelectorAll('.accordion-header');

// 各ヘッダーにイベントリスナーを設定
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // 現在のアコーディオンアイテムを取得
        const currentItem = this.parentElement;
        
        // 現在のアイテムが開いているかチェック
        const isCurrentOpen = currentItem.classList.contains('active');
        
        // 全てのアコーディオンアイテムを取得して閉じる
        const allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            // アクティブクラスを削除
            item.classList.remove('active');
            
            // アコーディオンコンテンツの高さをリセット
            const content = item.querySelector('.accordion-content');
            content.style.maxHeight = null;
        });
        
        // クリックしたアイテムが閉じていた場合のみ開く
        if (!isCurrentOpen) {
            // アクティブクラスを追加
            currentItem.classList.add('active');
            
            // コンテンツの高さを設定
            const content = currentItem.querySelector('.accordion-content');
            
            // CONCEPTアイテムの場合は大きめの固定値を設定
            if (currentItem.classList.contains('concept-item')) {
                content.style.maxHeight = "600px"; // CONCEPTアイテムには十分な高さを確保
            } 
            // 通常のアイテム（001, 002, 003, 004）には統一された高さを設定
            else {
                // すべての通常アイテムに統一された高さを設定
                content.style.maxHeight = "100px"; // 行火アイテムと同じ高さを確保
            }
        }
    });
});

// ページ読み込み時にCONCEPT部分を自動的に開く
window.addEventListener('DOMContentLoaded', function() {
    // CONCEPT部分のアコーディオンアイテムを取得
    const conceptItem = document.querySelector('.concept-item');
    
    if (conceptItem) {
        // アクティブクラスを追加
        conceptItem.classList.add('active');
        
        // コンテンツの高さを設定
        const content = conceptItem.querySelector('.accordion-content');
        if (content) {
            // CONCEPTアイテムには大きめの固定値を設定
            content.style.maxHeight = "600px";
        }
    }
}); 