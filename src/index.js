import './style.css'
import loadPage from './modules/init_page'
import loadMenupage from './modules/menu_page'
import loadHomepage from './modules/home_page'

load()

// function home(){
//     const page=document.getElementById('content')
//     const menu=document.getElementById('menu')
//     if(page){
//         return
//     }else{
//         menu.remove()
//         loadHomepage()
//     }
// }
function EventListiners(){
    const homebtn=document.getElementById('home-btn')
    homebtn.addEventListener('click',loadHomepage)
    const menubtn=document.getElementById('menu-btn')
    menubtn.addEventListener('click',loadMenupage)
}
function load(){
    loadPage()
    loadHomepage()
    EventListiners()
}

// butonlara active özelliği koy tıklanınca active açılsın başkasına tıklanınca 
// active hepsinde kapansın. main_page dosyası oluştur şuan bütün sayfayı yeniden  oluşturuyo
// home page için ayır.