import { applyFilters } from "./filter.js";
import { addCheckBoxListeners, addStarListeners } from "./eventlisteners.js";


async function main() {
    addStarListeners();
    addCheckBoxListeners();
    await applyFilters();
}

main();