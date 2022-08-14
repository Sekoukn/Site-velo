function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide(); 

var elem = document.querySelector('.wrapper'), 
div = document.querySelector('.move'), 
x = 0, 
y = 0, 
mousedown = false; 

// div event mousedown 
div.addEventListener('mousedown', function (e) { 
// mouse state set to true 
mousedown = true; 
// subtract offset 
x = div.offsetLeft - e.clientX; 
y = div.offsetTop - e.clientY; 
}, true); 

// div event mouseup 
div.addEventListener('mouseup', function (e) { 
// mouse state set to false 
mousedown = false; 
}, true); 

// element mousemove to stop 
elem.addEventListener('mousemove', function (e) { 
// Is mouse pressed 
if (mousedown) { 
// Now we calculate the difference upwards 
div.style.left = e.clientX + x + 'px'; 
div.style.top = e.clientY + y + 'px'; 
} 
}, true); 
