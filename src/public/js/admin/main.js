function hendlHeaderMenu(headerMenuName){
    this.headerMenuName=document.querySelector(headerMenuName);
    let menuItemActive;
    this._this=this;
    this.menuItemsDisplay=(listMenuItems)=>{
        return()=>{
            if(listMenuItems.length>0){
                let rippleEle;
                listMenuItems.forEach((menuItem)=>{
                    menuItem.onclick=(event)=>{
                        rippleEle=menuItem.querySelector('.header__menu-list-items-link-ripple')
                        rippleEle.remove();
                        let posX = menuItem.offsetLeft
                        let posY = menuItem.offsetTop
                        let buttonWidth = menuItem.offsetWidth;
                        let buttonHeight = menuItem.offsetHeight;
                        if(buttonWidth> buttonHeight){
                            buttonHeight = buttonWidth;
                        }
                        else{
                            buttonWidth = buttonHeight;
                        }
                        let x = event.pageX - posX - buttonWidth / 2;
                        let y = event.pageY - posY - buttonHeight / 2;
                        let span=document.createElement("span")
                        span.classList.add('header__menu-list-items-link-ripple','rippleEffect')
                        span.style.height= buttonHeight;
                        span.style.width= buttonWidth;
                        span.style.top= y;
                        span.style.left= x;
                        menuItem.querySelector('.header__menu-list-items-link').appendChild(span);
                        
                        menuItem.classList.toggle('header__menu-list-items--active')
                        if(this.menuItemActive && this.menuItemActive!==menuItem ){
                            this.menuItemActive.classList.remove('header__menu-list-items--active')
                        }
                        this.menuItemActive=menuItem
                    }
                })
            }
        }
    }
    this.run=()=>{
        this.menuItemsDisplay(this.headerMenuName.querySelectorAll('.header__menu-list-items'))();
    }
}
function main(){
    const headerMenu= new hendlHeaderMenu('.header__menu');
    headerMenu.run();

}