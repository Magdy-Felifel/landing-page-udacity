/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// getting all sections from DOM to one Array
const sections = [...document.querySelectorAll("section")];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//creating list of sections by extracting it by it's id
//then creating fragment from the DOM
function buildNavBar(){
    const ul = document.getElementById("navbar__list");
    const fragment =document.createDocumentFragment();
    //loop through sections to define li name and link for each one
    sections.forEach(section => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        //define link text content from rxtracting it from section data-nav
        link.textContent = section.dataset.nav;
        link.href = `#${section.id}`;
        link.classList.add("menu__link");
        //using addEventListener method to scroll smoothly using event object and click as parameters to the section you click in the navigation bar
        link.addEventListener("click", (e) =>{
            e.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        });
        li.appendChild(link);
        fragment.appendChild(li);
    })
    ul.appendChild(fragment);
}
//calling the function to build the Navigation bar
buildNavBar();
window.addEventListener("scroll", addActiveClass);
function addActiveClass() {
    //loop through sections
    sections.forEach((section) => {
        //removing class "your-active-class" from all sections
        section.classList.remove("your-active-class");
        //calculating which section in viewport using getoundingClientRect method defining it as variable sectionTop
        const sectionTop = section.getBoundingClientRect().top;
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        // if section is in viewport add class "your-active-class" and "active-section"
        if(sectionTop > 0 && sectionTop <= 300){
            // Add class 'active' to section when near top of viewport
            section.classList.add("your-active-class");
            activeLink.classList.add("active-section");
        // else remove class "your-active-class" and "active-section" from the section and the link in navigation bar    
        }else{
            section.classList.remove("your-active-class");
            activeLink.classList.remove("active-section");
        }
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


