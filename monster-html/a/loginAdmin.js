// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add('right-panel-active');
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove('right-panel-active');
// });

var User; // object
var users = [{
        id: 'USER 1',
        username: 'Duong',
        password: 'duong',
        email: 'duong.a22@student.passerellesnumeriques.org',
        role: 'admin'

    },
    {
        id: 'USER 2',
        username: 'Xanh',
        password: 'xanh',
        email: 'xanh.tran22@student.passerellesnumeriques.org',
        role: 'admin'

    },
    {
        id: 'USER 3',
        username: 'Huou',
        password: 'huou',
        email: 'huou.ho22@student.passerellesnumeriques.org',
        role: 'admin'

    },
    {
        id: 'USER 4',
        username: 'Thu',
        password: 'thu',
        email: 'thu.nguyen22@student.passerellesnumeriques.org',
        role: 'admin'

    },

];
//lưu user vào localStorage
// localStorage.setItem("listUser", null);
if (localStorage.getItem('listUser') == null) {
    saveUser();

}
if (localStorage.getItem('listUser') != null) {
    loadUser();

}

function saveUser() {
    localStorage.setItem('listUser', JSON.stringify(users));

}
//lấy danh sách user

function loadUser() {
    User = JSON.parse(localStorage.getItem("listUser"));
}


//hàm random 6 chữ số 
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
};



function signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    let repass = document.getElementById("confirm").value;

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    loadUser();
    console.log(User);
    for (var i in User) {
        if (username == User[i].username) {
            alert("Tên đăng nhập đã tồn tại vui lòng chọn tên khác.")
            return false;
        }

    }
    if (username && email && password && repass) {
        if (!(re.test(email))) {
            alert("Email không hợp lệ.")
            return false;

            console.log(email + username + password);

        }
        if (!passw.test(password)) {


            alert('Vui lòng nhập mật khẩu từ 6-10 kí tự và có ít nhất số, chữ thường và chữ hoa.')
            return false;
            console.log(email + username + password + repass);
        }
        if (password == repass) {



            var x = parseInt(getRandomArbitrary(100000, 999999));

            //hàm gửi mã xác nhận đăng ký qua email
            Email.send({
                Host: "smtp.gmail.com",
                Username: "thunguyen.dn2021@gmail.com",
                Password: "Alwayssmile24@@",
                To: document.getElementById("email").value,
                From: "XUCANA HOTEL @gmail.com",
                Subject: "" + x + " là mã xác nhận của bạn. ",
                Body: "",
            })


            var num = prompt("Mã xác nhận đăng ký của bạn đã được gửi qua email. Vui lòng nhập mã xác nhận: ", "******");
            var y = parseInt(getRandomArbitrary(100000, 999999));



            // kiểm tra mã xác nhận được nhập từ người dùng
            if (num == x) {
                alert("Bạn đã đăng ký thành công.")
                    //tạo object từ thông tin của người mới đăng ký
                user = {
                    id: "USER " + parseInt(User.length + 1),
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    role: "user",
                }
                User.push(user);
                console.log(User);

                //Lưu thông tin người dùng đã đăng ký thành công vào localStorage
                localStorage.setItem('listUser', JSON.stringify(User));

            } else if (confirm("Mã bạn nhập chưa chính xác. Gửi lại mã?")) {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "thunguyen.dn2021@gmail.com",
                    Password: "Alwayssmile24@@",
                    To: document.getElementById("email").value,
                    From: "XUCANA HOTEL @gmail.com",
                    Subject: "" + y + " là mã xác nhận của bạn. ",
                    Body: "",
                })
                if (prompt("Vui lòng nhập mã xác nhận của bạn: ", "******") == y) {
                    alert("Bạn đã đăng ký thành công.")

                    //tạo object từ thông tin của người mới đăng ký
                    user = {
                        id: "USER " + parseInt(User.length + 1),
                        username: document.getElementById("username").value,
                        email: document.getElementById("email").value,
                        password: document.getElementById("password").value,
                        role: "user",
                    }
                    User.push(user);
                    console.log(User);


                    localStorage.setItem('listUser', JSON.stringify(User));
                } else {
                    alert("Bạn không đăng ký thành công.")

                }

            } else {
                alert("Bạn không đăng ký thành công.")
            }

        } else {
            console.log(email + username + password + repass);
            alert("Vui lòng xác thực mật khẩu.");

        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");

    }
}
var loginArr = [];

function logout() {
    localStorage.removeItem("login");
    alert("Đăng xuất thành công.");

    window.location.href = "bangDiem.html";



}




