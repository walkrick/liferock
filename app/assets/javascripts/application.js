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


$(document).ready(function () {

  var time = 5000;
  var change = 100;


  $('#hide').click(function () {
    console.log('here');
    $('#newspaper').css('top', '350px');

    setTimeout(function() {$('#newspaper').css('top', '2000px');}, 5000)
  })

  $('#dance').click(function () {

    change = Math.floor((Math.random() * 500 ) + 10);
    $('#rock').css('top', 400 + change + 'px');
    $('#rock').css('left', 250 - change + 'px');

    for (var i = 1; i < 4; i++) {

      time = 5000 * i;

      window.setTimeout(function () {
        change = Math.floor((Math.random() * 500 ) + 10);

        console.log(change);

        $('#rock').css('top', 400 - change + 'px');
        $('#rock').css('left', 250 + change + 'px');

      }, time);

    }

    window.setTimeout(function () {

      console.log('here too');
      $('#rock').css('top', 400 + 'px');
      $('#rock').css('left', 250 + 'px')
    }, 20000);
  })


  $('#jump').click(function () {
    $('.flaming-school-bus').fadeIn(1000);

    $('#rock').css('top', '0px');
    $('#rock').css('left', '650px');

    setTimeout(function () {
      $('#rock').css('top', '450px');
      $('#rock').css('left', '1250px');
    }, 5000);

    setTimeout(function () {
      $('#rock').css('top', '0px');
      $('#rock').css('left', '650px');
    }, 10000);

    setTimeout(function () {
      $('#rock').css('top', '400px');
      $('#rock').css('left', '250px');
    }, 15000);

    setTimeout(function () {
      $('.flaming-school-bus').fadeOut(1000);
    }, 19000);
  });
});

