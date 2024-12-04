// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//  ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒の待ち時間を設定し、文章を書き換える
  setTimeout(() => {
    text.textContent = ('ボタンをクリックしました');
  }, 2000);  
});

