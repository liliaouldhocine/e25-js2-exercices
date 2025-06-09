// Exemple de validation d'email (simplifiée)
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Exemple de validation du mot de passe
function isValidPassword(password) {
  return password.length >= 8 && /\d/.test(password);
}