function signIn() {
    var k = -1;
    loadUser();
    console.log(User);
    for (var i in User) {

        if (
            (document.getElementById("usernamed").value == User[i].username) &&
            (document.getElementById("passwordd").value == User[i].password) &&
            (User[i].role == "admin")
        ) {
            k = 1;

            alert("Đăng nhập thành công");

            console.log("afminLogin");
            window.location.href = "logout.html";
            var userLogin = {
                username: document.getElementById("usernamed").value,
                password: document.getElementById("passwordd").value,
            }
            loginArr.push(userLogin);
            localStorage.setItem('login', JSON.stringify(loginArr));
        }
        if (
            (document.getElementById("usernamed").value == User[i].username) &&
            (document.getElementById("passwordd").value == User[i].password) &&
            (User[i].role == "user")
        ) {
            k = 1;
            console.log("userLogin");
            alert("Đăng nhập thành công");

            window.location.href = "logout.html";

            var userLogin = {
                username: document.getElementById("usernamed").value,
                password: document.getElementById("passwordd").value,
            }
            loginArr.push(userLogin);
            localStorage.setItem('login', JSON.stringify(loginArr));
            // saveLogin();



        }


    }
    if (k == -1) {
        if (document.getElementById("usernamed").value == "" && document.getElementById("passwordd").value == "") {
            alert("Vui lòng nhập đầy đủ thông tin.")
        } else {
            for (var i in User) {
                if (document.getElementById("usernamed").value == User[i].username) {
                    alert("Mật khẩu bị sai. Vui lòng kiểm tra lại.");
                    return false;
                }
            }

            alert("Bạn chưa có tài khoản. Vui lòng đăng ký.");

        }
    }



}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "loginAdmin.html";
}

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "thunguyen.dn2021@gmail.com",
//         Password: "Alwayssmile24@@",
//         To: 'thu.nguyen22@student.passerellesnumeriques.org',
//         From: "XUCANA HOTEL @gmail.com",
//         Subject: "Try your best!",
//         Body: "Try your best!",

//         Attachments: [{
//             name: "hotel.png",
//             path: "https://media.ex-cdn.com/EXP/media.nhadautu.vn/files/content/2019/09/19/khach-san-0724.jpeg"
//         }]
//     }).then(function(message) {
//         alert("Email xác nhận đăng ký đã được gửi. Vui lòng kiểm tra để hoàn tất đăng nhập.")
//     });
// }
function forgotPass() {
    loadUser();
    console.log(User);
    for (var i in User) {
        if (document.getElementById("usernamed").value) {

            if (document.getElementById("usernamed").value == User[i].username) {
                var x = parseInt(getRandomArbitrary(100000, 999999));
                var y = parseInt(getRandomArbitrary(100000, 999999));
                var emails = User[i].email;

                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "thunguyen.dn2021@gmail.com",
                    Password: "Alwayssmile24@@",
                    To: emails,
                    From: "XUCANA HOTEL @gmail.com",
                    Subject: "" + x + " là mã xác nhận của bạn. ",
                    Body: "",
                })
                var num = prompt("Mã xác nhận của bạn sẽ được gửi qua email. Vui lòng đợi và nhập mã xác nhận: ", "******");




                // kiểm tra mã xác nhận được nhập từ người dùng
                if (num == x) {
                    var passNew = prompt("Bạn đã xác minh tài khoản thành công. Vui lòng đổi mật khẩu:", "Vui lòng nhập mật khẩu từ 6-10 kí tự và có ít nhất 1 số, 1 chữ thường và 1 chữ hoa.")
                    User[i].password = passNew;
                    localStorage.setItem('listUser', JSON.stringify(User));
                    alert("Bạn đã thay đổi mật khẩu thành công.");
                    Email.send({
                        Host: "smtp.gmail.com",
                        Username: "thunguyen.dn2021@gmail.com",
                        Password: "Alwayssmile24@@",
                        To: emails,
                        From: "XUCANA HOTEL @gmail.com",
                        Subject: "Bạn vừa thay đổi mật khẩu tại website của chúng tôi.",
                        Body: "",
                    })


                } else if (confirm("Mã bạn nhập chưa chính xác. Gửi lại mã?")) {
                    Email.send({
                        Host: "smtp.gmail.com",
                        Username: "thunguyen.dn2021@gmail.com",
                        Password: "Alwayssmile24@@",
                        To: emails,
                        From: "XUCANA HOTEL @gmail.com",
                        Subject: "" + y + " là mã xác nhận của bạn. ",
                        Body: "",
                    })
                    if (prompt("Mã xác nhận đã được gửi lại. Vui lòng nhập mã xác nhận của bạn: ", "******") == y) {
                        var passNew = prompt("Bạn đã xác minh tài khoản thành công. Vui lòng đổi mật khẩu:", "Vui lòng nhập mật khẩu từ 6-10 kí tự và có ít nhất 1 số, 1 chữ thường và 1 chữ hoa.")
                        User[i].password = passNew;
                        localStorage.setItem('listUser', JSON.stringify(User));
                        alert("Bạn đã thay đổi mật khẩu thành công.");
                        Email.send({
                            Host: "smtp.gmail.com",
                            Username: "thunguyen.dn2021@gmail.com",
                            Password: "Alwayssmile24@@",
                            To: emails,
                            From: "XUCANA HOTEL @gmail.com",
                            Subject: "Bạn vừa thay đổi mật khẩu tại website của chúng tôi.",
                            Body: "",
                        })

                    }

                } else {
                    alert("Bạn đăng nhập không thành công")
                    return false;
                }

            }
        } else {
            alert("Vui lòng nhập tên đăng nhập.")
            return false;
        }
    }
}