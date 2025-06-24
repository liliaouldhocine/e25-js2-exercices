export const validateUser = (req, res, next) => {
  const errors = [];
  const { name, email, age } = req.body;

  if (!name) errors.push("Name is required");
  if (!email || !email.includes("@")) errors.push("Valid email required");
  if (age && isNaN(age)) errors.push("Age must be a number");

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next(); // Passe au contrôleur si validation OK
};
