"use strict";

const hello = (req, res) => {
        // 브라우저로부터 "/" 이러한 명령이 들어오면 실행할 내용
        res.render("home/index");
};

const login = (req, res)=>{
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};