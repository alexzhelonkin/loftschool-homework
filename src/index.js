/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
var arr = ['h', 'e', 'l', 'l', 'o'];

function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }

    /*
     Задание 2:

     Напишите аналог встроенного метода map для работы с массивами
     Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
     */

    var arrMap = [10, 11, 12, 13, 14];

    function map(array, fn) {
        var arrCopy = [];
        for (var i = 0; i < array.length; i++) {
            var funRes = fn(array[i], i, array);
            arrCopy.push(funRes);
        }
        return arrCopy
    }

    function multiply(i) {
        return i * 2;
    }

    var multArr = map(arrMap, multiply);
    console.log(multArr);

    /*
     Задание 3:

     Напишите аналог встроенного метода reduce для работы с массивами
     Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
     */
    function reduce(arr, fn, initialValue) {
        var returnedValue = initialValue || 0;
        for (var i = 0; i < arr.length; i++) {
            returnedValue = returnedValue + fn(initialValue, arr[i]);
        }
        return returnedValue;
    }
    var reduceTestResult = reduce([1, 2, 3], function(acc, n) {
        return acc + n;
    }, 0);
    console.log(reduceTestResult);

    /*
     Задание 4:

     Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

     Пример:
       upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
     */

    var someWords = {
        name: 'andrew',
        lastName: 'lincoln'
    }

    function upperProps(obj) {
        var arrayWithProps = [];
        for (key in obj) {
            arrayWithProps.push(key.toUpperCase());
        }
        return arrayWithProps
    }

    /*
     Задание 5 *:

     Напишите аналог встроенного метода slice для работы с массивами
     Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
     */

    /* var arrSlice = [10, 11, 12, 13, 14];
    ​
    function slice(array, from, to) {
        var arrSlice2 = [];
        var endIndex = to || array.length;
        for (var i = from; i < endIndex; i++) {
            arrSlice2.push(arrSlice[i]);
        }
        return arrSlice2;
    }
    */


    var arrSlice = [10, 11, 12, 13, 14];

    function slice(array, from, to) {
        var arrSlice2 = [];
        for (var i = from; i < to; i++) {
            arrSlice2.push(arrSlice[i]);
        }
        return arrSlice2;
    }

    /*
     Задание 6 *:

     Функция принимает объект и должна вернуть Proxy для этого объекта
     Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
     */
    function createProxy(obj, handler) {
        return new Proxy(obj, handler);
    }

    export {
        forEach,
        map,
        reduce,
        upperProps,
        slice,
        createProxy
    };