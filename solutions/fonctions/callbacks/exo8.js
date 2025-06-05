function traiterTableau(arr, callback) {
  const resultat = [];
  for (const item of arr) {
    resultat.push(callback(item));
  }
  return resultat;
}
