var minutes = 0;
  var seconds = 0;
  var timerInterval;

  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    updateTimer();
  }

  function updateTimer() {
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    seconds++;
    var formattedMinutes = padZero(minutes);
    var formattedSeconds = padZero(seconds);
    document.getElementById('timer').textContent = formattedMinutes + ':' + formattedSeconds;
  }

  function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }

  function addtask(){
    var task = document.getElementById('task').value;
    var ul = document.getElementById('tasklist');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
  }