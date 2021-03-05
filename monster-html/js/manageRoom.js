class Room {
    constructor(id, name, img, price, description) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.description = description;

    }

    static addProduct() {
        console.log(room.length);
        var added = new Room(("R" + parseInt(room.length + 1)), document.getElementById('name').value, document.getElementById('img').value, document.getElementById('price').value, document.getElementById('description').value);
        room.push(added);
        localStorage.setItem('listProduct', JSON.stringify(room));
        save();
        window.location.reload();
    }

    static updateProduct(i) {

        var k = room[i];
        document.getElementById('idd').value = k.id;
        document.getElementById('named').value = k.name;
        document.getElementById('imgd').value = k.img;
        document.getElementById('priced').value = k.price;
        document.getElementById('descrip').value = k.description;
        document.getElementById('idd').setAttribute("disabled", "disabled");
        document.getElementById('submitUpdate').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="Room.submitUpdate(' + i + ')"> Đồng ý </button>';
    }

    static submitUpdate(i) {
        var k = room[i];
        k.name = document.getElementById('named').value;
        k.img = document.getElementById('imgd').value;
        k.price = document.getElementById('priced').value;
        k.description = document.getElementById('descrip').value;

        localStorage.setItem('listProduct', JSON.stringify(room));
        window.location.reload();

    }
    static deleteProduct(i) {
        room.splice(i, 1);
        localStorage.setItem('listProduct', JSON.stringify(room));
        window.location.reload();
    }


}

function productAdmin() {
    var listProduct = "";
    for (const i in room) {
        var data = room[i];
        listProduct += `
      <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td> <img src=" ${data.img}" style="width: 150px; "></td>
      <td> ${data.price}$ </td>
      <td> ${data.description} </td>
     
      <td> <button onclick="Room.updateProduct(${i})" class="btn btn-info" data-toggle="modal" data-target="#updateProduct"> <i class="fas fa-cogs"> </i></button>
          <button onclick="Room.deleteProduct(${i})" class="btn btn-out-warning"> <i class="far fa-trash-alt">
           </i></button>
      </td>
      
  </tr>   `;

    }
    document.getElementById("product_admin").innerHTML = listProduct;


}



function save() {

    localStorage.setItem('listProduct', JSON.stringify(room));

}

var room = [
    (new Room("R1", "SUPERIOR ROOM", "New folder/super.jpg", 580, "The room is in size and small balcony overlooking to the on-site garden. The room is well equipped with functional facilities such as flat-screen TV, mini-fridge, hairdryer, fan, bathroom with walk-in shower and free toiletries. Superior Room is an economic and comfortable choice for young couples.")),
    (new Room("R2", "DELUXE ROOM", "New folder/deluxe2.jpg", 600, "The room will be the ideal accommodation to enjoy the best of Tuyen Lam tourism area with a view to the lake at valuable and reasonable offer. Featuring iron facilities and a spacious balcony, the room will bring breezy and convenient stay to everyone who loves nature and refreshment.")),
    (new Room("R3", "PREMIUM ROOM", "New folder/deluxe.jpg", 640, "The room features a balcony emerging into the flower garden, where guests can enjoy a good tea among the fresh green space. The room also has 2 mall windows to provide natural lights and the room always nice and clean. The room is spacious enough to be added an extra bed for the third adult.")),
    (new Room("R4", "SUITE ROOM", "New folder/family.jpg", 720, "Featuring a large and quiet living space, and a huge terrace, Suite Garden View is a lovely private accommodation for those who loves a little touch of conventional Western architecture. The room is beautifully designed for guests to enjoy panoramic view of the colorful flower garden on site.")),


];

function load() {
    room = JSON.parse(localStorage.getItem('listProduct'));
    productAdmin();
}
if (localStorage.getItem('listProduct') != null) {
    load();
}