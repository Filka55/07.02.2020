// Task 1
/*Создайте объект person, описывающий персону, с произвольным количеством
произвольных полей. С помощью оператора in или typeof проверьте наличие в
объекте свойства, прочитанного из prompt, и выведите его на экран. Если
свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.*/

let persone = {};

while (true){
let characteristic = prompt('Сharacteristic', '');
if (characteristic === null){
  break;
}
let value = prompt('Value', '');
  persone[characteristic] = value;

}

if (persone.lastname == undefined){
  persone['lastname'] = ' meaning had not been defined';
}

//Task2
/*Сгенерируйте объект, описывающий модель телефона, заполнив все свойства
значениями, прочитанными из prompt (например: brand, model, resolution, color...),
не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее. */

var phone = {
  brand: 'Meizu',
  model: 'M6',
  resolution: '5.5',
  color: 'gold',
}
  persone['phone'] = phone;

//Task3
/*Запустите бесконечный цикл. В цикле вызывайте prompt,
в котором пишется либо delete, либо update. В зависимости
от указанного действия, удаляйте или добавляйте (редактируйте)
свойство в объекте персоны (которая уже имеет телефон).
Какое именно свойство удалять или добавлять - также читается
из prompt. Какое значение будет у добавленного свойства - тоже
берется из prompt. При нажатии на Отмена при появлении prompt
редактирование person заканчивается. И обновленные данные распечатываются
в консоли.*/
while (true){
let characteristic = prompt('Сharacteristic for adding', '');
if (characteristic === null){
  break;
}
let value = prompt('Value', '');
  persone[characteristic] = value;

}
JSON.stringify(persone);
while (true){

  let characteristicDelete = prompt('Сharacteristic for deleting', '');

  if (characteristicDelete === null){
    break;
  }

for(var key in persone)
    if (key == characteristicDelete){
   delete persone[characteristicDelete];
   }
  }


  console.log(persone);

// Task4
let container = document.querySelector('.container');
let dl = document.createElement('dl');
container.appendChild(dl);

for(let key in persone){

    let dt = document.createElement('dt');
    dt.innerText = key;

    let dd = document.createElement('dd');
    dd.innerText = persone[key];

    dl.appendChild(dt);
    dl.appendChild(dd);

  }



//Task5
/*Создайте объект dates для хранения дат. Первая дата – позавчера.
Вторая дата – текущая дата (new Date) минус 365 дней.
Из prompt читается дата в формате yyyy-MM-dd. Проверьте,
попадает ли введенная дата в диапазон дат объекта dates.*/
//
// let test = new Date(prompt('Enter a date YYYY-MM-DD'));
// let today = new Date();
// let dates = {
//   yesterday: (today - 86400000),
//   lastYear: (today - 86400000*365),
// }
// let yesterday = dates['yesterday'];
// let lastYear = dates['lastYear'];
// if (test<yesterday && test>lastYear){
//   console.log(test);
// };




//Task6
/*Создайте структуру данных, полностью описывающую html-разметку картинки.
С помощью методов браузера добавьте ее на страницу со всеми атрибутами,
читая значения свойств из созданного объекта.*/

// let image = document.createElement('img');
// let container = document.querySelector('.container');
// container.appendChild(image);
//
// var src = "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif"
// var alt = "";
// var style = "border: 1px solid #ccc";
// var width = 200;
//
// image.setAttribute('src', src);
// image.setAttribute('alt', alt);
// image.setAttribute('style', style);
// image.setAttribute('width', width);
