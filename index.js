
const newsOpenWraps = document.querySelectorAll('.newsOpenWrap');
const icon1 = document.querySelectorAll('.icon1');
const icon2 = document.querySelectorAll('.icon2');
const newsContent = document.querySelectorAll('.newsContent');
const newsNames = document.querySelectorAll('.newsName');
const newHeaders = document.querySelectorAll('.newsHeader');
const upDownIcons = document.querySelectorAll('.newsUpDown svg');
const listNews = document.querySelectorAll('.news');

newsOpenWraps.forEach((newsOpenWrap,i) => {
    newsOpenWrap.addEventListener('click', function() {

        if(icon1[i].classList.contains('active')) {
            newHeaders[i].classList.add('backgroundGrey');
            newsNames[i].classList.add('colorGrey');
            upDownIcons[i].classList.add('fillGrey');
            icon1[i].classList.remove('active');
            icon2[i].classList.add('active');
            newsContent[i].setAttribute('style', 'display: none;');
        } else {
            newHeaders[i].classList.remove('backgroundGrey');
            newsNames[i].classList.remove('colorGrey');
            upDownIcons[i].classList.remove('fillGrey');
            icon1[i].classList.add('active');
            icon2[i].classList.remove('active');
            newsContent[i].setAttribute('style', 'display: block;');
        }
    });
    
});

let draggedElement = null;
let draggedElementIndex = null;
let dropElementIndex = null;

const newsWraper = document.querySelector('.newsWraper');



listNews.forEach((news)=>{
    news.draggable = true;
    news.addEventListener('dragstart', dragStart);
    news.addEventListener('dragover', dragOver);
    news.addEventListener('dragend', dragEnd);
    news.addEventListener('drop', drop);
})

