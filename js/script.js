console.log('Script connected');

const arrayOfAdvice = [
    "Дотримуйтесь режиму дня", "Пийте достатньо води", "Здійснюйте регулярні прогулянки", "Зберігайте збалансоване харчування", "Захистіться від стресу", "Не нехтуйте фізичною активністю", "Контролюйте вагу", "Обмежте цукор", "Виконуйте розтяжку вранці", "Слідкуйте за поставою", "Періодично відпочивайте", "Приймайте вітаміни та мікроелементи", "Зменшіть споживання солі", "Детоксикація", "Спіть не менше 7 годин", "Відмовтесь від куріння", "Мисліть позитивно", "Слідкуйте за гігієною", "Відвідуйте планові обстеження", "Виключіть алкоголь"
];
let countOfPills = 5;
console.log('countOfPills ' + countOfPills);

let showAlert = 1;

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
        document.getElementById("btn_advice").disabled = true;
        document.getElementById("btn_advice").style.background = 'grey';
        document.getElementById("btn_advice").style.border = '5px solid grey';
        document.getElementById("btn_advice").style.cursor = 'not-allowed';
        if (showAlert){
            alert('Придбати пігулки можна натиснувши кнопку "Купити💊"');
            showAlert=0
        }
    
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
    document.getElementById("btn_advice").disabled = false;
    document.getElementById("btn_advice").style.background = 'linear-gradient(90deg, #72d3ef, #4aa9c2)';
    document.getElementById("btn_advice").style.border = '5px solid rgba(54, 133, 158, 0.8)';
    document.getElementById("btn_advice").style.cursor = 'pointer';
    

    console.log('btn_buy-hearts clicked');
});

let number=Math.floor(1)
console.log('number '+number)
document.getElementById('btn_right_arrow').addEventListener('click', () => {
    console.log('Right arrow clicked');

    number++
     if (number>3) {
        number=1
    }
    document.getElementById('doctor-img').src = `img/pictures-gallery/${number}.jpg`;
    document.getElementById('doctor-img').alt = 'Doctors';
 })   
   

document.getElementById('btn_left_arrow').addEventListener('click', () => {
    console.log('Left arrow clicked');

    number--
    if (number <= 0) {  
        number = 3;
    }
    document.getElementById('doctor-img').src = `img/pictures-gallery/${number}.jpg`;
    document.getElementById('doctor-img').alt = 'Doctors';
    
    
})