import './style.css'
import loadHomepage from './modules/home_page'

load()

function EventListiners(){
    const homebtn=document.getElementById('home-btn')
    homebtn.addEventListener('click',loadHomepage)

}
function load(){
    loadHomepage()
    EventListiners()
}

