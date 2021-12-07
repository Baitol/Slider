let index = 0;// індекс слайда
let imgList = document.getElementsByClassName("item");// список слайдів
let dotsList = document.querySelectorAll(".dot");// список дотів
let nextBtn = document.getElementById("next");// кнопка вперед
let prevBtn = document.getElementById("prev");// кнопка назад
let infInterval = 1000 * 4.5// інтервал зміни слайду



let infinity = setInterval(slideRotation,infInterval);// постйне повторення слайдера

// Перебираю список дотів 
dotsList.forEach((element, dotIndex) => {
    //Чіпляю на них подію
    element.addEventListener("click", () =>{
        // індекс слайда тепер дорівнює індексу дота в таблиці
        index = dotIndex;
        // зупинити постійну прокрутку слайда
        clearInterval(infinity)
        // Функція яка робив активний слайд видимим
        ShowSlideBlock(index);
        // Запускає автопрокрутку слайдера через 6 секунд 
        // після нажаття на елемент
        setTimeout(()=>{
            // Чистимо автопрокрутку
            clearInterval(infinity)
            // Запускаємо знову автопрокрутку
            infinity = setInterval(slideRotation,infInterval);
        },6000);
    })
});

// Функція робить потрібний слайд активним
const ShowSLide = (n) => {
    // Перебираємо список слайдів
    for (img of imgList) {
        // Всіх ставимо неактивними
        img.classList.remove("active");
    }
    // Потрібний слайд робимо активним
    imgList[n].classList.add("active");
}
// Функція робить потрібний дот активним
const ShowDots = (n) => {
    // Перебираємо список дотів
    for (dot of dotsList) {
        // Всіх ставимо неактивними
        dot.classList.remove("active");
    }
    // Потрібний дот робимо активним
    dotsList[n].classList.add("active");
}

// Функція для кнопки слайду вперед
const NextSlide = () => {
    // зупинити постійну прокрутку слайда
    clearInterval(infinity)
    // Якщо індекс слайда дорівнює номреу останнього слайда в списку
    if(index == imgList.length-1){
        // Робимо цей індекс 0-вим елементом списку
        index = 0;
        // Запускаємо функцію відображення необдхідного слайда  і дота
        ShowSlideBlock(index);
    }
    // в іншому випадку
    else{
        // інкрементуємо індекс слайда
        index++;
        // Запускаємо функцію відображення необдхідного слайда і дота
        ShowSlideBlock(index);
    }
    // Запускає автопрокрутку слайдера через 6 секунд 
    // після нажаття на елемент
    setTimeout(()=>{
        clearInterval(infinity)
        infinity = setInterval(slideRotation,infInterval);
    },6000);
}
const PrevSlide = () => {
    clearInterval(infinity)
    // Якщо індекс слайда дорівнює 0
    if(index == 0){
        // Робимо цей індекс останнім елементом списку
        index = imgList.length-1;
        // Запускаємо функцію відображення необдхідного слайда і дота
        ShowSlideBlock(index);
    }
    // в іншому випадку
    else{
        // декрементуємо індекс слайда
        index--;
        // Запускаємо функцію відображення необдхідного слайда і дота
        ShowSlideBlock(index);
    }
    // Запускає автопрокрутку слайдера через 6 секунд 
    // після нажаття на елемент
    setTimeout(()=>{
        clearInterval(infinity)
        infinity = setInterval(slideRotation,infInterval);
    },6000);
}

// ФУнкція для одночасного відображення слайда і потрібної доти
const ShowSlideBlock = (n) =>{
    ShowSLide(n);
    ShowDots(n);
}

// Чіпляю на кнопки події
nextBtn.addEventListener('click', NextSlide)
prevBtn.addEventListener('click', PrevSlide)

//Фунція для автоматичної прокрутки слайдера
function slideRotation() {
    index++
    if (index >=imgList.length) {
        index = 0;
    }
    ShowSlideBlock(index);
    
    console.log(index);
}
















































// function nextSlide() {
//     if (slideIndex == dotsList.length-1) {
//         slideIndex = dotsList.length-1
//         ShowSlideBlock(slideIndex)
//     }else{
//         ShowSlideBlock(slideIndex++)
//     }
//     console.log("nextSlide")

// }
// function prevSlide(n){
//     if (slideIndex == 1) {
//         slideIndex = 1
//     }else{
//         ShowSlideBlock(slideIndex--)
//     }
//     console.log("prevSlide")
// }

// function showSlide(n) {
//     for (let slide of imgList) {
//         slide.style.display = "none";
//     }
//     imgList[slideIndex - 1].style.display = "block";
// }

// function showDot(n) {
//     for (let dot of dotsList) {
//         dot.style.background = "black";
//     }
//     dotsList[slideIndex - 1].style.background = "rgb(189, 78, 78)"; 
// }

// function ShowSlideBlock(n){
//     showDot(n)
//     showSlide(n)
// }