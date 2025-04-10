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
            // 実際のコンテンツの高さと最小高さ40pxのうち、大きい方を採用
            const contentHeight = Math.max(content.scrollHeight, 40);
            content.style.maxHeight = contentHeight + "px";
        }
    });
}); 