function dragStart(e) {
    draggedElement = e.target;
    draggedElement.style.opacity = 0.5;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd(e) {
    draggedElement.style.opacity = 1;
}

function drop(e){
    var element = e.target;
    
    while(element.classList.contains('news')===false){
        element = element.parentElement;
    }
 
    if(draggedElement!==null && draggedElement!==element){
        const items = Array.from(element.parentElement.children);
        dropElementIndex = items.indexOf(element);
        draggedElementIndex = items.indexOf(draggedElement);
        if(draggedElementIndex>dropElementIndex){
            element.parentElement.insertBefore(draggedElement, element);
        }
        else{
            element.parentElement.insertBefore(draggedElement, element.nextElementSibling);
        }
    }
}

// --------------------------------------------------------------------------------


// ----------------------------------------------------
const products = document.querySelectorAll('#product');
const productNames = document.querySelectorAll('.productName');
var selectionProducts = document.querySelectorAll('#selectionList #product');
var selectedProducts = document.querySelectorAll('#selectedList #product');
const angleRight = document.querySelector('.angleRight');
const anglesRight = document.querySelector('.anglesRight');
const angleLeft = document.querySelector('.angleLeft');
const anglesLeft = document.querySelector('.anglesLeft');



products.forEach((product,i) => {
    product.addEventListener('click', function() {
        if(product.classList.contains('productActive')){
            product.classList.remove('productActive');
            productNames[i].classList.remove('colorWhite');
        }
        else{
            product.classList.add('productActive');
            productNames[i].classList.add('colorWhite');
        }
    });
});


angleRight.addEventListener('click', function() {

    var activeProducts = document.querySelectorAll('#selectionList .productActive');
    activeProducts.forEach((activeProduct) => {
        // console.log(activeProduct);
        activeProduct.classList.remove('productActive');
        activeProduct.children[1].classList.remove('colorWhite');
        selectedList.append(activeProduct);
    });

});

anglesRight.addEventListener('click', function() {

    selectionProducts = document.querySelectorAll('#selectionList #product');

    selectionProducts.forEach((selectionProduct) => {
        // console.log(activeProduct);
        selectionProduct.classList.remove('productActive');
        selectionProduct.children[1].classList.remove('colorWhite');
        selectedList.append(selectionProduct);
    });

});

angleLeft.addEventListener('click', function() {

    var activeProducts = document.querySelectorAll('#selectedList .productActive');
    activeProducts.forEach((activeProduct) => {
        // console.log(activeProduct);
        activeProduct.classList.remove('productActive');
        activeProduct.children[1].classList.remove('colorWhite');
        selectionList.append(activeProduct);
    });

});

anglesLeft.addEventListener('click', function() {

    selectedProducts = document.querySelectorAll('#selectedList #product');

    selectedProducts.forEach((selectedProduct) => {
        // console.log(activeProduct);
        selectedProduct.classList.remove('productActive');
        selectedProduct.children[1].classList.remove('colorWhite');
        selectionList.append(selectedProduct);
    });

});

// ----------------------------------------------------

const selectionList = document.querySelector('#selectionList');
const selectedList = document.querySelector('#selectedList');

selectedProducts = document.querySelectorAll('#selectedList #product');
selectionProducts = document.querySelectorAll('#selectionList #product');

var draggedSelection = null;
var draggedSelected = null;

selectionProducts.forEach((selectionProduct) => {
    selectionProduct.addEventListener('click', function() {
        selectionProduct.draggable = true;
        selectionProduct.addEventListener('dragstart', function(e){
            draggedSelection = e.target;
        });
    });
});

selectedList.addEventListener('dragover', function(e){
    e.preventDefault();
});

selectedList.addEventListener('drop', function(e){
    e.preventDefault();
    if(draggedSelection!==null){
        selectedList.append(draggedSelection);
        draggedSelection = null;
    }
});

selectedProducts.forEach((selectedProduct) => {
    selectedProduct.addEventListener('click', function() {
        selectedProduct.draggable = true;
        selectedProduct.addEventListener('dragstart', function(e){
            draggedSelected = e.target;
        });
    });
});

selectionList.addEventListener('dragover', function(e){
    e.preventDefault();
});


selectionList.addEventListener('drop', function(e){
    e.preventDefault();
    if(draggedSelected!==null){
        selectionList.append(draggedSelected);
        draggedSelected = null;

    }
});


// -----------------------------------
const deleteBtn = document.querySelector('#deleteBtn');

deleteBtn.addEventListener('click', function() {
    selectedProducts = document.querySelectorAll('#selectedList #product');

    selectedProducts.forEach((selectedProduct) => {
        // console.log(activeProduct);
        selectedProduct.classList.remove('productActive');
        selectedProduct.children[1].classList.remove('colorWhite');
        selectionList.append(selectedProduct);
    });

});



const inputName = document.querySelector('.inputName');
const inputEmail = document.querySelector('.inputEmail');
const inputPhone = document.querySelector('.inputPhone');
const inputDeliveryTime = document.querySelector('.inputDeliveryTime');
const inputAddress = document.querySelector('.inputAddress');
const inputSex = document.getElementsByClassName('radio');

const notifyName = document.querySelector('.notifyName');
const notifyEmail = document.querySelector('.notifyEmail');
const notifyPhone = document.querySelector('.notifyPhone');
const notifyAddress = document.querySelector('.notifyAddress');
const notifyDeliveryTime = document.querySelector('.notifyDeliveryTime');
const notifySex = document.querySelector('.notifySex');

const registerBtn = document.querySelector('#registerBtn');

const customersWrap = document.querySelector('.listCustomers');


const customerInfo = '<div class="customerName"></div><div class="customerSex"></div><div class="customerAddress"></div><div class="customerTransfer"></div><div class="customerProduct"></div>'

registerBtn.addEventListener('click', function() {

    var isContinue = true;

    let sexValue = "";

    for (const sex of inputSex) {

        if (sex.checked) {
            sexValue = sex.value;
            notifySex.classList.remove('active');
            break;
        }
    }

    console.log(sexValue);

    if (!sexValue) {
        notifySex.textContent = '*Giới tính chưa được chọn';
        notifySex.classList.add('active');
        isContinue = false;
    }
      
    const nameValue = inputName.value.trim();
    
    if (nameValue ===''){
        notifyName.textContent = '*Họ và tên chưa được điền';
        notifyName.classList.add('active');
        inputName.classList.add('borderRed');
        isContinue = false;
    }
    else if (nameValue.split(' ').length < 2) {
        notifyName.classList.add('active');
        inputName.classList.add('borderRed');
        notifyName.textContent = '*Họ và tên chưa hợp lệ';
        isContinue = false;
    }
    else{
        notifyName.classList.remove('active');
        inputName.classList.remove('borderRed');
    }
    
    
    const addressValue = inputAddress.value.trim();

    if (addressValue ===''){
        notifyAddress.textContent = '*Địa chỉ không được để trống';
        notifyAddress.classList.add('active');
        inputAddress.classList.add('borderRed');
        isContinue = false;
    }
    else if (addressValue.split(' ').length < 2) {
        notifyAddress.classList.add('active');
        notifyAddress.textContent = '*Địa chỉ chưa hợp lệ';
        inputAddress.classList.add('borderRed');
        isContinue = false;
    }
    else{
        notifyAddress.classList.remove('active');
        notifyAddress.classList.remove('borderRed');

    }

    const phoneValue = inputPhone.value.trim();

    if (phoneValue ===''){
        notifyPhone.textContent = '*Số điện thoại không được để trống';
        notifyPhone.classList.add('active');
        inputPhone.classList.add('borderRed');
        isContinue = false;
    }
   else if (!/^0\d{9}$/.test(phoneValue)) {
        notifyPhone.classList.add('active');
        notifyPhone.textContent = '*Số điện thoại chưa hợp lệ';
        inputPhone.classList.add('borderRed');
        isContinue = false;
    }
    else{
        notifyPhone.classList.remove('active');
        inputPhone.classList.remove('borderRed');
    }
    
    
    const deliveryTimeValue = inputDeliveryTime.value.trim();
    console.log(deliveryTimeValue);

    if (deliveryTimeValue ===''){
        notifyDeliveryTime.textContent = '*Ngày giao hàng chưa đúng định dạng';
        notifyDeliveryTime.classList.add('active');
        inputDeliveryTime.classList.add('borderRed');
        isContinue = false;
    }
    else if (new Date(deliveryTimeValue) < new Date()) {
        notifyDeliveryTime.classList.add('active');
        notifyDeliveryTime.textContent = '*Ngày giao không được nhỏ hơn ngày hiện tại';
        inputDeliveryTime.classList.add('borderRed');
        isContinue = false;
    }
    else{
        notifyDeliveryTime.classList.remove('active');
        inputDeliveryTime.classList.remove('borderRed');
        
    }


    
    const emailValue = inputEmail.value.trim();

    var regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue ===''){
        notifyEmail.textContent = '*Email không được để trống';
        notifyEmail.classList.add('active');
        inputEmail.classList.add('borderRed');
        isContinue = false;
    }
    else if (!regex.test(emailValue)) {
        notifyEmail.classList.add('active');
        notifyEmail.textContent = '*Email chưa hợp lệ';
        inputEmail.classList.add('borderRed');
        isContinue = false;
    }
    else{
        notifyEmail.classList.remove('active');
        inputEmail.classList.remove('borderRed');
    }
    
    if(!isContinue) return;

    var listCustomers = document.querySelectorAll('.customer');

    var newCustomer = document.createElement('div');
    newCustomer.classList.add('customer');
    newCustomer.classList.add('customerRow');
    if(listCustomers.length%2===1) newCustomer.classList.add('pink');

    newCustomer.innerHTML = customerInfo;

    newCustomer.children[0].textContent = nameValue;
    newCustomer.children[1].textContent = sexValue;
    newCustomer.children[2].textContent = addressValue;
    newCustomer.children[3].textContent = deliveryTimeValue;

    var selectedProductsName = document.querySelectorAll('#selectedList #product .productName');

    var productNames = "";
    selectedProductsName.forEach((selectedProductName) => {
        productNames += selectedProductName.textContent + ";";
    });

    if(productNames===""){
        alert("Chưa chọn sản phẩm")
        return;
    }        

    newCustomer.children[4].textContent = productNames;

    // console.log(listCustomers);
    customersWrap.append(newCustomer);

});



