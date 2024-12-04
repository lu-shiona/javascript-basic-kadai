// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // テキストを「クリックしました」に書き換える
  text.textContent = 'ボタンをクリックしました';
});