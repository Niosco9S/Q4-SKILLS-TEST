let attempt_counter = 0;

function login() {
    let username = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    let display = document.getElementById("output");

    let granted = "Login Successful!";

    if (username === "Igor Sarmiento" && pwd === "123456711") {
        alert(granted);
        attempt_counter = 0;
        display.innerHTML = "";

        window.location.href = "notebook.html";
        return;
    } 
    else {
        attempt_counter++;
        display.innerHTML =
            "Incorrect username and/or password. Attempt " + attempt_counter + " of 3 ";
    }
}
document.getElementById("output")

function showHelp() {
    window.alert("Username = Igor Sarmiento and Password = 123456711");
}
