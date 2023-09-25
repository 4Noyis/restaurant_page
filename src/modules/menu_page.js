function menuContent(id){
    const menu=document.createElement('div')
    menu.setAttribute('id',id)
    menu.innerHTML=`
        <h1>Menu <hr></hr></h1>
        <div class="food">
            <h2>Menu 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
            <h2>100$</h2>
            <br></br>
            <hr></hr>
        </div>
        <div class="food">
            <h2>Menu 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
            <h2>130$</h2>
            <br></br>
            <hr></hr>
        </div>
        <div class="food">
            <h2>Menu 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
            <h2>150$</h2>
            <br></br>
            <hr></hr>
        </div>
        `
    return menu
}




function setBtnActive(id){
    const activeBtn= document.querySelector('.active')
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