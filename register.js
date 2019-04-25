function User() {
    if ((fname !== "") && (lname !== "") && (userUname !== "") && (userPword !== "")) {
        let fname = document.getElementById("firstname").value;
        let lname = document.getElementById("lastname").value;
        let userUname = document.getElementById("regUsername").value;
        let userPword = document.getElementById("regPassword").value;

        window.location.href = "loan.html";
    }
}