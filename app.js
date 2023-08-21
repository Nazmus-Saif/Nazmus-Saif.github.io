// Top button
const panel1 = document.querySelector(".panel1");
panel1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // we can write behavior: "smooth" for a smoother transition
    });
})

// side bar in All button
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark"); // this is for cross button
const black = document.querySelector(".black"); // this is for black section not scroll
const sidebtn = document.querySelector(".panel-all"); // this is for all button

//for opening the side bar pressing all button
sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.style.overflow = "hidden"; // this is for lock the homepage scrolling when side bar is open
})
//for closing the side bar pressing cross button
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.style.overflow = "auto"; // this is for starting the homepage scrolling when side bar is closed
})
/* for top Signin button
const signinButton1 = document.querySelector('.nav-signin');
signinButton1.addEventListener("click", () => {
    window.location.href = "02 signin.html";
});
// for side bar Signin button
const signinButton2 = document.querySelector('.head');
signinButton2.addEventListener("click", () => {
    window.location.href = "02 signin.html";
});*/



