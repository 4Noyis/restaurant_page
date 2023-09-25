

function createButton(id,text){
    const button=document.createElement('button')
    button.setAttribute('id',id)
    button.innerText=text
    return button
}
function createTabs(){
    const tabs= document.createElement('div')
    tabs.setAttribute('id','tabs')

    const homebtn=createButton('home-btn','Home')
    const menubtn=createButton('menu-btn','Menu')
    const contactbtn=createButton('contact-btn','Contact')
    const aboutbtn=createButton('about-btn','About Us')

    tabs.appendChild(homebtn)
    tabs.appendChild(menubtn)
    tabs.appendChild(contactbtn)
    tabs.appendChild(aboutbtn)

    return tabs
}

function createHeader(id){
    const header= document.createElement('div')
    header.setAttribute('id',id)
   
    const tabs=createTabs()
    header.innerHTML=`
    <div id="logo">Taikos
    <hr></hr>
    </div>
    `
    header.appendChild(tabs)
    return header
}


function createContent(id){
    const content=document.createElement('div')
    content.setAttribute('id',id)
   
   
    return content
}

function createFooter(id){
    const footer=document.createElement('div')
    footer.setAttribute('id',id)
    footer.innerHTML=`
        <div>copyright @4Noyis</div>`
    return footer
}


function loadPage(){
    

    console.log("hello world");
    const container=document.getElementById('container')

    
    const header=createHeader('header')   
    container.appendChild(header)
    const content=createContent('content')
    container.appendChild(content)
    const footer=createFooter('footer')
    container.appendChild(footer)

    
}

export default loadPage