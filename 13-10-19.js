
// var inp = prompt("Enter Number");
// var a = [];
// a[0]="Karachi";
// a[1]="Lahore";
// a[2]="Islamabad";
// var isFound = false;
// for(var i=0; i<a.length;i++){
// if(a[i]==inp.toLowerCase()){
//     console.log("Found" +a[i].toUpperCase());
//     isFound =true;
//     break;
// }
// }

// if(!isFound){
// console.log("Not Found");
// }


// var fullname ="Muhammad Sameer Ali";
// var first = fullname.slice(0,9);
// var last = fullname.slice(9);
// console.log(first);
// console.log(last);
// console.log(+fullname.length);



// var text = "to be or not to be";
// var search="or";
// var rep="and";
// var left = text.slice(0,6);
// var rght = text.slice(8);
// var replaced = left + rep +rght;
// console.log(replaced);
// console.log(text);



// var text = "to be or abc not to be";
// ssss.indexOf("world");
 // indexof string takes string and returns its index & if not found it returns -1 -1 = invalid index
// var search="or";
// var rep="and";
// var searc = text.indexOf(search);
// console.log(searc);
// var left = text.slice(0,searc);
// console.log(left);
// var rght = text.slice(search.length+searc);
// console.log(rght);
// var replaced = left + rep +rght;
// console.log(replaced);
// console.log(text);




// var text = "to be or abc not to be";
// // text.indexOf("world");
// // indexof string takes string and returns its index & if not found it returns -1 -1 = invalid index





// // lastindexof string takes string and returns its index from last & if not found it returns -1 -1 = invalid index
//charat gives index of any char
// var search="be";
// var rep="been";
// var searc = text.lastIndexOf(search);
// console.log(searc);
// var left = text.slice(0,searc);
// console.log(left);
// var rght = text.slice(search.length+searc);
// console.log(rght);

// var replaced = left + rep +rght;
// console.log(replaced);
// console.log(text);




// var text = "to be or abc not to be";
// var search="be";
// var rep="been";
// console.log(text.replace(search,rep));
// console.log(text.replace(/be/g,rep));
// //    /*texttoreplace*/g global replce 
// console.log(text);




// var text = "to be or abc not be to be";
// var search="be";
// for(i=0;i<text.length;i++){
// console.log(text.match(/be/g).length);
// }





// var text = "to be or abc not be to be";
// var stext =prompt("Promp");
// var search="be";
// var textind = -1;
// var count = 0;
// for(i=0;i<text.length;i++){
//     textind = text.indexOf(stext,textind+1);
//    if(textind>=0){
//     count ++;
//    }
//    else{
//        console.log("Not Found");
//         break;
//    }
//    console.log("Index = "+textind);
//     }

//     console.log("Counter  "+count);



// var num = 253.65699;
// console.log(Math.round(num));
// console.log(Math.floor(num)); //lowest
// console.log(Math.ceil(num)); //heighest



// var rand = Math.floor(Math.random()*6+1);//Random used in dice game 
// console.log(random);


// var random = Math.floor(Math.random()*99);//Random used in dice game 
// var prize=[111515,1515151,1515151,5167797];
// console.log(random);



// var num = "2355.444";
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Number(num));



// var rate = 20.20002;
// var Qty = 12.5550;
// var total = Qty * rate;
// console.log(total.toFixed(2));


var dt= new Date();
console.log(dt);