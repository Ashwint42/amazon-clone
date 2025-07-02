import { starMappings } from "./utils.js";

const starsWrapper = document.querySelector('.stars-wrapper');

attachListener();

function attachListener() {
    let stars = document.querySelectorAll('.stars');
    stars.forEach(star => star.addEventListener("click", () => {
        let clickedStar = star.getAttribute('id');
        starsWrapper.innerHTML = "";
        starsWrapper.innerHTML = starMappings[clickedStar];
        attachListener();
    }))
}
