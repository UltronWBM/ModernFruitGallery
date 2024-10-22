const fruits = [
    { name: 'Apple', img: 'images/apple.jpg', info: 'An apple is a popular fruit known for its crisp texture and sweet-tart flavor. Apples are high in fiber, particularly pectin, which supports digestive health. They are also rich in antioxidants, including vitamin C, which helps strengthen the immune system. One medium apple (about 180 grams) provides approximately 95 calories, 25 grams of carbohydrates (19 grams from natural sugars), and 4 grams of dietary fiber. Apples also offer a small amount of potassium and vitamin K, making them a heart-healthy choice and a low-calorie snack option.' },
    { name: 'Banana', img: 'images/banana.jpg', info: 'A banana is a tropical fruit known for its soft texture and natural sweetness. Rich in essential nutrients, a medium-sized banana (about 118 grams) contains approximately 105 calories, 27 grams of carbohydrates, and 3 grams of dietary fiber. Bananas are particularly high in potassium, with around 422 milligrams per serving, which supports heart health and muscle function. They also provide vitamin C, vitamin B6, and a small amount of magnesium. The natural sugars in bananas, such as fructose, provide quick energy, making them a great snack for active lifestyles.' },
    { name: 'Cherry', img: 'images/cherry.jpg', info: 'Cherries are small, vibrant fruits known for their sweet-tart flavor and rich color. They are packed with nutrients, including powerful antioxidants like anthocyanins, which contribute to their red hue and support heart health. One cup (about 154 grams) of cherries provides around 97 calories, 25 grams of carbohydrates, and 3 grams of fiber. They are a good source of vitamin C, potassium, and provide small amounts of vitamin A and manganese. Cherries are also known for their anti-inflammatory properties, making them beneficial for muscle recovery and reducing oxidative stress' },
    { name: 'Grape', img: 'images/grape.jpg', info: 'Grapes are small, round fruits that come in various colors, including green, red, and purple. They are prized for their sweet, juicy flavor and are often eaten fresh, dried as raisins, or used in juices and wines. Grapes are rich in antioxidants, particularly resveratrol, which promotes heart health and reduces inflammation. One cup of grapes (about 151 grams) provides roughly 104 calories, 27 grams of carbohydrates, and 1.4 grams of fiber. They also offer vitamin C, vitamin K, and small amounts of potassium, supporting overall health.' },
    { name: 'Watermelon', img: 'images/watermelon.jpg', info: 'Watermelon is a hydrating fruit known for its sweet, refreshing taste and high water content—about 92%. This juicy fruit is low in calories, with one cup (about 152 grams) containing only 46 calories, 12 grams of carbohydrates, and 0.6 grams of fiber. Watermelon is an excellent source of vitamins A and C, supporting skin health and immune function. It also contains antioxidants like lycopene, which may reduce the risk of heart disease. Additionally, watermelon provides small amounts of potassium, aiding in muscle function and hydration.' },
    { name: 'Orange', img: 'images/orange.jpg', info: 'Oranges are citrus fruits celebrated for their bright flavor and high vitamin C content. A medium-sized orange (about 131 grams) contains approximately 62 calories, 15 grams of carbohydrates, and 3 grams of dietary fiber. In addition to being a powerful antioxidant, vitamin C supports immune function and skin health. Oranges also provide potassium, which helps regulate blood pressure, and folate, essential for cell function. Their juicy segments make them a refreshing snack, while their zesty flavor enhances various dishes and beverages.' },
    { name: 'Kiwi', img: 'images/kiwi.jpg', info: 'Kiwi, a small, oval fruit with a fuzzy brown exterior and vibrant green flesh, is celebrated for its unique flavor and impressive nutritional profile. A medium-sized kiwi (about 76 grams) contains approximately 42 calories, 10 grams of carbohydrates, and 2 grams of dietary fiber. Rich in vitamin C, vitamin K, and vitamin E, kiwis boost the immune system and promote skin health. They also provide potassium and antioxidants, supporting heart health and reducing inflammation. The refreshing taste and nutrient density make kiwis a delightful addition to any diet.' },
    { name: 'Peach', img: 'images/peach.jpg', info: 'Peaches are succulent stone fruits known for their sweet, juicy flesh and fragrant aroma. A medium peach (about 150 grams) contains approximately 58 calories, 14 grams of carbohydrates, and 2 grams of dietary fiber. They are rich in vitamins A and C, which support vision and immune health, respectively. Peaches also provide potassium and antioxidants, contributing to heart health and reducing inflammation. Their delightful taste makes them a favorite in salads, desserts, and smoothies, as well as a refreshing snack on their own.' },
    { name: 'Pineapple', img: 'images/pineapple.jpg', info: 'Pineapple is a tropical fruit renowned for its sweet, tangy flavor and juicy texture. A one-cup serving (about 165 grams) contains approximately 82 calories, 22 grams of carbohydrates, and 2.3 grams of dietary fiber. Rich in vitamin C, manganese, and bromelain, an enzyme that aids digestion, pineapples support immune function and reduce inflammation. Their vibrant taste makes them a popular choice in smoothies, salads, and savory dishes, providing both flavor and essential nutrients.' },
    { name: 'Strawberry', img: 'images/strawberry.jpg', info: 'Strawberries are vibrant red fruits known for their sweet flavor and juicy texture. A one-cup serving (about 152 grams) contains approximately 49 calories, 12 grams of carbohydrates, and 3 grams of dietary fiber. Rich in vitamin C, manganese, and antioxidants, strawberries promote heart health and support the immune system. Their versatility makes them a delightful addition to desserts, salads, and smoothies, providing both nutrition and a burst of color to any dish.' },
    { name: 'Chocolate', img: 'images/chocolate.jpg', info: 'You FOOL Chocolate is not a Fruit!' },
    { name: 'Blueberry', img: 'images/blueberry.jpg', info: 'Blueberries are small, round berries celebrated for their sweet flavor and deep blue color. A one-cup serving (about 148 grams) contains approximately 84 calories, 21 grams of carbohydrates, and 4 grams of dietary fiber. Blueberries are rich in antioxidants, particularly anthocyanins, which support heart health and may improve brain function. They are also a good source of vitamin C and vitamin K. Their versatility makes them a delicious addition to cereals, salads, and smoothies, providing a burst of flavor along with numerous health benefits.' },
];

const loadImagesButton = document.getElementById('loadImages');
const imageContainer = document.getElementById('imageContainer');

loadImagesButton.addEventListener('click', () => {
    displayImages();
});

function displayImages() {
    imageContainer.innerHTML = ''; // Clear previous images
    fruits.forEach(fruit => {
        const card = document.createElement('div');
        card.className = 'card';

        // Add click event listener to toggle flip
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${fruit.img}" alt="${fruit.name}">
                </div>
                <div class="card-back">
                    <h3>${fruit.name}</h3>
                    <p>${fruit.info}</p>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            const cardInner = card.querySelector('.card-inner');
            cardInner.classList.toggle('flipped');
        });

        imageContainer.appendChild(card);
    });
}
