//Function Expression คือการนิยามฟังก์ชันแบบไม่ต้องใช้คำว่า function
// มี 2 ประเภท เขียนอยู่ในตัวแปรหรือเรียกว่านิพจน์ฟังก์ชัน (Function Expression)
//1.Anonymous Function (ไม่มีชื่อ) ต้องเขียนปนกับอะไรสักอย่างหนึ่ง เช่น ตัวแปร, อาร์เรย์, อ็อบเจ็กต์, คลาส หรืออื่นๆ
let aa = function() {
    console.log('Hello...................');
}

let bb = function(x, y) {
    return x + y;
}

aa(); // เรียกใช้ฟังก์ชันที่ไม่มีชื่อ
console.log(bb(10, 20)); // เรียกใช้ฟังก์ชันที่ไม่มีชื่อและส่งพารามิเตอร์เข้าไป


//2.Arrow Function Expression (ฟังก์ชันอาร์โรว ที่ใช้เครื่องหมาย =>)****
let cc = () => {
    console.log('Hello...................');
}

let dd = (x, y) =>  {
    return x + y;
}

cc(); 
console.log(dd(10, 20)); 