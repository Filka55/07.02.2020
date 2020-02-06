//Task2
// for (var i = 0; i < 10; i++) {
// 	if(i % 2 == 0) {
//     console.log(i*i);
//   }
// }

//Task3
// var k = '.';
// for (var i = 1; i = 10; i++) {
// 	if(i % 2 == 1) {
//     k = k + '#';
//   }
// 	else{
// 		k = k + '.';
// 	}
// }
// document.write(k);

//Task4
// var conf = false;
// while (conf == false){
// 	conf = confirm();
// }


//Task5
// var k = 1;
// for(var i = Math.random(); i < 0.99; ) {
//   k = k + 1;
//   i = Math.random();
// }
// alert ('количество операций' + k + 'число, прервавшее цикл' + i);

//Task6
// var width = +prompt('Количество символов в строке');
// var height = +prompt('Высота строки');
// var picture = '';
// for (var i = 1; i != height; i++) {
//   for( var k = 0; k != width; k++){
//     if(k % 2  == 0){
//       picture = picture + '#';
//     }
//     else{
//       picture = picture + '.';
//     }
//   }
//   picture = picture + `\n`;
//   for( var j = 0; j != width; j++){
//     if(j % 2  == 0){
//       picture = picture + '.';
//     }
//     else{
//       picture = picture + '#';
//     }
//   }
//   picture = picture + `\n`;
// }
// alert(picture);


//Task7
// var i = 0;
// var k = 1;
// var m = 0;
// for (;;) {
//   console.log(i);
//   m = i;
// 	i = i + k;
//   k = m;
// 	if (i >1000) break;
// }

//Task8
// var k = 0;
// var i = 0;
// for (;;i++){
//   k = +prompt();
//   if(k == false) break;
//   m = k + k;
// }
// alert('Количество введеных чисел ' + i  + '\n'+ 'Сумма введеных чисел '+ m + '\n' + 'Среднее арифметическое введеных чисел ' + '\n' + m/i);

//Task9
// for (let i = 0; i < 10; i++) {
// 	for (let j = 0; j < 10; j++) { //i изменено на j
//     console.log(i + j);
//     	}
//     }

//Task10
// $("#root table").css({"width":"80%","margin":"0 auto", "border-collapse":"collapse"});
// $("#root td").css({"width":"10px", "height":"10px", "background-color":"#eee", "border":"1px solid #000"});
// $("#root tr").slice(0,6).addClass("bgc1_6");
// $("tr.bgc1_6 td").css("background-color","#106B63");
// $("#root tr").slice(6,9).addClass("bgc7_9");
// $("tr.bgc7_9 td").css("background-color","#E7C610");
//
// $("#root tr").slice(9,12).addClass("bgc10_12");
// $("tr.bgc10_12 td").css("background-color","#C64A08");
//
// $("#root tr").slice(12,15).addClass("bgc13_15");
// $("tr.bgc13_15 td").css("background-color","#B43100");
//
// $("#root tr").slice(15,19).addClass("bgc16_19");
// $("tr.bgc16_19 td").css("background-color","#102173");
//
// $("td.none").css({"background-color":"none", "border":"none"});

//Task11
var width = 11;
var picture = '';
for (var i = 1; i <= width; i = i + 2) {

  var m = i;
  for(var k = (11-m); k > ((11-m)/2); k--){
    picture = picture + '.';
  }
  for(var j = 1; j <= i; j++){
    picture = picture + '#';
  }
  for(var k = (11-m); k > ((11-m)/2); k--){
    picture = picture + '.';
  }
  picture = picture + `\n`;

}

console.log(picture);
