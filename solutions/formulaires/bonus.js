const checkUsername = async (username) => {
  // Simulation d'une requête API
  const fakeDatabase = ["admin", "test", "user123"];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!fakeDatabase.includes(username));
    }, 500);
  });
};

document.getElementById("username").addEventListener("input", async (e) => {
  const username = e.target.value;
  if (username.length >= 3) {
    const isAvailable = await checkUsername(username);
    const feedback = document.getElementById("usernameFeedback");
    feedback.textContent = isAvailable ? "✅ Disponible" : "❌ Déjà pris";
    feedback.style.color = isAvailable ? "green" : "red";
  }
});
