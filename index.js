var car = {
    brand: 'Toyota',
    model:'corolla',
    year:2020
}
for(i in car){
    console.log(`${i} :${car[i]}`.toUpperCase());
    
}
//BRAND :TOYOTA
//MODEL :COROLLA
//YEAR :2020
var num =[1,2,3,4,5]
for(i in num){
    console.log("hi");
    
}
//hi
//hi
//hi
//hi
//hi
 var fruits =['apple','banana','cherry'];
 for (i in fruits){
    console.log(`${i}-${fruits[i]}`);
    
 }
 //0-apple
//1-banana
//2-cherry
var obj ={
    name:'kumar',
    age:22,
    address:{
        city:'gajwel',
        state:'tg'
    }
}
obj. address.city="siddipet"
console.log(obj)
var car1 = {
    brand: 'Toyota',
    model:'corolla',
    year:2020
}
car1.year=2022
console.log(car1);
