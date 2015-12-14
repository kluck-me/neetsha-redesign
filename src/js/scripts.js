jQuery(function ($) {
  // トップページへのリンクの生成
  $('<p>').html('<a href="/">トップページに戻る</a>').appendTo('body>.wrapper>.header');

  // ページ内リンクの生成
  var $dd = $('<dd>');
  $('body>.wrapper>.main>.section>h2[id]').each(function () {
    var $this = $(this);
    $('<a>').attr('href', '#' + $this.attr('id')).text($this.text()).appendTo($dd);
  });
  $('<dl>').append('<dt>カテゴリ</dt>', $dd).appendTo('body>.wrapper>.menu');

  // トップへのリンクの生成
  $('body').attr('id', 'top');
  $('<p>').html('<a href="#top">ページ最上部へ</a>').appendTo('body>.wrapper>.main>.section');
});
