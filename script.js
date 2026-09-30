const navlink = document.querySelectorAll("header nav a")
const button = document.querySelectorAll(".resume-btn")
const logolink = document.querySelector(".logo")
const sections = document.querySelectorAll("section")
const menuIcon = document.querySelector("#menu-btn")
const navbar = document.querySelector("header nav")

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
})

const activePage = ()=>{
    const barBox = document.querySelector(".bar-box")
    const header = document.querySelector("header")
    navlink.forEach(link=>{
        link.classList.remove("active")
    })
    header.classList.remove("active")
    setTimeout(() => {
        header.classList.add("active")
    }, 1100);
    barBox.classList.remove("active")
    setTimeout(() => {
        barBox.classList.add("active")
    }, 1100);
    sections.forEach(section=>{
        section.classList.remove('active')
    })
    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")

}

navlink.forEach((link,idx)=>{
    link.addEventListener("click",()=>{
        if(!link.classList.contains("active")){
            activePage();

            link.classList.add("active")
            setTimeout(() => {
                sections[idx].classList.add("active")
                
            }, 1100);
        }
    })

})

logolink.addEventListener("click",()=>{
    if (!navlink[0].classList.contains("active")) {
        activePage()

        navlink[0].classList.add("active")
        setTimeout(() => {
            sections[0].classList.add("active")
            
        }, 1100);
        
    }
})

button.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
        const resumedetail = document.querySelectorAll(".resume-details")
        button.forEach(btn=>{
            btn.classList.remove("active")
        })
        btn.classList.add("active")
        resumedetail.forEach(details=>{ 
            details.classList.remove("active")
        })
        resumedetail[idx].classList.add("active")
    })
})

const arrowleft = document.querySelector(".navigation .left")
const arrowright = document.querySelector(".navigation .right")

let idx = 0;

const activePortfolio = ()=>{
    const imgSlide = document.querySelector(".portfolio-carousel .image-slide")
    const portfolioDetail = document.querySelectorAll(".portfolio-detail")
    imgSlide.style.transform = `translateX(calc(${idx * -100}% - ${idx * 2}rem))`

    portfolioDetail.forEach(detail=>{
        detail.classList.remove("active")
    })

    portfolioDetail[idx].classList.add("active")
}

arrowleft.addEventListener("click", () => {
    if (idx > 0) {
        idx--;
    } else {
        idx = 2;
    }

    activePortfolio();
});

arrowright.addEventListener("click", () => {
    if (idx < 2) {
        idx++;
    } else {
        idx = 0;
    }

    activePortfolio();
});