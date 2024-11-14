const blueShades = [
    "#b3d1ff", // 0–10 grzybów
    "#99c2ff", // 11–20 grzybów
    "#80b3ff", // 21–30 grzybów
    "#66a3ff", // 31–40 grzybów
    "#4d94ff", // 41–50 grzybów
    "#3385ff", // 51–60 grzybów
    "#1a75ff", // 61–70 grzybów
    "#0066ff", // 71–80 grzybów
    "#0052cc", // 81–90 grzybów
    "#003d99"  // 91+ grzybów
];

function getColorByDensity(grzyby) {
    if (grzyby <= 10) return blueShades[0];
    if (grzyby <= 20) return blueShades[1];
    if (grzyby <= 30) return blueShades[2];
    if (grzyby <= 40) return blueShades[3];
    if (grzyby <= 50) return blueShades[4];
    if (grzyby <= 60) return blueShades[5];
    if (grzyby <= 70) return blueShades[6];
    if (grzyby <= 80) return blueShades[7];
    if (grzyby <= 90) return blueShades[8];
    return blueShades[9];
}

async function updateMapColors() {
    try {
        // Pobieranie danych z pliku PHP
        const response = await fetch('http://localhost/mushroom-density.php');
        const data = await response.json();

        // Iterowanie przez województwa i ustawianie kolorów na mapie SVG
        for (const [region, grzyby] of Object.entries(data)) {
            const color = getColorByDensity(grzyby);
            const svgRegion = document.getElementById(region);

            if (svgRegion) {
                svgRegion.setAttribute('fill', color);
            }
        }
    } catch (error) {
        console.error('Błąd przy pobieraniu danych:', error);
    }
}

// Wywołanie funkcji podczas ładowania strony
updateMapColors();
