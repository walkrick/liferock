// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



  $('#dance').click(function () {
    console.log('here');

    var change = 100;
    $('#rock').css('top', 300 - change + 'px');
    $('#rock').css('left', 250 - change + 'px');

    for (var i = 0; i < 3; i++) {

      var time = 5000 * i;

      window.setTimeout(function () {
        change = Math.floor((Math.random() * 100 ) + 10);

        console.log(change);

        $('#rock').css('top', 300 - change + 'px');
        $('#rock').css('left', 250 + change + 'px');

      }, time);

    }

    console.log('here');

    window.setTimeout(function () {

      console.log('here too');
      $('#rock').css('top', 300 + 'px');
      $('#rock').css('left', 250 + 'px')
    }, 20000);
  });