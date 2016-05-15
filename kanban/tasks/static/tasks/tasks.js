var $tasks = $('#tasks');

$.ajaxSetup({
  headers: {'Authorization': btoa('oakes:memphis345') }
})

// $.ajaxSetup({
//      beforeSend: function(xhr, settings) {
//          function getCookie(name) {
//              var cookieValue = null;
//              if (document.cookie && document.cookie != '') {
//                  var cookies = document.cookie.split(';');
//                  for (var i = 0; i < cookies.length; i++) {
//                      var cookie = jQuery.trim(cookies[i]);
//                      // Does this cookie string begin with the name we want?
//                      if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                          break;
//                      }
//                  }
//              }
//              return cookieValue;
//          }
//          if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
//              // Only send the token to relative URLs i.e. locally.
//              xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
//          }
//      }
// });

$.get('/api/tasks/', function(tasks){
  tasks.results.forEach(function(tasks) {
    console.log(tasks)
    var $li = $('<li>');
    $li.text(tasks.title)
    $li.appendTo($tasks);
  })
})


// var $task = $('#task');
//
// $.get('/api/tasks/1', function(task){
//   console.log(task);
//   $task.text(task.title)
// });

var $addTask = $('#addTask');
var $task = $('input[task="task"]');
var $notes = $('input[task="notes"]');
var $status = $('input[task="status"]');
var $priority = $('input[task="priority"]');


$addTask.submit(function() {
  console.log('You added a fresh task');

  $.ajax({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/tasks/',
    // csrfmiddlewaretoken: '{{ csrf_token }}',
    username: 'oakes',
    password: 'memphis345',
    data: {
      csrfmiddlewaretoken: '{{ csrf_token }}',
      task: $task.val(),
      notes: $notes.val(),
      status: $status.val(),
      priority: $priority.val(),
    }
  });

  return false;
})

// Hardcoded attempt at adding task

// $addTask.submit(function() {
//   console.log('You added a fresh task');
//
//   $.ajax({
//     method: 'post',
//     url: 'http://127.0.0.1:8000/api/tasks/',
//     username: 'oakes',
//     password: 'memphis345',
//     data: {
//       task: 'Clean',
//       notes: 'Clean well',
//       status: 1,
//       priority: 1,
//     }
//   });
//
//   return false;
// })
