// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*
window.onscroll = function () {
  myFunction()
};
var x = 0;
function myFunction()
{
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
  {
    x = document.documentElement.scrollTop;
    var imgHeight = 100;
    if(100-x > 49)
    {
      document.getElementById("nav").style.height = 100 - x + 'px';
      document.getElementById("nav").style.lineHeight = 100 - x + 'px';
      document.getElementById("header-logo").style.height = 100 - x + 'px';
    }
  }
  else
  {
      x = document.documentElement.scrollTop;
      document.getElementById("nav").style.lineHeight = "100px";
      document.getElementById("nav").style.height = "100px";
      document.getElementById("header-logo").style.height = "100px";
  }
}
*/
