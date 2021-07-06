function hendlHeaderMenu(sidebarName){
    this.sidebar=$(sidebarName);
    let menuItemActive;
    this._this=this;
    this.menuItemsDisplay=(listMenuItems)=>{
        return()=>{
            if(listMenuItems.length>0){
               
                listMenuItems.each((index)=>{
                    let menuItem=$(listMenuItems[index]);
                    // let rippleEle=$(menuItem).find(".sidebar-menu-list-items-link-ripple")
                    $(menuItem).click((event)=>{
                        $(menuItem).find(".sidebar-menu-list-items-link-ripple").remove();
                       
                        let posX = $(menuItem).offset().left,
                        posY = $(menuItem).offset().top,
                        buttonWidth = $(menuItem).width(),
                        buttonHeight = $(menuItem).height();
                        if(buttonWidth> buttonHeight){
                            buttonHeight = buttonWidth;
                        }
                        else{
                            buttonWidth = buttonHeight;
                        }
                        let x = event.pageX - posX - buttonWidth / 2;
                        let y = event.pageY - posY - buttonHeight / 2;
                        $(menuItem).find('.sidebar-menu-list-items-link').prepend("<span class='sidebar-menu-list-items-link-ripple'></span>")
                        $(menuItem).find(".sidebar-menu-list-items-link-ripple").css({
                            width: buttonWidth,
                            height: buttonHeight,
                            top: y + 'px',
                            left: x + 'px'
                        }).addClass("rippleEffect");
                        $(menuItem).toggleClass('sidebar-menu-list-items--active') 
                        $(this.menuItemActive).toggleClass('sidebar-menu-list-items--active')
                        if( this.menuItemActive && JSON.stringify(this.menuItemActive) === JSON.stringify($(menuItem))){
                            $(this.menuItemActive).removeClass('sidebar-menu-list-items--active');
                            this.menuItemActive=null
                        }
                        else{
                            this.menuItemActive=$(menuItem);
                        }
                    })
                })
            }
        }
    }
    this.run=()=>{
        this.menuItemsDisplay($(this.sidebar).find('.sidebar-menu-list-items'))();
    }
}
function hendlCollapse(){
    this.run=()=>{
        $(document).click(function(e) {
            if (!$(e.target).is('.panel-body')) {
                $('.collapse').collapse('hide');	    
            }
        });
    }
}
function main(){
    const headerMenu= new hendlHeaderMenu('.sidebar');
    const collapse = new  hendlCollapse();
    headerMenu.run();
    collapse.run()
   
}