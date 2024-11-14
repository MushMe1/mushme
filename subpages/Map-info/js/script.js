const colors = {
    1: "#1E3A8A",
    2: "#2563EB",
    3: "#3B82F6",
    4: "#60A5FA",
    5: "#93C5FD",
    6: "#BFDBFE"
};


const wojewodztwa = {
    "podkarpackie2": 1,
    "lubuskie2": 1,
    "pomorskie2": 1,
    "malopolskie2": 2,
    "swietokrzyskie2": 2,
    "warminsko_mazurskie2": 2,
    "dolnoslaskie2": 3,
    "mazowieckie2": 3,
    "slaskie2": 3,
    "kujawsko_pomorskie2": 4,
    "lodzkie2": 4,
    "wielkopolskie2": 4,
    "opolskie2": 5,
    "lubelskie2": 5,
    "zachodniopomorskie2": 6,
    "podlaskie2": 6
};

function colorMap() {
    Object.keys(wojewodztwa).forEach((woj) => {
        const wojElement = document.getElementById(woj);
        if (wojElement) {
            const category = wojewodztwa[woj];
            wojElement.style.fill = colors[category];
        }
    });
}

document.addEventListener("DOMContentLoaded", colorMap);
