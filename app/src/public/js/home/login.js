"use strict";

const email = document.querySelector("#floatingInput"),
    psw = document.querySelector("#floatingPassword"),
    btn = document.querySelector("#btnsubmit");

btn.addEventListener("click", login);

function login() {
    const req = {
        email: email.value,
        psw: psw.value,
    };
    console.log(req);
};
