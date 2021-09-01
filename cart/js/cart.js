let users = JSON.parse(localStorage.getItem("users"))
let userLogged = JSON.parse(localStorage.getItem("userLogged"))
const productContainer = document.getElementById("product-container")

function userCart() {
    for (i = 0; i < users.length; i++) {
        userLogged = JSON.parse(localStorage.getItem("userLogged"))
        if (users[i][2] == userLogged[0][2]) {
            for (j = 5; j < users[i].length; j++){
                const product=`
                <div class="product">
                <div class="product-image-container">
                    <div class="product-image">
                        <img src="${users[i][j].img}" alt="">
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-title">
                        <p>${users[i][j].name}</p>
                    </div>
                    <div class="product-size">
                        <p>${users[i][j].size}</p>
                    </div>
                    <div class="product-quantity">
                        <i id="quantityCartUp" class="fas fa-chevron-up"></i>
                        <input type="number" name="quantityCart" id="quantityCart" value="${users[i][j].quantity}" min="1" max="10" readonly>
                        <i id="quantityCartDown" class="fas fa-chevron-down"></i>
                    </div>
                    <div class="product-price">
                        <p>R$<code>${users[i][j].price}</code></p>
                    </div>
                </div>
                </div>
                `
                productContainer.innerHTML += product
            }
        } else {
            return false
        }
    }
}

function addProdQuantity() {
    
}

