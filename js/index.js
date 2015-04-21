/* globals $ */

$(document).ready(function(){
  $('.img-responsive')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});