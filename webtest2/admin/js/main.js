// CÁC HÀM SỬ DỤNG CHO GIỎ HÀNG
let cart = []; // Mảng chứa thông tin sản phẩm trong giỏ hàng
let total = 0; // Tổng giá trị giỏ hàng

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
        existingItem.quantity++;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng với số lượng là 1
        const newItem = {
            id: productId,
            price: getProductPrice(productId),
            quantity: 1,
        };

        cart.push(newItem);

        // Hiển thị thông báo khi thêm sản phẩm vào giỏ hàng thành công
        showNotification(` ${productId} đã được thêm vào giỏ hàng`);
    }

    updateTotal();
    updateCart();
}

// Hàm lấy giá của sản phẩm từ productId
function getProductPrice(productId) {
    if (productId ==='Acer Aspire 7')
        return 15490;
    if (productId ==='Acer Nitro 5')
        return 12990;
    if (productId ==='Acer Nitro 7')
        return 34990;
    if (productId ==='Akko 5057B Plus')
        return 2290;
    if (productId ==='Akko 5108S')
        return 1490;
    if (productId ==='Akko MonsGeek MG108')
        return 1089;
    if (productId ==='Asus ROG Azoth')
        return 6690;
    if (productId ==='Asus ROG Strix Scope')
        return 4390;
    if (productId ==='Asus TUF A15')
        return 25990;
    if (productId ==='Asus TUF F15')
        return 19990;
    if (productId ==='Corsair M65')
        return 1590;
    if (productId ==='Corsair Sabre')
        return 2290;
    if (productId ==='Dell Inspiron T7430')
        return 22990;
    if (productId ==='Dell Vostro 3530')
        return 16990;
    if (productId ==='Edra EK361')
        return 890;
    if (productId ==='E-Dra EK375')
        return 1190;
    if (productId ==='E-Dra EK387L')
        return 1190;
    if (productId ==='iPhone 13 128GB')
        return 15890;
    if (productId ==='iPhone 14 Pro Max')
        return 26890;
    if (productId ==='iPhone 15 Plus 128GB')
        return 21890;
    if (productId ==='iPhone 15 Pro Max 256GB')
        return 32990;
    if (productId ==='Logitech G102')
        return 399;
    if (productId ==='Logitech G304')
        return 780;
    if (productId ==='Logitech G502')
        return 2490;
    if (productId ==='Macbook Air M1')
        return 18990;
    if (productId ==='Macbook Air M2')
        return 26490;
    if (productId ==='MSI Cyborg 15')
        return 19390;
    if (productId ==='Oppo A77S')
        return 5190;
    if (productId ==='Oppo Reno10')
        return 10490;
    if (productId ==='Rapoo V700')
        return 1590;
    if (productId ==='Razer Basilisk V3 Pro')
        return 3990;
    if (productId ==='Razer Blackwidow V4')
        return 5990;
    if (productId ==='Razer Cobra Pro')
        return 3390;
    if (productId ==='Razer Huntsman Mini')
        return 3090;
    if (productId ==='Razer Orochi V2')
        return 1190;
    if (productId ==='Samsung Galaxy S23 Ultra')
        return 22790;
    if (productId ==='Samsung Galaxy Z Flip 5')
        return 18190;
    if (productId ==='Samsung Galaxy Z Fold 5')
        return 32250;
    if (productId ==='SteelSeries Aerox 9')
        return 3290;
    if (productId ==='Vivo V27E')
        return 7990;
    if (productId ==='Vivo V29E')
        return 8990;
    if (productId ==='Xiaomi 13T Pro 5G')
        return 15490;
}

// Hàm tăng số lượng sản phẩm trong giỏ hàng
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        updateTotal(); // Cập nhật tổng cộng khi tăng số lượng
        updateCart();
    }
}

// Hàm giảm số lượng sản phẩm trong giỏ hàng
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity--;

        if (item.quantity === 0) {
            // Nếu số lượng giảm về 0, loại bỏ sản phẩm khỏi giỏ hàng
            const index = cart.indexOf(item);
            if (index !== -1) {
                cart.splice(index, 1);
            }
        }

        updateTotal(); // Cập nhật tổng cộng khi giảm số lượng
        updateCart();
    }
}

