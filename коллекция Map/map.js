// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// let arr4=[10,11,12];
// let map=new Map();
// map.set(arr1, 'sdfhisefh', 'hffdhf');
// map.set(arr2, 'kjfksjf');
// map.set(arr3, 'jdfdjh');
// map.set(arr4, 'jdfj');
// document.querySelector('#container').innerHTML=map.size;




// //задание 2
// let obj1={1:'sdjfk'};
// let obj={2:'fjgrg'};
// let array1=[1,2];
// let array2=[3,4];
// let map1=new Map();

// console.log(map1.set(obj1, array1));
// console.log(map1.set(obj, array2));
// map1.delete(obj1);
// console.log(map1);





// //задание 3
// let ru =[
//     'кот',
//     'яблоко',
//     'огурец'
// ];
// let en=[
//     'cat',
//     'apple',
//     'cucumber'
// ];

// let map2=new Map();
// map2.set(ru[0], en[0]);
// map2.set(ru[1], en[1]);
// map2.set(ru[2], en[2]);
// function translate(word){
//     if(map2.has(word)){
//         return map2.get(word);
//     }
//     else{
//         console.log('Перевод не найден');
//     }
// }
// document.write()
// document.querySelector('#container2').innerHTML=translate('яблоко');








// //задание 4
// let map3=new Map();
// function addRat(name, rat){
//     if(map3.has(name)){
//         let ratii=map3.get(name);
//         ratii.push(rat);
//     }
//     else {
//         map3.set(name,[rat]);
//     }
// }
// function ratSred(name){
//     if(map3.has(name)){
//         let ratt=map3.get(name);
//         let sum=ratt.reduce((sum, rat)=>sum+rat,0);
//         let sred=sum/ratt.length;
//         return sred;
//     }
//     return 'нет оценки';
// }
// addRat('Архипова', 2);
// addRat('Архипова', 3);
// addRat('Кульдавлетова', 2);
// addRat('Кульдавлетова', 3);
// console.log("Средний балл Архиповой: "+ratSred('Архипова'));
// console.log("Средний балл Кульдавлетовой: "+ratSred('Кульдавлетова'));










//задание 3
let map=new Map();
map.set('Печать фотографий',[
    {
        title: 'Глянцевая'
    },
    {
        title:'Матовая'
    },
    {
        title:'Размеры фотографий'
    }
]);
map.set('Фотокниги',[
    {
        
    }
]);