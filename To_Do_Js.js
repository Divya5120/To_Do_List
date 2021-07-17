const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container'); 
// var selectedValue = document.getElementById("priority").value;
// console.log('value',selectedValue);

class item{
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName){

        var selectedValue = document.getElementById("priority").value;
        console.log('value',selectedValue);
        // input tag creation in JS

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = 'text';

        //select tag creation
        let select = document.createElement('div');
        select.classList.add('selectCircle');
        select.innerHTML = selectedValue;
        
        //creating div element
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        itemBox.className +=" "+ selectedValue;

        let itemBox2 = document.createElement('div');
        itemBox2.classList.add('itemBox');
        
        console.log('select', itemBox);

        container.appendChild(itemBox);
        itemBox.appendChild(itemBox2);
        itemBox2.appendChild(input);
        itemBox2.appendChild(select);

    }
}
 

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
        3

// actions filtering

function lowFunction(){
    let medium = document.getElementsByClassName("medium");
    let high = document.getElementsByClassName("high");
    let low = document.getElementsByClassName("low");
    for(var i = 0; i < medium.length; i++){
		medium[i].style.display = "none";
	}
    for(var i = 0; i < high.length; i++){
		high[i].style.display = "none";
	}

    for(var i = 0; i < low.length; i++){
		low[i].style.display = "block";
	}
    
};
function mediumFunction(){
    let low = document.getElementsByClassName("low");
    let high = document.getElementsByClassName("high");
    let medium = document.getElementsByClassName("medium");
    for(var i = 0; i < low.length; i++){
		low[i].style.display = "none";
	}
    for(var i = 0; i < high.length; i++){
		high[i].style.display = "none";
	}
    for(var i = 0; i < medium.length; i++){
		medium[i].style.display = "block";
	}
};
function highFunction(){
    let medium = document.getElementsByClassName("medium");
    let low = document.getElementsByClassName("low");
    let high = document.getElementsByClassName("high");
    for(var i = 0; i < medium.length; i++){
		medium[i].style.display = "none";
	}
    for(var i = 0; i < low.length; i++){
		low[i].style.display = "none";
	}
    for(var i = 0; i < high.length; i++){
		high[i].style.display = "block";
	}
};

function allFunction(){
    let medium = document.getElementsByClassName("medium");
    let low = document.getElementsByClassName("low");
    let high = document.getElementsByClassName("high");
    for(var i = 0; i < medium.length; i++){
		medium[i].style.display = "block";
	}
    for(var i = 0; i < low.length; i++){
		low[i].style.display = "block";
	}
    for(var i = 0; i < high.length; i++){
		high[i].style.display = "block";
	}
    document.body.style.backgroundColor= "black";
};

//scrolling
var objDiv = document.getElementsByClassName("todoListContaine");
objDiv.scrollTop = objDiv.scrollTopMax;
