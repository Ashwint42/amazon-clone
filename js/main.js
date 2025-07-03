import { applyFilters } from "./filter.js";
import { addCheckBoxEvents, addRatingEvents, addSliderEvents, addWindowEvents } from "./eventlisteners.js";

async function main() {
    addWindowEvents();
    addRatingEvents();
    addCheckBoxEvents();
    addSliderEvents();
    await applyFilters();
}

main();