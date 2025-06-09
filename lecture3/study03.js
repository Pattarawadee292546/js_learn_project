//เจาะลึก Arrow Function  
let aa = () => {
    console.log("Hello World");
}
//หากคำสั่งใน { } มีเพียงหนึ่ง คำสั่งไม่จำเปป็นต้องใช้ { }
let bb = () => console.log("Hello Name ");
 


let cc = () => {
    return ' Wow Wow Wow';
}
//หากคำสั่งใน { } มีเพียงหนึ่ง คำสั่งไม่จำเป็นต้องใช้ { } และไม่ต้องใช้ return
let dd = () => ' Wow Wow Wow';

aa();
aa();
bb();
console.log(cc());
console.log(dd());