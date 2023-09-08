let tablink = document.getElementsByClassName('tablink');
let aboutcontent = document.getElementsByClassName('about-content');
const opendiv = (para)=>{
    for(key of tablink){
        key.classList.remove('active-tab');
    }
    for(key of aboutcontent){
        key.classList.remove('active-content');
    }
    event.currentTarget.classList.add('active-tab');
    document.getElementById(para).classList.add('active-content');
}

const opensidenavitself = (entries, observer) => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let allDot = document.querySelectorAll('.spy-indicator a');
            for(key of allDot){
                key.classList.remove('active-side-nav');
            }
            document.querySelector(`.spy-indicator a[href='#${entry.target.id}']`).classList.add('active-side-nav');
        }
    });
}

const options = {
    threshold: 0.7
}

const observer = new IntersectionObserver(opensidenavitself, options);
const sections = document.querySelectorAll('.section');

sections.forEach(section =>{
    observer.observe(section);
})

const showNav = ()=>{
    nav = document.querySelector('.photo nav ul');
   nav.style.display = 'block';
}
const hideNav = ()=>{
    nav = document.querySelector('.photo nav ul');
    nav.style.display = 'none';
}

const seeAll = document.querySelector(".see");
seeAll.addEventListener("click", ()=>{
    alert("This section is under development");
})
