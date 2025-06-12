// 1. Gestionnaire de soumission (fonction classique + this)
function handleSubmit(event) {
  event.preventDefault();
  const name = this.nameInput.value;
  document.getElementById("output").textContent = `Bonjour, ${name} !`;
}

document.getElementById("nameForm").addEventListener("submit", handleSubmit);

// 2. Réinitialisation (fonction fléchée)
const resetForm = () => {
  document.getElementById("nameForm").reset();
  document.getElementById("output").textContent = "";
  document.getElementById("charCount").textContent = "0/50";
  document.getElementById("charCount").classList.remove("error");
};

document.getElementById("resetBtn").addEventListener("click", resetForm);

// 3. Compteur de caractères (fonction fléchée + événement input)
const updateCharCount = (event) => {
  const count = event.target.value.length;
  const charCountElement = document.getElementById("charCount");
  charCountElement.textContent = `${count}/50`;

  if (count > 50) {
    charCountElement.classList.add("error");
  } else {
    charCountElement.classList.remove("error");
  }
};

document.getElementById("nameInput").addEventListener("input", updateCharCount);
