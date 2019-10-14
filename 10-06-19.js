// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";
// cities[10] = "Larkana";
// alert(cities);
// alert(cities[8]);
// alert(cities.length);




// var index=0;
// var cities=[];
// cities[index++] = "Quetta";
// cities[index++] = "Peshawar";
// cities[index++] = "Larkana";
// alert(cities);
// alert(cities[8]);
// alert(cities.length);

// var myCity = prompt("Enter Your City");
// if(cities[0] == myCity){
// alert("FOund your city "+myCity[0]);
// }

// else if(cities[1] == myCity){
//  alert("FOund your city "+myCity[1]);
//  }
//  else if(cities[2] == myCity){
//   alert("FOund your city "+myCity[2]);
//  }
//  else{
// alert("Not Found");
// }




// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";
// cities[10] = "Larkana";

// alert(cities);
// alert(cities.length);
// alert(cities.pop()); //removes at last index
// alert(cities);
// alert(cities.length);




// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";

// alert(cities);
// alert(cities.length);
// console.log(cities.push("Abbotabad","Jamshoro")); //add to last index
// alert(cities);
// alert(cities.length);





// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";

// alert(cities);
// alert(cities.length);
// console.log(cities.shift()); //removes from 0 index
// alert(cities);
// alert(cities.length);




// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";

// alert(cities);
// alert(cities.length);
// console.log(cities.splice(2,0,"Larkana","Jamshoro")); //Adds data at any array index
// alert(cities);
// alert(cities.length);




// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";

// alert(cities);
// alert(cities.length);
// console.log(cities.splice(2,1,)); //Removes data at any array index and adds another index
// console.log(cities.splice(2,1,"Add")); //Removes data at any array  
// alert(cities);
// alert(cities.length);



// var cities = ["Karachi","Lahore","Islamabad"];
// cities[3] = "Quetta";
// cities[4] = "Peshawar";

// alert(cities);
// alert(cities.length);
// console.log(cities.slice(1,6)); //Slice data at any array index and returns the required as a new array
// alert(cities);
// alert(cities.length);


// var arr = ["1","2","3","4"];
// alert(arr);


// var pr1 = prompt("Enter 1st value");
// var pr2 = prompt("Enter 2nd value");
// var pr3 = prompt("Enter 3rd value");
// var pr4 = prompt("Enter 4rth value");

// var arr = [];
// console.log(arr.push(pr1,pr2,pr3,pr4));
// alert(arr);



// var pr1 = prompt("Enter 1st value");
// var pr2 = prompt("Enter 2nd value");
// var pr3 = prompt("Enter 3rd value");
// var pr4 = prompt("Enter 4rth value");

// var arr = [];
// arr.push(pr1,pr2,pr3,pr4);


//     if(arr[0] == 25){
//     alert("Found your Number "+arr[0]);
//     }
//     else if(arr[1] == 25){
//      alert("Found your Number "+arr[1]);
//      }
//      else if(arr[2] == 25){
//       alert("Found your Number  "+arr[2]);
//      }
//      else if(arr[3] == 25){
//      alert("Found your Number at "+arr[3]);
//        }
//      else{
//         alert("Not Found");
//     }




// var table = 4;
// for(var a=1; a<=10;a++){
// console.log(table +" * "+a+ " = " +(table*a));
// }


// var a = [];
// a[0]=25;
// a[1]=56;
// a[2]=58;
// for(var i=0; i<=10;i++){

// if(a[i]==25){
//     console.log(a[i]);
//     break;
// }
// else{
//     console.log("Error"+a[i]);
// }
// }

// var inp = prompt("Enter Number");
// var a = [];
// a[0]=25;
// a[1]=56;
// a[2]=58;

// var isFound = false;

// for(var i=0; i<a.length;i++){
// if(a[i]==inp){
//     console.log("Found" +a[i]);
//     isFound =true;
//     break;
// }
// }

// if(!isFound){
// console.log("Not Found");
// }



// var table = prompt("Enter the number ");
// var tablep = parseInt(table);
// var count = prompt("Enter the count");
// var countp = parseInt(count);
// for(var a=1; a<=countp;a++){
// console.log(tablep +" * "+a+ " = " +(tablep * a));
// }


// var first_name = ["Sameer","Anas"];

// var last_name = ["Ali","Rehman"];
// first_name.push("Owais","Ibtesam");
// for(var i = 0; i < first_name.length;i++){
//     for(var j = 0; j < last_name.length;j++)
// console.log(first_name[i]+" "+last_name[j]);

// }