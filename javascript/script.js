const animate = () => {
    let flag = document.getElementById('flag');
    flag.classList.toggle('curve-visible');
}

const toggleNav = () => {
    let sidenav = document.getElementById('sidenav');
    sidenav.classList.toggle('sidenav-visible');
}

let links = document.getElementsByClassName('sidenav');
for(let a of links[0].children) {
    a.addEventListener("click", toggleNav);
}

document.onclick = (event) => {
    if(event.target.id === 'closebtn' || event.target.id === 'ham') 
        return;
    
    let sideNav = event.target.closest('.main-container').lastElementChild.lastElementChild;
    if(sideNav.classList.contains('sidenav-visible'))
        toggleNav();
}