// ハンバーガーメニュー動作
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});


// スライダー動作
  const swiper = new Swiper('.swiper', {
    loop: true,  // ループ有効
    pagination: {
      el: '.swiper-pagination',
      clickable: true  // ●をクリック可能に
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
    // autoplay（自動再生）は指定していないのでデフォルトで無効
  });