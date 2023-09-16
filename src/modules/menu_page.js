function menuContent(id){
    const menu=document.createElement('div')
    menu.setAttribute('id',id)
    menu.innerHTML=`
        <h1> Menu</h1>
        `
    return menu
}




function setBtnActive(id){
    const activeBtn= document.querySelector('.tab.active')
    if(activeBtn){
        activeBtn.classList.remove('active')
    }

    const homeBtn= document.getElementById(id)
    homeBtn.classList.add('active')
}


function loadMenupage(){
    setBtnActive('menu-btn')
    console.log('menu page');
    const container=document.getElementById('content')
    container.innerHTML=''
   const menu=menuContent('menu')
   container.append(menu)
    
}
export default loadMenupage