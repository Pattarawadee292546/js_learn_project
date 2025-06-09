//Callback Functions สำคัญมากใน JavaScript *************************
let aa = () => console.log('wow wow wow');

let bb = (x, y) => x * y; 
function test01 (v1, v2){
    v1();
    console.log('name................');
    console.log(v2(10, 20)); //callback function

}

test01(aa, bb); //เรียกใช้ function test01
console.log('===================')

test01(bb, (m, n)=>{
    console.log(11111);
    console.log(222);
    console.log(333);
    console.log(m + n);
    return m + n;
})