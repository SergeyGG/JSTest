//запуск приложения
window.onload = init;
function init(){
	var findButton = document.getElementById("find-num"); //получаем ссылку на кнопку
	findButton.onclick = handleButton;
}

function handleButton(){
	var numInput = document.getElementById("given-num");
	var find = numInput.value;
	table(find);
	numInput.value = " ";
}

function table(find){
	var findNum = parseInt(find);//получаем строку из формы и преобразуем ее в число
	//переменные для формирования строки вывода 
	var myHTML = '';
    var template = "<tr class='about-city'><td>#number#</td><td>#cityName#</td><td>#peopleNum#</td></tr>";
    var temporaryString = '';

    //проверка данных на ввод числа и на null
	if (isNaN(findNum) || find===null){
		alert("Ошибка ввода id пользователя!");
	} else {

		city.sort(function(obj1, obj2) {
    		return obj2.people-obj1.people;
 		});

		for(var i=0; i<findNum; i++){
			var k = i+1;
			temporaryString = template;
        	temporaryString = temporaryString.replace('#number#', k);
        	temporaryString = temporaryString.replace('#cityName#', city[i].name);
			temporaryString = temporaryString.replace('#peopleNum#', city[i].people);
			myHTML = myHTML + temporaryString;
		}

		//вывод статистики
	    var myTableElement = document.getElementById('cities');
	    var myTableBody = myTableElement.getElementsByTagName('tbody')[0];
	    myTableBody.innerHTML = myHTML;
	} 
}

