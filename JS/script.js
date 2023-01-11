let headerBtn = document.querySelector(".headerBtn");
let headerModal = document.querySelector(".headerModal");
let headerClose = document.querySelector("#headerClose");

let saveBtn = document.querySelector(".oneBtn");
let saveModal = document.querySelector(".saveModal");
let saveClose = document.querySelector("#saveClose");

let offerBtnOne = document.querySelector("#offerOne");
let offerBtnTwo = document.querySelector("#offerTwo");
let offerModal = document.querySelector(".offerModal");
let offerClose = document.querySelector("#offerClose");

let resOne = document.querySelector("#resOne");
let resTwo = document.querySelector("#resTwo");
let resThree = document.querySelector("#resThree");
let resFour = document.querySelector("#resFour");
let resFive = document.querySelector("#resFive");
let resSix = document.querySelector("#resSix");
let resModal = document.querySelector(".resModal");
let resClose = document.querySelector("#resClose");

let saveModalTwo = document.querySelector(".saveModalTwo");
let saveModalBtn = document.querySelector(".sixthMain button");
let saveTwoClose = document.querySelector("#saveTwoClose");

let oneBtn = document.querySelector("#oneBtn");
let twoBtn = document.querySelector("#twoBtn");
let threeBtn = document.querySelector("#threeBtn");
let fourBtn = document.querySelector("#fourBtn");
let fiveBtn = document.querySelector("#fiveBtn");
let sixBtn = document.querySelector("#sixBtn");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");

let forthNavBtnAll = document.querySelectorAll(".forthNav li");
let forthNavInfoAll = document.querySelectorAll(".forthNavInfo");

oneBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    oneBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    one.style.display = "flex";
});
twoBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    twoBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    two.style.display = "flex";
});
threeBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    threeBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    three.style.display = "flex";
});
fourBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    fourBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    four.style.display = "flex";
});
fiveBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    fiveBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    five.style.display = "flex";
});
sixBtn.addEventListener("click", ()=>{
    forthNavBtnAll.forEach(item =>{
        item.className = "";
    })
    sixBtn.className = "active";
    forthNavInfoAll.forEach(item => {
        item.style.display = "none";
    });
    six.style.display = "flex";
});

headerBtn.addEventListener("click", ()=>{
    headerModal.style.display = "flex";
});
headerClose.addEventListener("click", ()=>{
    headerModal.style.display = "none";
});

saveBtn.addEventListener("click", ()=>{
    saveModal.style.display = "flex";
});
saveClose.addEventListener("click", ()=>{
    saveModal.style.display = "none";
});

offerBtnOne.addEventListener("click", ()=>{
    offerModal.style.display = "flex";
});
offerBtnTwo.addEventListener("click", ()=>{
    offerModal.style.display = "flex";
});
offerClose.addEventListener("click", ()=>{
    offerModal.style.display = "none"
});

resOne.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resTwo.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resThree.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resFour.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resFive.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resSix.addEventListener("click", ()=>{
    resModal.style.display = "flex";
});
resClose.addEventListener("click", ()=>{
    resModal.style.display = "none";
});

saveModalBtn.addEventListener("click", ()=>{
    saveModalTwo.style.display = "flex";
});
saveTwoClose.addEventListener("click", ()=>{
    saveModalTwo.style.display = "none";
});
