'use strict';

// カーテンアニメーション
document.addEventListener('DOMContentLoaded', () => {
  // div 要素を生成
  const curtain = document.createElement('div');
  curtain.id = 'curtain';

  // スタイル設定
  Object.assign(curtain.style, {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: '1',
    zIndex: 1001,
    transition: 'opacity 2.5s ease' // フェードアウト用
  });

  // body に追加
  document.body.appendChild(curtain);

  // フェードアウト開始（1フレーム後にopacityを0に）
  requestAnimationFrame(() => {
    curtain.style.opacity = '0';
  });

  // 2.5秒後に削除
  setTimeout(() => {
    curtain.remove();
  }, 2500);
});


// フェードインアニメーション
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.efct');

  const onScroll = () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    boxes.forEach((box) => {
      const elemPos = box.getBoundingClientRect().top + scroll;
      if (scroll > elemPos - windowHeight + 200) {
        box.classList.add('scrollin');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // 初回実行（ページ読み込み時にも反映）
});