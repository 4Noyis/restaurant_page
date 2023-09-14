import './style.css'
import loadHomepage from './modules/home_page'
import loadMenupage from './modules/menu_page'

load()

function home(){
    const page=document.getElementById('content')
    const menu=document.getElementById('menu')
    if(page){
        return
    }else{
        menu.remove()
        loadHomepage()
    }
}
function EventListiners(){
    const homebtn=document.getElementById('home-btn')
    homebtn.addEventListener('click',home)
    const menubtn=document.getElementById('menu-btn')
    menubtn.addEventListener('click',loadMenupage)
}
function load(){
    loadHomepage()
    EventListiners()
}

// butonlara active özelliği koy tıklanınca active açılsın başkasına tıklanınca 
// hepsi kapansın. main_page dosyası oluştur şuan bütün sayfayı yenidne oluşturuyo
// home page için ayır.