import { starMappings } from "./utils.js";
import { filterByBrand } from "./filter.js";

const starsWrapper = document.querySelector('.stars-wrapper');

const stickyNav = document.querySelector('.sticky-nav')
console.log(stickyNav)

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


async function main() {
    console.log(await filterByBrand());
}

main();
