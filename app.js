const DB_USER = [
    {
        username: "evankh",
        password: "rpl123"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputPassword1 = document.querySelector("#password1");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputPassword1 = inputPassword1.value;

    let flag = 0;

    DB_USER.map((data) => {
        if (data.username != valueInputUsername || data.password != valueInputPassword) {
            alert("Username/Password salah");
        } else if (valueInputPassword != valueInputPassword1) {
            alert("Password tidak cocok");
            console.log("Password tidak cocok");
        } else {
            flag = 1;

        }
    }
    )

    const warningMsg = document.querySelector(".warning");

    if (flag === 0) {
        warningMsg.className = "text-danger";
    }
    else {
        alert("Selamat anda sudah terdaftar");
    }

}
)

