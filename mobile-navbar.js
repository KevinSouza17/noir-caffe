class MobileNavbar{
    constructor(mobileMenu, navList,navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";
}

addClikEvent() {
    this.mobileMenu.addEventListener("click",() => console.log)
    (" hey");
}

Initi()  {
    if(this.mobileMenu){
    this.addClikEvent()
    }
    return this;
}