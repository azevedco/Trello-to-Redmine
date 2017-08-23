// key=
// $.ajax({
//     url: 'http://135.23.35.134:8099/redmine/issues.json',
//     type: 'GET',
//     data: 'key=', // or $('#myform').serializeArray()
//     success: function() { alert('GET completed'); },
//     failure: function() { alert('GET failed'); }
// });

// $.ajax({ 
//     type: 'GET', 
//     url: 'http://135.23.35.134:8099/redmine/issues', 
//     data: 'key=', 
//     dataType: 'json',
//     success: function (data) { 
//         $.each(data, function(index, element) {
//             $('body').append($('<div>', {
//                 text: element.name
//             }));
//         });
//     }
// });

var userName = "";
var passWord = "";
var redmineKey = "";
var url = "135.23.35.134:8099/redmine/issues.json?key=3edf27544b0dc1a88edc6dd6da00245dc05ca0b5";
var status = {
  success: function() {
    alert("It fucking worked.");
  },
  notmodified: function() {
    alert("It wasn't fucking modified.");
  },
  error: function() {
    alert("There was a fucking Error.");
  },
  timeout: function() {
    alert("It fucking timed out.");
  },
  parsererror: function() {
    alert("There was a fucking parse error.");
  }
}

$(document).ready(function(){
  // Syntax
  // $.get(URL,data,function(data,status,xhr),dataType)
  
  //$("button").click(function(){
      //$("h1").toggle();
  //});
  
  $("#redminelogin").click(function(){
      
    redmineKey = $("#redminekey");
    alert("still works key " + redmineKey);
    
    $.getJSON(url, function(result){
        $.each(result, function(i, field){
            $("#test1").append(field + " ");
        });
    });
    
  });
  
  // $("#redminelogin").click(function() {
  //   userName = $("#username");
  //   passWord = $("#password");
  //   $("#test1").text(userName);
  // });
  
  // $.ajax({
  //   url: '135.23.35.134:8099/redmine/issues.xml?key=',
  //   type: 'GET',
  //   data: 'key=', // or $('#myform').serializeArray()
  //   success: function() { alert('GET completed'); }
  // });

});

