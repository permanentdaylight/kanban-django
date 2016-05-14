var $tasks = $('#tasks');

$.get('/api/tasks/', function(tasks){
  tasks.results.forEach(function(tasks) {
    console.log(tasks)
    var $li = $('<li>');
    $li.text(tasks.title)
    $li.appendTo($tasks);
  })
})

var $task = $('#task');

$.get('/api/tasks/1', function(task){
  console.log(task);
  $task.text(task.title)
});

var $addTask = $('#addTask');

$addTask.submit(function() {
  console.log('You added a fresh task');

  $.ajax({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/tasks/',
    username: 'oakes',
    password: 'memphis345',
    data: {
      task: 'Clean',
      notes: 'Clean well',
      status: 1,
      priority: 1,
    }
  });




  return false;
})
