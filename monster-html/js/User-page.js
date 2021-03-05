var room = [{
        id: "R1",
        name: "SUPERIOR ROOM",
        img: "https://pix10.agoda.net/hotelImages/1602831/-1/b958aee9ffc9635e2899339724531877.jpg?s=1024x768",
        price: "$100",
        description: "The room is in size and small balcony overlooking to the on-site garden. The room is well equipped with functional facilities such as flat-screen TV, mini-fridge, hairdryer, fan, bathroom with walk-in shower and free toiletries. Superior Room is an economic and comfortable choice for young couples and travel mates. **Room size: 24 m2 **Occupancy: 2 adults + 1 child, **View: Garden view  **Bedding: 1 Double or 2 Single Beds",
    }

]; // đẩy mảng product vào bộ nhớ
function save() {
    localStorage.setItem('listProduct', JSON.stringify(room));
}

// product nhận dữ liệu tử mảng listProduct thong localStorage
function load() {
    room = JSON.parse(localStorage.getItem('listProduct'));
}
// xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
    load();
}
var listLocal = function() {
    var listRoom = "";
    for (var i in room) {
        var data = JSON.parse(JSON.stringify(room[i]));
        var listRoom = `
        <div class="card">
        <div class="card-image">
        <img src="${data.img}"class="img-fluid" alt="alternative">
        </div>
        <div class="card-body">
            <h3 class="card-title">${data.name}</h3>
            <p>${data.description}</p>
           
            <p class="price">Starting at <span>${data.price}$</span></p>
            <div class="media-body"><div class="buttons">
            <div class="container2" data-toggle="modal" data-target="#watch" onclick="chitiet('${data.id}')" >
                <a class="btn effect04" data-sm-link-text="CHỌN NGAY" target="blank" ><span >BOOK</span></a>
            </div>
          </div></div>
        </div>`;
        document.getElementById("banchay").innerHTML += listRoom;
    }
    save();
}
listLocal();
document.getElementById("haha").innerHTML = room.length;

function chitiet(id) {
    let html = "";
    let allRoom = JSON.parse(localStorage.getItem('listProduct'));
    let rooms = allRoom.filter(rooms => {
        return rooms.id == id;
    });
    return rooms.map((a) => {
        html = `<div class="wrapper">
                    <div class="product-img">
                        <img src="${a.img}" style="width: 35%; height: 50%;">
                    </div>
                    <div class="product-info">
                        <div class="product-text">
                            <h1>${a.name}</h1>
                            
                            <p>${a.description}</p>
          </div>
          <div class="product-price-btn">
            <p><span>${a.price}$</span></p><br/>
            <form method="get" action="html/vi.html">
            <button type="submit"> Buy Now</button>
        </form>
          </div>
        </div>
      </div>`;
        document.getElementById("print_watch").innerHTML = html;
    });
}