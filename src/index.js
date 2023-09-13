import './style.css'



function loadHomepage(){
    console.log("hello world");
    let container = document.getElementById('container')


    let header = document.createElement("div")
    header.setAttribute('id', 'header')
    header.innerHTML=`<div id="logo">Logo</div>
            <div id="links">
                <div><a href="#">Home</a></div>
                <div><button onClick="${loadMenu()}">Menu</button></div>
                <div><a href="#">Contact</a></div>
                <div><a href="#">About Us</a></div>

            </div>`
        



    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.innerHTML=`
            <div id="about">
                <h1>Restaurant Name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quibusdam provident ea explicabo odio asperiores dolor modi pariatur enim eveniet nostrum quod error molestiae voluptates praesentium. Iste tempora alias provident.</p>
            </div>`

    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')
    footer.innerHTML=`
                <div>copyright @4Noyis</div>
`

    console.log(container);
    container.appendChild(header)
    container.appendChild(content)
    container.appendChild(footer)

}
function loadMenu(){
    let container= document.getElementById('container')
    const content = document.createElement('div')
    content.setAttribute('id', 'content')
    content.innerHTML=`
            <div id="about">
                <h1>Menu</h1>
                <p>Laksdjfaklsdjflkdjkfajklsd riores dolor modi pariatur enim eveniet nostrum quod error molestiae voluptates praesentium. Iste tempora alias provident.</p>
            </div>`


    container.appendChild(content)

}
loadHomepage()
