class Order {
    constructor(id, name, fullname, sdt, email, address, cmnd) {
        this.id = id;
        this.name = name;
        this.fullname = fullname;
        this.sdt = sdt;
        this.email = email;
        this.address = address;
        this.cmnd = cmnd
    }



    static addOrder() {
        console.log(order.length)
        var added = new Order("O" + parseInt(order.length + 1), document.getElementById('name').value, document.getElementById('fullname').value, document.getElementById('sdt').value, document.getElementById('email').value, document.getElementById('address').value, document.getElementById('cmnd').value);
        order.push(added);
        localStorage.setItem('listOrder', JSON.stringify(order));
        save();
        window.location.reload();
    }

    static updateOrder(i) {

        var k = order[i];
        document.getElementById('idOr').value = k.id;
        document.getElementById('nameOr').value = k.name;
        document.getElementById('fullnameOr').value = k.fullname;
        document.getElementById('sdtOr').value = k.sdt;
        document.getElementById('emailOr').value = k.email;
        document.getElementById('addressOr').value = k.address;
        document.getElementById('cmndOr').value = k.cmnd;



        document.getElementById('idOr').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdateOrder').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="Order.submitUpdate(' + i + ')"> Đồng ý </button>';

    }

    static submitUpdate(i) {
        var k = order[i];

        k.name = document.getElementById('nameOr').value;
        k.fullname = document.getElementById('fullnameOr').value;
        k.sdt = document.getElementById('sdtOr').value;
        k.email = document.getElementById('emailOr').value;
        k.address = document.getElementById('addressOr').value;
        k.cmnd = document.getElementById('cmndOr').value;


        localStorage.setItem('listOrder', JSON.stringify(order));
        window.location.reload();

    }
    static deleteOrder(i) {
        order.splice(i, 1);
        localStorage.setItem('listOrder', JSON.stringify(order));
        window.location.reload();
    }


}

function orderAd() {
    var listOrder = "";
    for (const i in order) {
        var data = order[i];
        listOrder += `
      <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td> ${data.fullname} </td>
      <td> ${data.sdt} </td>
      <td> ${data.email}</td>
      <td> ${data.address} </td>
      <td> ${data.cmnd} </td>

    
      <td> <button onclick="Order.updateOrder(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateOrder"> <i class="fas fa-cogs"> </i></button>
          <button onclick="Order.deleteOrder(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("order_admin").innerHTML = listOrder;


}



function save() {

    localStorage.setItem('listOrder', JSON.stringify(order));

}

var order = [

    (new Order("O1", "Xanh", "Tran Thi Xanh", "5447589025", "xanh.tran@gmail.com", "Da Nang", "215512446")),
    (new Order("O2", "Vi", "Le Ngoc Vi", "0447589025", "vi.le@gmail.com", "Da Nang", "215512446"))

];


function load() {
    order = JSON.parse(localStorage.getItem('listOrder'));
    orderAd();
}
if (localStorage.getItem('listOrder') != null) {
    load();
}