$(function(){
  // id属性がchage-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
    // id属性がtargetの要素の文字色をblueにする
    $('#target').css('color','blue');
  });
  
  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function(){
    // id属性がtargetの要素の文字内容を「また明日！」に変える
    $('#target').text('また明日！');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function(){
    // id属性がtargetの要素をフェードアウトで文字が消える
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});