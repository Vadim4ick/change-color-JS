/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

const colorsSelector = document.getElementById("colorsSelector");
const colorItems = document.querySelectorAll(".colorItem");
const img = document.getElementById("img");

colorItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    const activeBtn = document.querySelector(".colorItem--active");
    activeBtn.classList.remove("colorItem--active");

    e.target.classList.add("colorItem--active");

    const fileName = e.target.dataset.file;
    img.src = `https://webcademy.ru/files/js2020/solaris/${fileName}`;
  });
});
