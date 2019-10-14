// // var number = 5;
// // //number = number + 5;
// // //number +=7;
// // var num = ++number;
// // alert(''+number+'   '+num+'');

// var number = 12;
// //number = number + 5;
// //number +=7;
// var num = --number;
// alert(''+number+'   '+num+'');

// var num = 12;
// var c = num++ - --num + ++num;
// alert(''+num+''+c);

// var num = 10;
// var c = --num + num-- - ++num - --num;
// alert(''+num+'   '+c);


// var a = prompt("Are you BlockChain Student");

// if(a == "yes"){
// alert("Go in the Class");
// }
// else if(a == "Yes"){
//     alert("Go in the Class");
// }
// else{
// alert("No you cant go");
// }


// if(a != "yes"){
//     alert("Go in the Class");
//     }


// if(a >= 80 && a<=100){
//     alert("Grade A+");
//     }
//     else if(a >= 60 && a<=70){
//         alert(" Grade A");
//     }
//     else if(a >= 50 && a<=60){
//         alert("Grade B");
//     }

//     else{
//     alert("Fail");
//     }
    
  
// var in1 =  prompt("Enter 1st Input");
// var in2 =  prompt("Enter 2nd Input");
// var fn = prompt("Enter Your Operation");
// var inn1 = parseInt(in1);
// var inn2 = parseInt(in2);

// var c ;

// if(fn == "+"){
//  c= inn1 + inn2;
//  alert(c);
// }
// else if(fn == "-"){
//     c= inn1 - inn2;
//     alert(c);
// }
// else if(fn == "*"){
//     c= inn1 * inn2;
//     alert(c);
// }
// else if(fn == "/"){
//     c= inn1 / inn2;
//     alert(c);
// }


// var a = prompt("Enter Char");
// if(a == "A" || a == "E" || a == "I" || a == "O" || a == "U"){
// alert("Its Vovel");
// }
// else{
//     alert("Not A Vovel");
// }


var score = prompt("Enter %");
if(score >= 80 && score <=100){
        alert("Grade A+");
        if(score > 90){
            alert("Reward for You");
        }
        else if(score >= 85){
            alert("Less Reward for You");
        }
        }
        else if(score >= 60 && score<=70){
            alert(" Grade A");
            if(score > 65){
                alert("No Reward");

            }
        }