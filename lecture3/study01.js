//Function คือการทำงานประเภทหนึ่งที่เราสามารถเรียกใช้ได้หลายครั้ง จะไม่ทำงานหากไม่ถูกเรียหใช้
//(call Function)  มี 4 ประเภท 
//1. no parameter no return
function sauFunc1() {
    console.log("Hello World");
}

//2. have parameter no return
function sauFunc2(aa, bb){
    console.log(aa);
    console.log(bb);
}

//3. no parameter , has
function sauFunc3( ){
    console.log("Woo...");
    return 123456;
}

//4. have parameter , has return
function sauFunc4(aa, bb,cc,dd){
    return aa + bb + cc + dd;
}
//----------------------------คำสั่งไหนเขียนก่อยทำก่อน----------------------------
sauFunc1(); 
sauFunc1(); 
sauFunc2(10,20); // ข้อมูลที่ส่งให้พารามิเตอร์เรียกว่า Argument
sauFunc2(30,40); 

//---------------------ฟังชั่นที่  return ต้องไม่อยู่ตัวเดียวโดดๆ------------------------
console.log('---------------------------------')
let x1 = sauFunc3(); // x1 จะเก็บค่าที่ return จาก sauFunc3
console.log(sauFunc3()); // จะพิมพ์ค่า 123456

let x2 = sauFunc4(10,20,30,40); // x2 จะเก็บค่าที่ return จาก sauFunc4
console.log(sauFunc4(11,22,33,44)); 
console.log(`X1 : ${x1}`);
console.log(`X2 : ${x2}`); // x2 จะเก็บค่าที่ return จาก sauFunc4

