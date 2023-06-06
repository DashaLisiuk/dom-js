'use strict';

///////////////////////////////////
//                               //
//       ОСНОВННОЕ ЗАДАНИЕ       //
//                               //
///////////////////////////////////

// Ссылки на страницы википедии для задания
const HTML_href = 'https://ru.wikipedia.org/wiki/HTML';
const CSS_href = 'https://ru.wikipedia.org/wiki/CSS';
const JS_href = 'https://ru.wikipedia.org/wiki/JavaScript';

// массив ссылка (для удобства использования ссылок в цикле)
let hrefArr = [HTML_href, CSS_href, JS_href];

/*
функция, создающая и возврящающая ссылку на ресурс href,
а также памещающая элемент box внутрь данной ссылки. */
function getTagWrappedByLink( box, href) {
    
const a = document.createElement('a');
a.href = href;
a.target = '_blank';
a.append(box);
return a;

}

const main =  document.querySelector('main');
let boxArr = main.querySelectorAll('.box');
boxArr.forEach( editBox );

function editBox( box, index) {
 box.remove();
 let newBox = getTagWrapepedByLink( box, hrefArr[index] );
 main.append( newBox );
}
/*                              */
/*   ВАШ КОД ОСНОВНОГО ЗАДАНИЯ  */
/*                              */


///////////////////////////////////
//                               //
//    ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ     //
//                               //
///////////////////////////////////

/* переменные для дополнительного задания */
const NodeJS_href = 'https://ru.wikipedia.org/wiki/Node.js';
const NodeJS_img = './src/images/nodeJS-logo.png';
const NodeJS_title = 'Node или Node.js';
const NodeJS_description= 'программная платформа, основанная на движке V8 (компилирующем JavaScript в машинный код).'
                        + ' Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода'
                        + ' через свой API, подключать другие внешние библиотеки, написанные на разных языках.'
                        + ' Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность'
                        + ' разрабатывать на Node.js и десктопные оконные приложения и программировать микроконтроллеры.';

/*                                    */
/*   ВАШ КОД ДОПОЛНИТЕЛЬНОГО ЗАДАНИЯ  */
/*                                    */