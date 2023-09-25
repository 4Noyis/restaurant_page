function contactContent(id){
    const contact=document.createElement('div')
    contact.setAttribute('id',id)
    contact.innerHTML=`
        <h1>Contact</h1>
        `
    return contact
}




function setBtnActive(id){
    const activeBtn= document.querySelector('.active')
    if(activeBtn){
        activeBtn.classList.remove('active')
    }

    const contactBtn= document.getElementById(id)
    contactBtn.classList.add('active')
}


function loadContactpage(){
    setBtnActive('contact-btn')
    console.log('contact page');
    const container=document.getElementById('content')
    container.innerHTML=''
    const contact=contactContent('contact')
    container.append(contact)
    
}

export default loadContactpage