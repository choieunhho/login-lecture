"use strict";


const PORT = 3000;
const app = require("../app");

// 현실적인 서버를 띄우는 코드이기에 앞으로 이 파일을 실행시켜야 서버가 가동됨.
app.listen(PORT, () => {
    console.log("서버 가동");
});