// Funkcja do filtrowania grzybów
function filterMushrooms() {
  const filterValue = document.getElementById("atlas__filter").value;
  const searchQuery = document
    .getElementById("atlas__search")
    .value.toLowerCase();
  const mushrooms = document.querySelectorAll(".mushroom");

  mushrooms.forEach((mushroom) => {
    const isCategoryMatch =
      filterValue === "all" || mushroom.classList.contains(filterValue);
    const isNameMatch = mushroom
      .getAttribute("data-name")
      .toLowerCase()
      .includes(searchQuery);

    if (isCategoryMatch && isNameMatch) {
      mushroom.style.display = "block";
    } else {
      mushroom.style.display = "none";
    }
  });
}

// Obsługa zmiany na liście wyboru oraz w polu wyszukiwania
document
  .getElementById("atlas__filter")
  .addEventListener("change", filterMushrooms);
document
  .getElementById("atlas__search")
  .addEventListener("input", filterMushrooms);

// Na start pokazujemy wszystkie grzyby
filterMushrooms();
