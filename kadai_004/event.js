// HTMLの読込に完了したら、「loadイベントが発生しました」のメッセージをコンソールに出力する
$(window).on('load', () => {
  console.log('loadイベントが発生しました');
});

// 画面をスクロールしたら、「scrollイベントが発生しました」のメッセージをコンソールに出力する
$(window).on('scroll', () => {
  console.log('scrollイベントが発生しました');
}); 