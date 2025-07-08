const starMappings = {
    "oneStar": `<i class="fa-solid fa-star stars" id="oneStar" data-star-value="1"></i>
                                    <i class="fa-regular fa-star stars" id="twoStar" data-star-value="2"></i>
                                    <i class="fa-regular fa-star stars" id="threeStar" data-star-value="3"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar" data-star-value="4"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar" data-star-value="5"></i>`,
    "twoStar": `<i class="fa-solid fa-star stars" id="oneStar" data-star-value="1" data-star-value="1"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar" data-star-value="2"></i>
                                    <i class="fa-regular fa-star stars" id="threeStar" data-star-value="3"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar" data-star-value="4"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar" data-star-value="5"></i>`,
    "threeStar": `<i class="fa-solid fa-star stars" id="oneStar" data-star-value="1"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar" data-star-value="2"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar" data-star-value="3"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar" data-star-value="4"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar" data-star-value="5"></i>`,
    "fourStar": `<i class="fa-solid fa-star stars" id="oneStar" data-star-value = "1"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar" data-star-value = "2"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar" data-star-value = "3"></i>
                                    <i class="fa-solid fa-star stars" id="fourStar" data-star-value = "4"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar" data-star-value = "5"></i>`,
    "fiveStar": `<i class="fa-solid fa-star stars" id="oneStar" data-star-value = "1"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar" data-star-value = "2"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar" data-star-value = "3"></i>
                                    <i class="fa-solid fa-star stars" id="fourStar" data-star-value = "4"></i>
                                    <i class="fa-solid fa-star stars" id="fiveStar" data-star-value = "5"></i>`,
}

const dynamicStarMapper = {
    1: {
        x: -18,
        y: -400
    },
    1.5: {
        x: -18,
        y: -400
    },
    2: {
        x: -18,
        y: -400
    },
    2.5: {
        x: -34,
        y: -400
    },
    3: {
        x: -18,
        y: -400
    },
    3.5: {
        x: -18,
        y: -400
    },
    4: {
        x: -210,
        y: -468
    },
    4.5: {
        x: -2,
        y: -400
    },
    5: {
        x: -194,
        y: -468
    }
}


async function fetchProducts() {
    let products;

    try {
        const data = await fetch("/amazon-clone/products.json");
        products = await data.json();
        return products;
    } catch (err) {
        console.log('Could not load products.json')
    }
}

function formatPrice(number) {
    return number.toLocaleString("en-IN");
}

function formatPriceUS(number) {
    return number.toLocaleString("en-US");
}


function calculateDiscountPercentage(price, originalPrice) {
    const discountPrice = originalPrice - price;
    const discountPercentage = Math.round((discountPrice / originalPrice) * 100);
    return discountPercentage;
}

export { starMappings, fetchProducts, formatPrice, formatPriceUS, calculateDiscountPercentage, dynamicStarMapper }