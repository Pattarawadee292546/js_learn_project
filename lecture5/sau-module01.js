let dataX = 'Hello......';

const SAU = 'Southeast Asian University';

function showWow(){
    console.log('Wow! Wow! Wow!');
}

//สร้างแบบ es Module ต้องมี package.json ที่มี type: "module"
//คำสั่งใน terminal เพื่อสร้าง package.json  คำสั่ง npm init -y

export default{ dataX, SAU, showWow };