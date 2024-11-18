document.getElementById('patrol-section-btn').addEventListener('click', () => {
    document.getElementById('patrol-section').style.display = 'block';
    document.getElementById('watch-section').style.display = 'none';
});

document.getElementById('watch-section-btn').addEventListener('click', () => {
    document.getElementById('patrol-section').style.display = 'none';
    document.getElementById('watch-section').style.display = 'block';
});

// Обработка выбора нарушителей для патруля
document.getElementById('violators-none-btn').addEventListener('click', () => {
    document.getElementById('violators-input').style.display = 'none';
    document.getElementById('violators-input').value = '';
});

document.getElementById('violators-exist-btn').addEventListener('click', () => {
    document.getElementById('violators-input').style.display = 'block';
});

// Обработка выбора нарушителей для дозора
document.getElementById('watch-violators-none-btn').addEventListener('click', () => {
    document.getElementById('watch-violators-input').style.display = 'none';
    document.getElementById('watch-violators-input').value = '';
});

document.getElementById('watch-violators-exist-btn').addEventListener('click', () => {
    document.getElementById('watch-violators-input').style.display = 'block';
});

// Логика для составления отчётов патруля и дозора
document.getElementById('create-patrol-report-btn').addEventListener('click', () => {
    const date = new Date().toLocaleDateString('ru-RU');
    const patrolType = document.getElementById('patrol-type').value;
    const violators = document.getElementById('violators-input').value.trim();
    const violatorsText = violators ? violators : '—';

    const report = `[code][b]${date}[/b][/code]\n` +
                   `[code][i]${patrolType}[/i][/code]\n` +
                   `[1-2] Вёл/вела: ИМЯВЕДУЩЕГО. Участники: Имена.\n` +
                   `Нарушители: ${violatorsText}`;

    document.getElementById('patrol-report-output').innerText = report;
});

document.getElementById('create-watch-report-btn').addEventListener('click', () => {
    const date = new Date().toLocaleDateString('ru-RU');
    const time = document.getElementById('watch-time-input').value.trim();
    const participants = document.getElementById('watch-participants-input').value.trim();
    const violators = document.getElementById('watch-violators-input').value.trim();
    const violatorsText = violators ? violators : '—';

    const report = `[code][i]${date}[/i][/code]\n` +
                   `[code][u]Пассивный дозор[/u][/code]\n` +
                   `[code][b]${time}[/b][/code]\n` +
                   `Дежурили: ${participants}.\n` +
                   `Нарушители: ${violatorsText}`;

    document.getElementById('watch-report-output').innerText = report;
});