/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
*/
function map(array, fn) {
    const arrCopy = [];

    for (var i = 0; i < array.length; i++) {
        arrCopy[i] = fn(array[i], i, array);
    }

    return arrCopy

}
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {

    let acc = initial || array[0];
    const start = initial ? 0 : 1;

    for (var i = start; i < array.length; i++) {
        acc = fn(acc, array[i], i, array);
    }

    return acc;

}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
    return Object.keys(obj).map(e => e.toUpperCase())
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    const arrSlice2 = [];

    if (to != 0) {
        to = to ? to : array.length;
    }

    if (to < 0) {
        to = array.length + to;
    }

    if (to > array.length) {
        to = array.length;
    }

    if (from < 0) {
        from = array.length + from;
        if (from < 0) {
            from = 0;
        }
    }

    for (var i = from; i < to; i++) {
        arrSlice2.push(array[i]);
    }

    return arrSlice2;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};