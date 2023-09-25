function aboutContent(id){
    const about=document.createElement('div')
    about.setAttribute('id',id)
    about.innerHTML=`
        <h1>About Us</h1>
        `
    return about
}




function setBtnActive(id){
    const activeBtn= document.querySelector('.active')
    if(activeBtn){
        activeBtn.classList.remove('active')
    }

    const aboutBtn= document.getElementById(id)
    aboutBtn.classList.add('active')
}


function loadAboutpage(){
    setBtnActive('about-btn')
    console.log('about us page');
    const container=document.getElementById('content')
    container.innerHTML=''
   const about=aboutContent('about')
   container.append(about)
    
}
export default loadAboutpage