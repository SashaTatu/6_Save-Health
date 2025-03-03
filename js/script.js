console.log('Script connected');

const arrayOfAdvice = [
    "Дотримуйтесь режиму дня", "Пийте достатньо води", "Регулярні прогулянки", "Збалансоване харчування", "Захист від стресу", "Фізична активність", "Контролюйте вагу", "Обмежте цукор", "Розтяжка вранці", "Слідкуйте за поставою", "Періодичний відпочинок", "Вітаміни та мікроелементи", "Зменшіть споживання солі", "Детоксикація", "Сон не менше 7 годин", "Відмова від куріння", "Позитивне мислення", "Слідкуйте за гігієною", "Планові обстеження", "Виключіть алкоголь"
];
let countOfPills = 5;
console.log('countOfPills ' + countOfPills);

document.getElementById('count-of-pills').innerText = '💊'.repeat(countOfPills);

document.getElementById('btn_advice').addEventListener('click', () => {
    console.log('Button clicked');

    let index = Math.floor(Math.random() * arrayOfAdvice.length);

    //console.log('Номер елементу масиву - ', index);
    document.getElementById('p-advice').innerText = arrayOfAdvice[index];

    countOfPills--;
    console.log('countOfPills ' + countOfPills);
    document.getElementById('count-of-pills').innerText =
        '💊'.repeat(countOfPills) + '❌'.repeat(5 - countOfPills);

    let randomIMG = Math.floor(Math.random() * 13) + 1;
    console.log('randomIMG ' + randomIMG);
    document.getElementById('medical-img').src = `img/gallery/${randomIMG}.png`;
    document.getElementById('medical-img').alt = 'Heart for U';

    document.getElementById('medical-img').style.display = 'flex';

    if (countOfPills == 0) {
        document.getElementById('btn_advice').style.display = 'none';
        document.getElementById('count-of-pills').innerText =
            ' Придбайте нові сердечка💊';
    }
});

document.getElementById('count-of-pills').addEventListener('click', () => {
    if (countOfPills == 0) {
        alert('Придбати сердечка можна натиснувши кнопку "Купити💊"');
    }
});

document.getElementById('btn-buy-pills').addEventListener('click', () => {
    countOfPills = 5;
    document.getElementById('count-of-pills').innerText = '💊'.repeat(
        countOfPills
    );
    document.getElementById('btn_advice').style.display = 'inline-block';
    document.getElementById('p-advice').innerText = '';
    document.getElementById('medical-img').style.display = 'none';

    console.log('btn_buy-hearts clicked');
});
