const body = document.querySelector('body');
const home = document.querySelector('.home');
const mainLeft = document.querySelector('.main-left');
const mainRight = document.querySelector('.main-right');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const projectTitle = document.querySelector('.project-desc .title');
const projectImg = document.querySelector('.project img');
const projectDesc = document.querySelector('.project-desc .description');
const projectBorder = document.querySelector('.project-border');
const githubProject = document.querySelector('.github-project');
const visitProject = document.querySelector('.visit-project');
const githubLink = document.querySelector('.github-project a');
const projectLink = document.querySelector('.visit-project a');

var projectNumber = 1;
var opacity = 1;


function fadeOut() {
    projectTitle.style.opacity = "0"; 
    projectDesc.style.opacity = "0";
    projectImg.style.opacity = "0";
    projectBorder.style.opacity = "0";
    githubProject.style.opacity = "0";
    visitProject.style.opacity = "0";
}

function fadeIn() {
    projectTitle.style.opacity = "1"; 
    projectDesc.style.opacity = "1";
    projectImg.style.opacity = "1";
    projectBorder.style.opacity = "1";
    githubProject.style.opacity = "1";
    visitProject.style.opacity = "1";
}

function fadeInNoVisit() {
    projectTitle.style.opacity = "1"; 
    projectDesc.style.opacity = "1";
    projectImg.style.opacity = "1";
    projectBorder.style.opacity = "1";
    githubProject.style.opacity = "1";
}

function fadeIn2() {
    projectTitle.innerHTML = "DiamondHunter MapViewer<div>(JavaFX)</div>";
    projectDesc.innerHTML = "<div>A JavaFX group assignment during my&nbsp;</div>second year in university";
    projectImg.src = "img-projects/diamondhunter.PNG";
    githubLink.href = "https://github.com/andrehhh/SoftwareMaintenance-Grp19";
    setTimeout(fadeInNoVisit, 50);
}

function fadeIn3() {
    projectTitle.innerHTML = "A Responsive Website<div>(HTML&CSS)</div>";
    projectDesc.innerHTML = "<div>A responsive website&nbsp;</div>";
    projectImg.src = "img-projects/responsive.PNG";
    githubLink.href = "https://github.com/andrehhh/ResponsiveWeb";
    projectLink.href = "ResponsiveWeb";
    setTimeout(fadeIn, 50);
}

function fadeIn4() {
    projectTitle.innerHTML = "My Portfolio (Responsive)<div>(HTML&CSS)</div>";
    projectDesc.innerHTML = "<div>A resonsive and animated portfolio&nbsp;</div>made by myself in my free time";
    projectImg.src = "img-projects/portfolio.PNG";
    githubLink.href = "https://github.com/andrehhh/MyPortfolio"
    projectLink.href = "..";
    setTimeout(fadeIn, 50);
}

function fadeIn1() {
    projectTitle.innerHTML = "Web Inventory System<div>(PHP, MySQL)</div>";
    projectDesc.innerHTML = "<div>A personal project I did during my&nbsp;</div>2019 summer break";
    projectImg.src = "img-projects/inventory-1.PNG";
    githubLink.href = "https://github.com/andrehhh/WebInventory2019"
    projectLink.href = "WebInventory2019";
    setTimeout(fadeIn, 50);
}


const homeAbout = () => {
    home.style.transform = "translateX(100%)";
    home.style.transition = "1s ease-in-out";
    about.style.transform = "translateX(0%)";
    about.style.transition = "1s ease-in-out";
}

const aboutHome = () => {
    home.style.transform = "translateX(0%)";
    home.style.transition = "1s ease-in-out";
    about.style.transform = "translateX(-100%)";
    about.style.transition = "1s ease-in-out";
}

const homeProjects = () => {
    home.style.transform = "translateX(-100%)";
    home.style.transition = "1s ease-in-out";
    projects.style.transform = "translateX(0%)";
    projects.style.transition = "1s ease-in-out";
}

const projectsHome = () => {
    home.style.transform = "translateX(0%)";
    home.style.transition = "1s ease-in-out";
    projects.style.transform = "translateX(100%)";
    projects.style.transition = "1s ease-in-out";
}

const homeContact = () => {
    contact.style.transform = "translateY(0%)";
    contact.style.transition = "1s ease-in-out";
}

const projectDown = () => {

    if(projectNumber == 1) {
        fadeOut();
        setTimeout(fadeIn2, 300);
        projectNumber = 2;
    }
    else if(projectNumber == 2) {
        fadeOut();
        setTimeout(fadeIn3, 300);
        projectNumber = 3;
    }
    else if(projectNumber == 3) {
        fadeOut();
        setTimeout(fadeIn4, 300);
        projectNumber = 4;
    }
    else if(projectNumber == 4) {
        fadeOut();
        setTimeout(fadeIn1, 300);
        projectNumber = 1;
    }
}

const projectUp = () => {

    if(projectNumber == 1) {
        fadeOut();
        setTimeout(fadeIn4, 500);
        projectNumber = 4;
    }
    else if(projectNumber == 2) {
        fadeOut();
        setTimeout(fadeIn1, 500);
        projectNumber = 1;
    }
    else if(projectNumber == 3) {
        fadeOut();
        setTimeout(fadeIn2, 500);
        projectNumber = 2;
    }
    else if(projectNumber == 4) {
        fadeOut();
        setTimeout(fadeIn3, 500);
        projectNumber = 3;
    }
}