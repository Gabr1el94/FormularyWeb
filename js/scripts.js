var HTMLheaderName = "<h1> %data% </h1>";
var HTMLheaderRole = "<span>%data%</span><hr>";
var name ="Gabriel Soares";
var role ="Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%",role); 

var formattedName = HTMLheaderName.replace("%data%",name);

$(document).ready(function(){

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

});