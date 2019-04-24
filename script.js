let adminUname;
let adminPword;
let fname;
let lname;
let userUname;
let userPword;

function User() {
    if ((fname !== "") && (lname !== "") && (userUname !== "") && (userPword !== "")) {
        fname = document.getElementById("firstname").value;
        lname = document.getElementById("lastname").value;
        userUname = document.getElementById("regUsername").value;
        userPword = document.getElementById("regPassword").value;
        window.location = "loan.html";
    }
}

function adminLogIn() {
    adminUname = document.getElementById("adminUsername").value;
    adminPword = document.getElementById("adminPassword").value;

    if ((adminUname === "admin") && (adminPword === "admin")) {
        window.location.href = "adminPanel.html";
    } else {
        window.location.href = "index.html";
    }
}
application() {
    document.querySelector("apply")
}