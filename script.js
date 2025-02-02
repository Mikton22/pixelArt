let pixel = document.querySelectorAll('.pixel');
let chosenColor = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');

for (let px of pixel) {
    px.onclick = function() {
        if (eraser.checked) {
            px.style.backgroundColor = 'white';
        } else {
            px.style.backgroundColor = chosenColor.value;
        }
    }
};


/*
1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.
*/
