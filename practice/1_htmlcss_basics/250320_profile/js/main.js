// ハンバーガーメニューの機能
document.addEventListener('DOMContentLoaded', function() {
    // メニューアイコンと、表示されるメニュー項目の要素を取得
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');
    
    // メニューアイコンがクリックされたときの処理
    menuIcon.addEventListener('click', function() {
        // activeクラスをトグル（付ける/外す）する
        menuItems.classList.toggle('active');
        
        // メニューが開いているかどうかを表す状態
        const isOpen = menuItems.classList.contains('active');
        
        // アイコンの見た目を変更（×印に）
        menuIcon.querySelector('span:nth-child(1)').style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
        menuIcon.querySelector('span:nth-child(2)').style.opacity = isOpen ? '0' : '1';
        menuIcon.querySelector('span:nth-child(3)').style.transform = isOpen ? 'rotate(-45deg) translate(7px, -7px)' : '';
    });
    
    // メニュー以外の場所をクリックしたらメニューを閉じる
    document.addEventListener('click', function(event) {
        // クリックがメニューアイコンの内部でなく、かつメニューが開いている場合
        if (!menuIcon.contains(event.target) && !menuItems.contains(event.target) && menuItems.classList.contains('active')) {
            // メニューを閉じる
            menuItems.classList.remove('active');
            // アイコンを元に戻す
            menuIcon.querySelector('span:nth-child(1)').style.transform = '';
            menuIcon.querySelector('span:nth-child(2)').style.opacity = '1';
            menuIcon.querySelector('span:nth-child(3)').style.transform = '';
        }
    });
}); 