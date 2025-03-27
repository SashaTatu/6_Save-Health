console.log('Script connected');

const Questions = [
    {
        question: '1. Коли вам найкраще працюється або вчиться?',
        answers: [
            'Вранці, поки голова свіжа',
            'Після обіду, ближче до вечора',
            'Увечері або вночі',
            'В будь-який час, якщо добре виспався/лася',
        ],
    },
    {
        question: '2. Як ви прокидаєтеся без будильника?',
        answers: [
            'Дуже рано, навіть коли лягав/ла пізно',
            'Ближче до обіду, якщо немає справ',
            'Пізно ввечері, якщо давали можливість спати стільки, скільки хочеться',
            'Залежить від того, наскільки стомився/лася за день.',
        ],
    },
    {
        question: '3. Як почуваєтесь вранці після пробудження?',
        answers: [
            'Бадьорий/а, готовий/а до справ',
            'Сонний/а, але через годину приходжу в норму',
            'Жахливо, ненавиджу ранки',
            'По-різному, залежить від ситуації',
        ],
    },
    {
        question: '4. Коли у вас найвищий рівень енергії?',
        answers: [
            'Вранці, одразу після пробудження',
            'В обідній час',
            'Пізно ввечері або навіть вночі',
            'В різний час, немає чіткої закономірності',
        ],
    },
    {
        question: '5. Що для вас комфортніше: рано вставати чи пізно лягати?',
        answers: [
            'Рано вставати, люблю ранки',
            'Вставати не дуже рано, але не дуже пізно',
            'Пізно лягати, бо вечір - мій час',
            'По ситуації, можу і так, і так',
        ],
    }
];



let numberOfQuestion = 0;
console.log('Question = ' + numberOfQuestion);

let radios = document.querySelectorAll('input[type="radio"]');
let continueBtn = document.getElementById('continue_btn');


function submitTest() {
    let answers = {}; // Об'єкт для підрахунку виборів
    let questions = document.querySelectorAll(".answer"); // Отримуємо всі питання
    let totalQuestions = Questions.length; // Кількість питань
    let answeredCount = 0; // Лічильник відповідей

    console.log("lf = "+questions)
    console.log("ls = "+totalQuestions)

    questions.forEach((question, index) => {
        let selected = document.querySelector(`input[name='answer${index}']:checked`);
        if (selected) {
            answeredCount++; // Лічимо, скільки відповідей вибрано
            let value = selected.value;
            answers[value] = (answers[value] || 0) + 1;
        }
    });

    let maxChoice = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));
    
    if (maxChoice === "A"){
        document.getElementById('name-result').innerText='Ви - Жайворонок🦜'
        document.getElementById('info-result').innerText='Ви активні вранці, швидко прокидаєтесь і любите починати справи зранку. Вечірня продуктивність знижується.'
    }
    if (maxChoice === "C"){
        document.getElementById('name-result').innerText='Ви - Сова🦉'
        document.getElementById('info-result').innerText='Найбільший пік активності – у вечірній та нічний час. Вранці прокидатися важко, а в першій половині дня ви ще сонний/а.'
    }
    if (maxChoice === "B"){
        document.getElementById('name-result').innerText='Ви - Голуб🕊'
        document.getElementById('info-result').innerText='Ваш хронотип змішаний, ви можете працювати і вранці, і ввечері, але найбільше енергії маєте вдень.'
    }
    if (maxChoice === "D"){
        document.getElementById('name-result').innerText='Ви - Змішаний тип🔄'
        document.getElementById('info-result').innerText='Ви адаптуєтесь під обставини, ваш ритм життя гнучкий, і ви можете ефективно працювати у будь-який час.'
    }
}

function checkSelection() {
    let radios = document.querySelectorAll("input[name='answer']");
    let isDisabled = ![...radios].some(radio => radio.checked);
    let continueBtn = document.getElementById('continue_btn');

    continueBtn.disabled = isDisabled;
    continueBtn.style.background = isDisabled ? 'grey' : 'linear-gradient(90deg, #2fbd1c, #19b604)';
    continueBtn.style.border = isDisabled ? '1px solid grey' : '1px solid white';
    continueBtn.style.cursor = isDisabled ? 'not-allowed' : 'pointer';
}

document.querySelectorAll("input[name='answer']").forEach(radio => {
    radio.addEventListener("change", checkSelection);
});

checkSelection();

document.getElementById('continue_btn').addEventListener('click', () => {
    numberOfQuestion++;
    checkSelection();

    console.log('Question = ' + numberOfQuestion);

    if (numberOfQuestion == 4) {
        document.getElementById('continue_btn').innerText = 'Завершити тест';
    }

    if (numberOfQuestion == 5) {
        document.getElementById('question').innerText = "Ваш результат:";
        document.getElementById('continue_btn').style.display = 'none';
        document.querySelectorAll('.radio_btn').forEach(el => el.style.display = 'none');
        document.getElementById('redo-test_btn').style.display = 'inline';
        document.querySelectorAll('.site-footer').forEach(el => el.style.justifyContent = 'space-around');
        document.querySelectorAll('.result').forEach(el => el.style.display = 'flex');
        submitTest()
        return;
    }

    if (numberOfQuestion < Questions.length) {
        document.getElementById('question').innerText = Questions[numberOfQuestion].question;
        let labels = document.querySelectorAll('label.radio_btn');

        Questions[numberOfQuestion].answers.forEach((answer, index) => {
            if (labels[index]) {
                labels[index].innerText = answer;
            }
        });
    }
});


function resetSelection() {
    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
        radio.checked = false;
    });
}
