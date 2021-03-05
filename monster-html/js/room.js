class Device {
    constructor(idDe, nameDe, imgDe, priceDe) {
        this.idDe = idDe;
        this.nameDe = nameDe;
        this.imgDe = imgDe;
        this.priceDe = priceDe;


    }

    static addDevice() {
        console.log(device.length);
        var added = new Device("D" + parseInt(device.length + 1), document.getElementById('nameDe').value, document.getElementById('imgDe').value, document.getElementById('priceDe').value);
        device.push(added);
        localStorage.setItem('listDevice', JSON.stringify(device));
        save();
        window.location.reload();
    }

    static updateDevice(i) {

        var k = device[i];
        document.getElementById('idDev').value = k.idDe;
        document.getElementById('nameDev').value = k.nameDe;
        document.getElementById('imgDev').value = k.imgDe;
        document.getElementById('priceDev').value = k.priceDe;


        document.getElementById('idDev').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdate1').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="Device.submitUpdate(' + i + ')"> Đồng ý </button>';

    }

    static submitUpdate(i) {
        var k = device[i];

        k.nameDe = document.getElementById('nameDev').value;
        k.imgDe = document.getElementById('imgDev').value;
        k.priceDe = document.getElementById('priceDev').value;

        localStorage.setItem('listDevice', JSON.stringify(device));
        window.location.reload();

    }
    static deleteDevice(i) {
        device.splice(i, 1);
        localStorage.setItem('listDevice', JSON.stringify(device));
        window.location.reload();
    }


}

function deviceAdmin() {
    var listDevice = "";
    for (const i in device) {
        var data = device[i];
        listDevice += `
      <tr>
      <td>${data.idDe}</td>
      <td>${data.nameDe}</td>
      <td> <img src=" ${data.imgDe}" style="width: 150px; "></td>
      <td> ${data.priceDe}$ </td>
    
      <td> <button onclick="Device.updateDevice(${i})" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateDevice"> <i class="fas fa-cogs"> </i></button>
          <button onclick="Device.deleteDevice(${i})" class="btn btn-out-warning"> <i class="fas fa-trash"> </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("device_admin").innerHTML = listDevice;


}



function save() {

    localStorage.setItem('listDevice', JSON.stringify(device));

}

var device = [

    (new Device("D1", "TV-LG", "Image/TV-LG-3D-1.jpg", 25)),
    (new Device("D2", "Máy sấy tóc", "Image/may-say-toc.jpg", 6)),
    (new Device("D3", "Khăn tắm", "Image/khantam.jpg", 5))
];


function load() {
    device = JSON.parse(localStorage.getItem('listDevice'));
    deviceAdmin();
}
if (localStorage.getItem('listDevice') != null) {
    load();
}