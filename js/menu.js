document.querySelector('.menu-img').onclick =() =>{
    let menu_show = document.querySelector('.header-list');
    
    if(menu_show.style.display === "block"){
        menu_show.style.display = "none";
    }else{
        menu_show.style.display = 'block';
    }

    
};