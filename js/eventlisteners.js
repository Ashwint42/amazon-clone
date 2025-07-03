import { clientFilters } from "./filter.js";
import { applyFilters } from "./filter.js";
import { starMappings } from "./utils.js";

const addCheckBoxListeners = () => {
    let brandCheckboxes = document.querySelectorAll('.brand-checkbox');

    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const currentCheckbox = e.target;
            const currentCheckboxLabel = currentCheckbox.nextElementSibling;

            if (currentCheckbox.checked) {
                clientFilters.brands.unshift(currentCheckbox.name)
                currentCheckboxLabel.style.fontFamily = "Amazon-Ember-Bold";
            } else {
                clientFilters.brands.splice(clientFilters.brands.indexOf(currentCheckbox.name), 1);
                currentCheckboxLabel.style.fontFamily = "Amazon-Ember"
            }
            applyFilters();
        })
    })
}

const addStarListeners = () => {
    const starsWrapper = document.querySelector('.stars-wrapper');
    let stars = document.querySelectorAll('.stars');
    stars.forEach(star => star.addEventListener("click", (e) => {
        let clickedStar = star.getAttribute('id');
        let currentStarValue = e.target.dataset.starValue;
        clientFilters.rating = Number(currentStarValue);
        starsWrapper.innerHTML = starMappings[clickedStar];
        applyFilters();
        addStarListeners();
    }))
}

export { addCheckBoxListeners, addStarListeners }