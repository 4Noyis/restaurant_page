
function mainContent(id){
    const content=document.createElement('div')
    content.setAttribute('id',id)
    content.innerHTML=`
        <h1>Restaurant Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quibusdam provident ea explicabo odio asperiores dolor modi pariatur enim eveniet nostrum quod error molestiae voluptates praesentium. Iste tempora alias provident.</p>
        `
    return content
}



function setBtnActive(id){
    const activeBtn= document.querySelector('.active')
    if(activeBtn){
        activeBtn.classList.remove('active')
    }

    const homeBtn= document.getElementById(id)
    homeBtn.classList.add('active')
}

function loadHomepage(){
    
    setBtnActive('home-btn')
    console.log("hello world");
    const container=document.getElementById('content')

    container.innerHTML=''

    const content=mainContent('about')
    container.append(content)
    
    
}

export default loadHomepage