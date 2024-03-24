// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "jquery";
import "popper.js";
import "bootstrap";
import "../stylesheets/application"; 
import 'bootstrap-tagsinput';

$(document).ready(function() {
  $("input[data-role='tagsinput']").tagsinput();
});

$(document).ready(function() {
  // タグリストのテキストフィールドの値が変更されたときのイベントハンドラー
  $('input[data-role="tagsinput"]').on('change', function() {
    var tags = $(this).val().split(','); // カンマで区切られたタグを配列に分割
    $('#tags-container').empty(); // 既存のタグをクリア

    // 各タグに対してループ処理
    $.each(tags, function(index, tag) {
      // タグ用の新しいspan要素を作成し、テキストとスタイルを設定
      var span = $('<span>').text(tag).addClass('tag-style');
      // span要素をタグコンテナに追加
      $('#tags-container').append(span);
    });
  });
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()
