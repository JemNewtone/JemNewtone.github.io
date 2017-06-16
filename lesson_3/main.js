// let clicker = function(){
//   alert('sdfsdfsdf');
// }



// let btns = document.getElementsByTagName("button");
// let btns = document.getElementsByClassName('btn');
// let btn = document.getElementById('btn1');
// btn.onclick = function(){
//   console.log( '111' );
// }
// btn.onclick = function(){
//   console.log( '2222' );
// }
// btn.addEventListener('click', function(){
//   console.log('111');
// })
// btn.addEventListener('click', function(){
//   console.log('222');
// })

// btn2.addEventListener('click', function(){
//   console.log('222');
// })

// let firstBtn = document.querySelector('.btn');
// let btns = document.querySelectorAll('.btn');
// console.log( btns );


// let clicker = function( e ){
//   console.log( e );
// }
//
// btn3.addEventListener('click', clicker);

// "#" + r.toString(16) + g.toString(16) + 

(function(){

  let color, colorRGG, RChanel, GChanel, BChanel, chosenElementId, width, height, figure, left, top;
  let create = false;
  let elementCounter = 0;
  let elementsLimit = +setElementsLimit.value;


  let hexToRGB = function (hex) {
        RChanel = parseInt(hex.slice(1, 3), 16);
        GChanel = parseInt(hex.slice(3, 5), 16);
        BChanel = parseInt(hex.slice(5, 7), 16);
        return `${RChanel},${GChanel},${BChanel}`;
  }


  let RGBToHex = function (r, g, b) {
    color = "#";
    if (r > 15) {color += r.toString(16);}
    else {color += "0" + r.toString(16);}
    if (g > 15) {color += g.toString(16);}
    else {color += "0" + g.toString(16);}
    if (b > 15) {color += b.toString(16);}
    else {color += "0" + b.toString(16);}
    return color;
  }


   // обновить конвертировать и синхронизировать значение цвета
  let updateColor = function () {
    if (+rChanel.value < 0) {rChanel.value = 0;}
    if (+gChanel.value < 0) {gChanel.value = 0;}
    if (+bChanel.value < 0) {bChanel.value = 0;}
    if (+rChanel.value > 255) {rChanel.value = 255;}
    if (+gChanel.value > 255) {gChanel.value = 255;}
    if (+bChanel.value > 255) {bChanel.value = 255;}
    RChanel = +rChanel.value;
    GChanel = +gChanel.value;
    BChanel = +bChanel.value;
    newColor.value = RGBToHex(RChanel, GChanel, BChanel);
    showColorValue.innerHTML = `HEX: ${color}, RGB: ${RChanel},${GChanel},${BChanel}`;
    
  }

  // обновить лимит элементов 

  let updateElementsLimit = function () {
    elementsLimit = +setElementsLimit.value;
  }

  // очистить поле от элементов и сбросить поле инфо элемента

  let setAreaClear = function () {
    area.innerHTML = "";
    elementCounter = 0;
    detailsText.innerText = 'Choose again';
    details.style.backgroundColor = "white";

  }

  // отменить создание последнего элемента 

  let UndoCreating = function () {

    if (elementCounter > 0) {
      document.getElementById(elementCounter).remove();
      --elementCounter;
      if (chosenElementId == elementCounter + 1) {
          detailsText.innerText = 'Choose again';
          details.style.backgroundColor = "white";
      }
    }
    
    
  }

  // обновить выделеный элемент по данным из поля инфо элемента   (из инпутов)

  let updateElement = function () {
    if (detailsText.innerText != 'CHOOSE ELEMENT' && detailsText.innerText != 'CHOOSE AGAIN') {

      let updatingElemetn = document.getElementById(chosenElementId);
      if (parseInt(changeHeight.value) && parseInt(changeWidth.value)) {
      updatingElemetn.style.lineHeight = parseInt(changeHeight.value) + 'px';
      updatingElemetn.style.width = parseInt(changeWidth.value) + 'px';
      updatingElemetn.style.height = parseInt(changeHeight.value) + 'px';  
      } else {
      alert("Wrong data!!!");
      }
    }
  }

  // вывести данные выбраного цвета в HEX в RGB
  
  let showColor = function () {
    setColor();
    showColorValue.innerHTML = `HEX: ${color}, RGB: ${colorRGG}`;
    rChanel.value = RChanel;
    gChanel.value = GChanel;
    bChanel.value = BChanel;
  }

  // выбрать цвет в HEX и обновить значения в RGB каналах

  let setColor = function(){
    color = newColor.value;    
    colorRGG = hexToRGB(color);
  }


  let setSize = function(){
    width = newWidth.value;
    height = newHeight.value;
  }

  let setFigure = function(){
    let radios = document.getElementsByName('figure');
    for (var i = 0; i < radios.length; i++) {
      if( radios[i].checked ){
        figure = radios[i].value;
      }
    }
  }

  let setCoordinates = function( x, y ){
    left = x - (width/2);
    top = y - (width/2);
  }

  let showDetails = function( e ){
    let html = `
      <p>
        width:
        <input id='changeWidth' type='text' value='${e.target.style.width}'>
      </p>
      <p>
      height:
        <input id='changeHeight' type='text' value='${e.target.style.height}'>
      </p>
    `;
    // let info = 'Width: '+e.target.style.width + ' Height: '+e.target.style.height ;
    details.style.backgroundColor = e.target.style.backgroundColor;
    if( e.target.className === 'figure' ){
      detailsText.innerHTML = html;
      if (chosenElementId && chosenElementId <= elementCounter ) {  /*снять выделение жирным с предыдущего элемента*/
        document.getElementById(chosenElementId).style.fontWeight = "400";
      }
      chosenElementId = e.target.id;
      e.target.style.fontWeight = "900";   /*выделить элемент жирным*/
      }else{
      detailsText.innerText = 'Choose again';
    }
  }

  let check = function( target ){
    if( figure && target.id === 'area' && color !== "#000000" && elementCounter < elementsLimit){   /*Если цвет Черный и лимит елементов не привышен и, то фигуру не создавать*/
      create = true;
    }else{
      create = false;
    }
  }

  let render = function( e ){
    let target = e.target;
    let element = document.createElement('div');
    element.className = 'figure';
    element.id = ++elementCounter;
    element.style.backgroundColor = color;
    element.style.width = width+'px';
    element.style.height = height+'px';
    element.style.top = top+'px';
    element.style.left = left+'px';
    element.innerHTML = elementCounter;       /*вставляем в элемент его порядковый номер*/
    element.style.lineHeight = height + 'px';
        if( figure === 'circle' ){
      element.style.borderRadius = '50%';
    }
    if (RChanel > 235 && GChanel > 235 && BChanel > 235) {     /*Если цвет белый ИЛИ ПОЧТИ БЕЛЫЙ, то давать черную рамку к элементу*/
      element.style.border = "1px solid black";
    }
    target.appendChild(element);
    showColorValue.innerHTML = `HEX: ${color}, RGB: ${colorRGG}`;
  }

  let make = function( e ){
    setColor();
    setSize();
    setFigure();
    setCoordinates( e.offsetX, e.offsetY )
    showDetails( e );

    check( e.target );
    if( create ){
      render( e );
    }

  }

  // Привязываем события к елементам

  area.addEventListener('click', make);
  newColor.onchange = showColor;
  rChanel.onchange = updateColor;
  gChanel.onchange = updateColor;
  bChanel.onchange = updateColor;
  setElementsLimit.onchange = updateElementsLimit;
  cleanArea.onclick = setAreaClear;
  UndoCreatingLastElement.onclick = UndoCreating;
  updateElementBtn.onclick = updateElement;
 

}());

