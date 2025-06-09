// Simulation d'une vérification asynchrone
async function checkEmailAvailability(email) {
  // En réalité, vous feriez une requête à une API ici
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeDatabase = ["test@example.com", "existing@mail.com"];
      resolve(!fakeDatabase.includes(email));
    }, 1000);
  });
}

document.getElementById("email").addEventListener("input", async function (e) {
  const email = e.target.value;
  if (isValidEmail(email)) {
    const isAvailable = await checkEmailAvailability(email);
    const message = isAvailable
      ? "✅ Email disponible"
      : "❌ Email déjà utilisé";
    document.getElementById("emailError").textContent = message;
  }
});
