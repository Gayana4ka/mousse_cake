var modal = document.getElementById('modalPopup');
var btn = document.getElementById("myBtn");
var img = document.getElementsByClassName("modal__close")[0];
var body = document.querySelector("body");
var inputDelivery = document.querySelectorAll('.delivery__pickup');
var popupPay = document.getElementById('popupPay');
var btnPay = document.getElementById("myPay");
var imgPay = document.getElementsByClassName("popup-checkout__close")[0];

var news = document.getElementById('modalNews');
var details = document.getElementById("newsBtn");
var closeNewsModal = document.getElementsByClassName("modal__close_news")[0];









btnPay.onclick = activePay;
imgPay.onclick = closePay;

window.onclick = function(event) {
    if (event.target === popupPay) {
        closePay();
    }
};

function activePay() {
    popupPay.style.display = "block";
    body.style.overflow = "hidden";
    body.style.marginRight = "14px";
};

function closePay() {
    popupPay.style.display = "none";
    body.style.overflow = "auto";
    body.style.marginRight = "auto";
};

for (var i = 0; i < inputDelivery.length; i++) {
    inputDelivery[i].onchange = function () {

        var hiddenBlock = document.querySelector('#delivery-block');
        if (this.getAttribute('data-check')=='#delivery-block') {
            hiddenBlock.classList.add('active')
        }else {
            hiddenBlock.classList.remove('active')
        }
    }
}


btn.onclick = activePopup;

img.onclick = closePopup;



window.onclick =function(event) {
    if (event.target === modal) {
        closePopup();
    }
};

function activePopup() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
    body.style.marginRight = "14px";
};
function closePopup() {
    modal.style.display = "none";
    body.style.overflow = "auto";
    body.style.marginRight = "auto";
};
function openbox(id){
    display = document.getElementById(id).style.display;

    if(display==='none'){
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}


details.onclick = activeNews;
closeNewsModal.onclick = closeNews;

window.onclick =function(event) {
    if (event.target === news) {
        closeNews();
    }
};
function activeNews() {
    news.style.display = "block";
    body.style.overflow = "hidden";
    body.style.marginRight = "14px";
};
function closeNews() {
    news.style.display = "none";
    body.style.overflow = "auto";
    body.style.marginRight = "auto";
};