// Hàm cập nhật hiển thị giỏ hàng trên trang HTML
function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    // Xóa nội dung cũ của giỏ hàng
    cartItemsElement.innerHTML = "";

    // Hiển thị các sản phẩm trong giỏ hàng
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span> ${item.id}: ${item.price}K VND  </span>
            <button class="decrease-btn" onclick="decreaseQuantity('${item.id}')">-</button>
            <span id="quantity-${item.id}">${item.quantity}</span>
            <button class="increase-btn" onclick="increaseQuantity('${item.id}')">+</button>
        `;
        cartItemsElement.appendChild(li);
    });

    // Hiển thị tổng cộng
    totalElement.textContent = `Tổng cộng: ${total}K VNĐ`;
}

// Hàm cập nhật tổng giá trị của giỏ hàng
function updateTotal() {
    total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// Hàm hiển thị thông báo
function showNotification(message) {
    const notificationElement = document.getElementById("notification");
    notificationElement.textContent = message;
    notificationElement.style.display = "block";

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notificationElement.style.display = "none";
    }, 2500);
}

// Hàm hiển thị và ẩn giỏ hàng
function toggleCart() {
    const cartElement = document.getElementById("cart");
    cartElement.classList.toggle("show");
}
// Hàm đóng giỏ hàng
function closeCart() {
    const cartElement = document.getElementById("cart");
    cartElement.classList.remove("show");
}



// HÀM CHUYỂN HƯỚNG NGẪU NHIÊN ĐẾN CÁC WEBSITE
function chuyenHuongNgauNhien() {
    // Mảng chứa các URL bạn muốn chuyển hướng đến
    var urls = [
        './product-category-1.html',
        './product-category-2.html',
        './product-category-3.html',
        './product-category-4.html'
    ];

    // Chọn ngẫu nhiên một URL từ mảng
    var urlNgauNhien = urls[Math.floor(Math.random() * urls.length)];

    // Chuyển hướng đến URL đã chọn
    window.location.href = urlNgauNhien;
}


document.addEventListener("DOMContentLoaded", function() {
    // Lấy nút "admin-product-manage" và danh sách chức năng
    const productManageButton = document.querySelector(".admin-product-manage button");
    const submenuList = document.querySelector(".submenu-list");

    // Lắng nghe sự kiện click trên nút "admin-product-manage"
    productManageButton.addEventListener("click", function() {
        // Thêm hoặc loại bỏ lớp "active" cho danh sách chức năng
        submenuList.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy nút "admin-user-manage" và danh sách chức năng
    const userManageButton = document.querySelector(".admin-user-manage button");
    const userSubmenuList = document.querySelector(".admin-user-manage .submenu-list");

    // Lắng nghe sự kiện click trên nút "admin-user-manage"
    userManageButton.addEventListener("click", function() {
        // Thêm hoặc loại bỏ lớp "active" cho danh sách chức năng
        userSubmenuList.classList.toggle("active");
    });
});


// CHỈNH SỬA THÔNG TIN
function update(id){
    if(confirm("Bạn có muốn chỉnh sửa thông tin của sản phẩm này không !!!")){
        document.getElementById(id).setAttribute("contenteditable","true")
    }
}
function save(id){
    document.getElementById(id).setAttribute("contenteditable","false")
    alert("Cập nhật thông tin thành công !!!")
}


// Hàm xóa hình ảnh
function deleteImage() {
    var imageContainer = document.querySelector('.product-detail-img img');
    if (imageContainer) {
        imageContainer.remove();
    }
}

// Hàm hiển thị hình ảnh mới khi người dùng chọn file
function displayImage() {
    var imageInput = document.getElementById('imageInput');
    var imageContainer = document.querySelector('.product-detail-img');

    // Xóa hình ảnh hiện tại (nếu có)
    deleteImage();

    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Tạo thẻ img để hiển thị hình ảnh mới
            var newImage = document.createElement('img');
            newImage.src = e.target.result;

            // Thêm hình ảnh vào container
            imageContainer.appendChild(newImage);
        };

        // Đọc dữ liệu từ file hình ảnh
        reader.readAsDataURL(imageInput.files[0]);
    }
}

// Định nghĩa hàm toggleAccount
function toggleAccount(accountId) {
    // Lấy thẻ p của tài khoản
    var accountStatus = document.getElementById(accountId).querySelector('p');

    // Kiểm tra trạng thái hiện tại và thay đổi nó
    if (accountStatus.innerText === 'HOẠT ĐỘNG') {
        accountStatus.innerText = 'BỊ KHÓA';
    } else {
        accountStatus.innerText = 'HOẠT ĐỘNG';
    }
}