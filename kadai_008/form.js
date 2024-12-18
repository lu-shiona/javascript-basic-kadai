$(function() {
  // class属性のbtnの要素がクリックされたら
  $('.btn').on('click', function(){
    // テキストボックスに「クリックしました！」と表示させる
    console.log($('.text-box').val('クリックしました！'));
  });
});
