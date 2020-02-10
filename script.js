const body = document.querySelector('body');
const home = document.querySelector('.home');
const mainLeft = document.querySelector('.main-left');
const mainRight = document.querySelector('.main-right');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');


const projectsActive = () => {
    mainLeft.style.backgroundColor = "#00a6ed";
}

const projectsInactive = () => {
    mainLeft.style.backgroundColor = "#f6511d";
}

const aboutActive = () => {
    mainRight.style.backgroundColor = "#f6511d";
}

const aboutInactive = () => {
    mainRight.style.backgroundColor = "#00a6ed";
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