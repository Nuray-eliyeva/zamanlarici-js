// Zamanlayıcı
let time = 1500; // 25 dakika
let timer;

document.getElementById('start').addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval(function() {
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        document.getElementById('time').textContent = minutes + ":" + seconds;
        if (time <= 0) {
            clearInterval(timer);
            alert("Süre doldu!");
        }
    }, 1000);
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    time = 1500;
    document.getElementById('time').textContent = "25:00";
});

// Yapılacaklar Listesi
document.getElementById('addTask').addEventListener('click', function() {
    let task = document.getElementById('taskInput').value;
    if (task) {
        let li = document.createElement('li');
        li.textContent = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Sil";
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = "";
    }
});