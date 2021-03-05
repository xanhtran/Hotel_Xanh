class User {
    constructor(idUser, nameUser, usernameUser, sdtUser, emailUser, addressUser, roleUser) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.usernameUser = usernameUser;
        this.sdtUser = sdtUser;
        this.emailUser = emailUser;
        this.addressUser = addressUser;
        this.roleUser = roleUser;

    }

    static addUser() {
        console.log(user.length);
        var added = new User("R" + parseInt(user.length + 1), document.getElementById('nameUser').value, document.getElementById('usernameUser').value, document.getElementById('sdtUser').value, document.getElementById('emailUser').value, document.getElementById('addressUser').value, document.getElementById('roleUser').value);
        user.push(added);
        localStorage.setItem('listUser', JSON.stringify(user));
        save();
        window.location.reload();
    }

    static updateUser(i) {

        var k = user[i];
        document.getElementById('iddUser').value = k.idUser;
        document.getElementById('namedUser').value = k.nameUser;
        document.getElementById('usernamedUser').value = k.usernameUser;
        document.getElementById('sdtedUser').value = k.sdtUser;
        document.getElementById('emailedUser').value = k.emailUser;
        document.getElementById('addressedUser').value = k.addressUser;
        document.getElementById('roledUser').value = k.roleUser;

        document.getElementById('iddUser').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdateUser').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="User.submitUpdate(' + i + ')"> Đồng ý </button>';

    }

    static submitUpdate(i) {
        var k = user[i];

        k.nameUser = document.getElementById('namedUser').value;
        k.usernameUser = document.getElementById('usernamedUser').value;
        k.sdtUser = document.getElementById('sdtedUser').value;
        k.emailUser = document.getElementById('emailedUser').value;
        k.addressUser = document.getElementById('addressedUser').value;
        k.roleUser = document.getElementById('roledUser').value;
        localStorage.setItem('listUser', JSON.stringify(user));
        window.location.reload();

    }
    static deleteUser(i) {
        user.splice(i, 1);
        localStorage.setItem('listUser', JSON.stringify(user));
        window.location.reload();
    }


}

function userAdmin() {
    var listUser = "";
    for (const i in user) {
        var data = user[i];
        listUser += `
      <tr>
      <td>${data.idUser}</td>
      <td>${data.nameUser}</td>
      <td>${data.usernameUser}</td>
     
      <td> ${data.sdtUser}</td>
      <td> ${data.emailUser} <span style="width: 150px; "></span> </td>
      <td> ${data.addressUser} <span style="width: 150px; "></span> </td>
      <td> ${data.roleUser} </td>
      <td> <button onclick="User.updateUser(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateUser"> <i class="fas fa-cogs"> </i></button>
          <button onclick="User.deleteUser(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("user_admin").innerHTML = listUser;


}



function save() {

    localStorage.setItem('listUser', JSON.stringify(user));

}

var user = [
    (new User("U1", "Dương", "ADuong", "093435647686", "duong.a@gmail.com", "Kon Tum", "user")),
    (new User("U2", "Hươu", "Hươu Hồ", "0983257485", "hothihuou2k1@gmail.com", "Quang tri", "admin")),
    (new User("U3", "Xanh", "Xanh Trần", "0983256335", "tranthixanh@gmail.com", "Binh Dinh", "admin"))
];

function load() {
    user = JSON.parse(localStorage.getItem('listUser'));
    userAdmin();
}
if (localStorage.getItem('listUser') != null) {
    load();
}