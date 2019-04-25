function adminLogIn() {

    let adminUname = document.getElementById("adminUsername").value;
    let adminPword = document.getElementById("adminPassword").value;

    if ((adminUname === "admin") && (adminPword === "admin")) {
        window.location.href = "adminPanel.html";
    } else {
        window.location.href = "index.html";
    }
}