// 1) Если цвет белый, то фигуру не создавать
// 1*) Если цвет белый, то давать черную рамку к элементу
// 1**) Если цвет белый ИЛИ ПОЧТИ БЕЛЫЙ, то давать черную рамку к элементу

// 2) Выводить информацию в инпуты
// 2*) Менять данные выбранного элемента при нажатии на кнопку "ОК"  в окне Details

// 3) Поставить ограничение на количество создаваемых элементов



// let testArr = ['Jan', 'Feb', 'Mar'];
//
// let testFun = function( el ){
//   console.log( el );
//   // el = '!!!' + el + '!!!';
//   // return el;
// }
//
//
// let make = function( fn, array ){
//   let newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     newArr.push( fn(array[i]) );
//     fn(array[i])
//   }
//   return newArr;
// }

// console.log( make( testFun, testArr ) );
// make( testFun, testArr )


//
// let sequence = function(start=0, step=1){
//   // if( start === undefined ){
//   //   start = 0;
//   // }
//   // if( step === undefined ){
//   //   step = 1;
//   // }
//   return function(){
//     return start += step;
//   }
// }
//
// let take = function( gen, x ){
//   let arr = [];
//   for (let i = 0; i < x; i++) {
//     arr.push(gen());
//   }
//   return arr;
// }
//
// let generator1 = sequence();
//
// console.log( take( generator1, 5 ) );



// !!!!
