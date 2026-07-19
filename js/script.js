emailjs.init({
    publicKey: "sXz1tcNmdJUdJHYL9"
});
/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/*=========================================
        MOBILE MENU
=========================================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});


/*=========================================
        REVEAL ANIMATION
=========================================*/

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();


/*=========================================
        COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function runCounters(){

const stats=document.querySelector(".stats");

const statsTop=stats.getBoundingClientRect().top;

if(statsTop<window.innerHeight-100 && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

}

}

window.addEventListener("scroll",runCounters);

runCounters();

/*==================================================
            LEXTECH SERVICES V3.0
==================================================*/

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    const learnBtn = card.querySelector(".learn-btn");

    learnBtn.addEventListener("click", () => {

        const isOpen = card.classList.contains("active");

        // Close every card
        serviceCards.forEach(otherCard => {

            otherCard.classList.remove("active");

            const otherBtn = otherCard.querySelector(".learn-btn");

            if (otherBtn) {

                otherBtn.textContent = "Learn More";

            }

        });

        // If the clicked card wasn't already open,
        // open only this one
        if (!isOpen) {

            card.classList.add("active");

            learnBtn.textContent = "Show Less";

        }

    });

});


/*==================================================
            REQUEST SERVICE
==================================================*/

function goToContact(service){

    const contact = document.querySelector("#contact");

    if(contact){

        contact.scrollIntoView({

            behavior:"smooth"

        });

    }

    const select = document.querySelector("#serviceSelect");

    if(select){

        select.value = service;

    }

    const message = document.querySelector("#message");

    if(message){

        message.value =
`Hello LEXTECH,

I'm interested in your "${service}" service.

I'd like to discuss my project and receive more information.

Looking forward to hearing from you.`;

    }

}
/*==================================================
            EMAILJS CONTACT FORM
==================================================*/

emailjs.init({
    publicKey: "sXz1tcNmdJUdJHYL9"
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const button = this.querySelector(".send-btn");

        const originalText = button.textContent;

        button.innerHTML =
'<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        button.disabled = true;

        const templateParams = {

            name: document.querySelector("#name").value,

            email: document.querySelector("#email").value,

            service: document.querySelector("#serviceSelect").value,

            message: document.querySelector("#message").value

        };

        emailjs.send(
            "service_k6r0zjt",
            "template_rdd7lps",
            templateParams
        )

        .then(() => {

    const status = document.querySelector(".form-status");

    status.className = "form-status success";

    status.textContent =
    "✓ Message sent successfully! We'll get back to you within 24 hours.";

    contactForm.reset();
button.textContent = "✓ Sent Successfully";

button.disabled = true;

setTimeout(() => {

    let timeLeft = 30;

    button.textContent = `Please wait (${timeLeft}s)`;

    const countdown = setInterval(() => {

        timeLeft--;

        if(timeLeft >= 0){

            button.textContent = `Please wait (${timeLeft}s)`;

        }else{

            clearInterval(countdown);

            button.textContent = originalText;

            button.disabled = false;

        }

    },1000);

},1500);
})

        .catch((error) => {

    console.error(error);

    const status = document.querySelector(".form-status");

    status.className = "form-status error";

    status.textContent =
    "Something went wrong. Please try again.";
          
    button.textContent = originalText;

    button.disabled = false;
});
});
}


/*=========================================
        ACTIVE NAV
=========================================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================================
        BACK TO TOP
=========================================*/

const topButton=document.querySelector("#topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("active");

}else{

topButton.classList.remove("active");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});