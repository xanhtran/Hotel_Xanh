// var bill = [{
//         code: 1,
//         type: "DELUXE ROOM",
//         price: 1000000,
//     },
//     {
//         code: 2,
//         type: "PREMIUM ROOM",
//         price: 1100000,

//     },
//     {
//         code: 3,
//         type: "FAMILY ROOM",
//         price: 1200000,

//     },
//     {
//         code: 4,
//         type: "SUITE ROOM",
//         price: 1300000,

//     },
//     {
//         code: 5,
//         type: "LUXURY ROOM",
//         price: 1400000,

//     }

// ];

// var add = function() {
//     for (var i in bill) {
//         document.getElementById("add").innerHTML += `
//         <tr>
//         <td>${bill[i].code}</td>
//         <td>${bill[i].type}</td>
//         <td>${bill[i].price}</td>

//         <td>
//             <button type="button" class="btn btn-success btn-choose" onclick="caculate(${i})">Chọn</button>
//         </td>
//         </tr>
//     `;
//     }
// }

// add();
// var j = 0;
// var total = 0;
// var caculate = function(i) {

//     total += bill[i].price;
//     document.getElementById("add2").innerHTML += `

//       <tr>
//       <td> ${++j}</td>
//       <td>${bill[i].code}</td>
//       <td>${bill[i].name}</td>
//       <td>${bill[i].price}</td>

//       <td>
//       <button class="btn btn-out-warning" onclick="deleteRow(${i})"> <i class="fas fa-trash"> </i></button>
//         </td>
//     </tr>     

//   `;
//     document.getElementById("total").innerHTML = `
//     <tr>
//         <td colspan=2>Total</td>
//         <td>${total}</td>
//     </tr>
//         `;

// }




// var deleteRow = function(i) {
//     bill.splice(i, 1);
//     window.location.reload();
// }



// function send() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "thunguyen.dn2021@gmail.com",
//         Password: "Alwayssmile24@@",
//         To: "xanh.tran22@student.passerellesnumeriques.org",
//         From: "XUCANA HOTEL @gmail.com",
//         Subject: "CHI TIẾT ĐƠN ĐẶT PHÒNG CỦA BẠN",
//         Body: `
//         <table class="table table-bordered table-hover">
//         <thead>
//             <tr>
//                 <th>STT</th>
//                 <th>Code</th>
//                 <th>Loai phòng</th>
//                 <th>Đơn giá</th>

//             </tr>
//         </thead>
//         <tbody id="add2">

//         </tbody>
//         <tfoot id="total">

//         </tfoot>
//     </table>
//         `

//     })
// }


const url_api = "https://6010d7c491905e0017be3a28.mockapi.io/ai";


var menu = [];
var choose = [];
var listType = [
    "Deluxe Room",
    "Premium Room",
    "Family Room",
    "Standar Room",
    "Suite Room"

]

function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: `${url_api}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}



function get_menu() {
    callAPI('menu', "GET", null).then(res => {
        menu = res.data;
        add();
    });
}
get_menu();

function postType() {

    callAPI('menu', "POST", body);
}

var add = function() {
    for (var i in menu) {
        document.getElementById("add").innerHTML += `
            <tr>
            <td>${menu[i].code}</td>
            <td>${menu[i].type}</td>
            <td>${menu[i].price}</td>
         
            <td>
                <button type="button" class="btn btn-success btn-choose" onclick="caculate(${i})">Select</button>
            </td>
            </tr>
        `;
    }
}



var j = 0;
var total = 0;

function caculate(i) {
    total += menu[i].price;
    document.getElementById("add2").innerHTML += `
  <tr>
  <td> ${++j}</td>
  <td>${menu[i].code}</td>
  <td>${menu[i].type}</td>
  <td>${menu[i].price}</td>
  <td>
  <button class="btn btn-out-warning" onclick="deleteRow(${j})"> <i class="fas fa-trash"> </i></button>
    </td>
</tr>     
`;
    document.getElementById("total").innerHTML = `
<tr>
    <td colspan=2>Total</td>
    <td>${total}</td>
</tr>
    `;
    choose.push(menu[i]);
    console.log(choose);
    localStorage.setItem("menu", JSON.stringify(choose));
}


var deleteRow = function(i) {
    choose.splice(i, 1);
    total -= choose[i].price;
    window.location.reload();
    choose = JSON.parse(localStorage.getItem('menu'));
    load();
}

function load() {
    for (var i in choose) {
        total += choose[i].price;
        document.getElementById("add2").innerHTML += `
        <tr>
        <td> ${++j}</td>
        <td>${choose[i].code}</td>
        <td>${choose[i].type}</td>
        <td>${choose[i].price}</td>
        <td>
        <button class="btn btn-out-warning" onclick="deleteRow(${j})"> <i class="fas fa-trash"> </i></button>
          </td>
      </tr>     
      `;
        document.getElementById("total").innerHTML = `
      <tr>
          <td colspan=2>Total</td>
          <td>${total}</td>
      </tr>
          `;
    }


}