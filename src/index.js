import './style.css'
import loadPage from './modules/init_page'
import loadMenupage from './modules/menu_page'
import loadHomepage from './modules/home_page'
import loadContactpage from './modules/contact_page'
import loadAboutpage from './modules/about_page'

load()


function EventListiners(){
    const homebtn=document.getElementById('home-btn')
    homebtn.addEventListener('click',loadHomepage)
    const menubtn=document.getElementById('menu-btn')
    menubtn.addEventListener('click',loadMenupage)
    const contactbtn=document.getElementById('contact-btn')
    contactbtn.addEventListener('click',loadContactpage)
    const aboutbtn=document.getElementById('about-btn')
    aboutbtn.addEventListener('click',loadAboutpage)
}

function load(){
    loadPage()
    loadHomepage()
    EventListiners()
}

// butonlara active özelliği koy tıklanınca active açılsın başkasına tıklanınca 
// active hepsinde kapansın. main_page dosyası oluştur şuan bütün sayfayı yeniden  oluşturuyo
// home page için ayır.