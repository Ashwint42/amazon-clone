import { clientFilters, applyFilters } from "./filter.js";
import { starMappings, formatPrice, formatPriceUS } from "./utils.js";

const addWindowEvents = () => {
    window.addEventListener('load', () => {
        const lowerBoundSlider = document.querySelector('.lower-bound-input');
        const upperBoundSlider = document.querySelector('.upper-bound-input');
        const minPrice = document.querySelector('.min-bound');
        const maxPrice = document.querySelector('.max-bound');

        let castedUpperValue = Number(upperBoundSlider.value);
        let castedLowerValue = Number(lowerBoundSlider.value);

        minPrice.innerHTML = formatPrice(castedLowerValue);
        if (castedUpperValue >= upperBoundSlider.max)
            maxPrice.innerHTML = formatPriceUS(castedUpperValue).concat("+");
        else
            maxPrice.innerHTML = formatPriceUS(castedUpperValue);


        clientFilters.maxPrice = castedUpperValue;
        clientFilters.minPrice = castedLowerValue;
    })

    window.addEventListener('resize', () => {
        applyFilters();
    })
}

const addCheckBoxEvents = () => {
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

const addRatingEvents = () => {
    const starsWrapper = document.querySelector('.stars-wrapper');
    let stars = document.querySelectorAll('.stars');
    stars.forEach(star => star.addEventListener("click", (e) => {
        let clickedStar = star.getAttribute('id');
        let currentStarValue = e.target.dataset.starValue;
        clientFilters.rating = Number(currentStarValue);
        starsWrapper.innerHTML = starMappings[clickedStar];
        applyFilters();
        addRatingEvents();
    }))
}


const addSliderEvents = () => {
    const lowerBoundSlider = document.querySelector('.lower-bound-input');
    const upperBoundSlider = document.querySelector('.upper-bound-input');
    const minPrice = document.querySelector('.min-bound');
    const maxPrice = document.querySelector('.max-bound');
    const priceSetterButton = document.querySelector('.slider-compute-button')

    upperBoundSlider.addEventListener('input', (e) => {
        if (Number(upperBoundSlider.value) <= Number(lowerBoundSlider.value))
            upperBoundSlider.value = Number(lowerBoundSlider.value) + 500;

        if (Number(upperBoundSlider.value) >= upperBoundSlider.max)
            maxPrice.innerHTML = formatPriceUS(Number(e.target.value)) + "+";
        else
            maxPrice.innerHTML = formatPriceUS(Number(e.target.value));
    })

    lowerBoundSlider.addEventListener('input', (e) => {
        minPrice.innerHTML = formatPrice(Number(e.target.value));

        if (Number(lowerBoundSlider.value) >= Number(upperBoundSlider.value))
            lowerBoundSlider.max = Number(upperBoundSlider.value) - 500;
    })

    priceSetterButton.addEventListener('click', () => {
        clientFilters.maxPrice = Number(upperBoundSlider.value);
        clientFilters.minPrice = Number(lowerBoundSlider.value);
        applyFilters();
    })
}

export { addCheckBoxEvents, addRatingEvents, addSliderEvents, addWindowEvents }