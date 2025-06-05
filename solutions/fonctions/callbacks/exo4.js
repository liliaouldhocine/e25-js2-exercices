function diviser(a, b, callback) {
  if (b === 0) callback("Division par zéro !");
  else callback(null, a / b);
}
