document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const saveButton = document.querySelector("button:first-of-type"); // Primo pulsante (salva)
  const removeButton = document.querySelector("button:last-of-type"); // Secondo pulsante (rimuovi)

  // Recupera il valore salvato e lo mostra nell'input
  if (localStorage.getItem("nome")) {
    nameInput.value = localStorage.getItem("nome");
  }

  // Salva il valore nel localStorage
  saveButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita il refresh della pagina
    localStorage.setItem("nome", nameInput.value);
    console.log("Nome salvato:", nameInput.value);
  });

  // Rimuove il valore salvato
  removeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita il refresh della pagina
    localStorage.removeItem("nome");
    nameInput.value = ""; // Svuota l'input
    console.log("Nome rimosso");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let counter = sessionStorage.getItem("tempo")
    ? parseInt(sessionStorage.getItem("tempo"))
    : 0;
  const counterElement = document.getElementById("counter");

  function aggiornaContatore() {
    counter++;
    counterElement.textContent = counter;
    sessionStorage.setItem("tempo", counter);
  }

  setInterval(aggiornaContatore, 1000);
});
