import fs from "fs/promises";
import path from "path";

const USER_FILE = path.join(process.cwd(), "data", "users.json");

async function getUsers() {
  try {
    const data = await fs.readFile(USER_FILE, "utf-8");
    const users = JSON.parse(data);

    if (!Array.isArray(users)) {
      throw new Error("Format de données invalide");
    }

    return users;
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; // Fichier non trouvé = tableau vide
    }
    throw error;
  }
}

async function saveUsers(users) {
  if (!Array.isArray(users)) {
    throw new Error("Les données à sauvegarder doivent être un tableau");
  }

  await fs.writeFile(USER_FILE, JSON.stringify(users, null, 2));
}

async function addUser(user) {
  const users = await getUsers();

  // Validation
  if (!user.id || !user.name || !user.email) {
    throw new Error("L'utilisateur doit avoir un id, un nom et un email");
  }

  // Vérifier les doublons
  if (users.some((u) => u.id === user.id)) {
    throw new Error(`Un utilisateur avec l'ID ${user.id} existe déjà`);
  }

  users.push(user);
  await saveUsers(users);
  return user;
}

async function getUserById(id) {
  const users = await getUsers();
  const user = users.find((u) => u.id === id);

  if (!user) {
    throw new Error(`Utilisateur avec ID ${id} non trouvé`);
  }

  return user;
}

async function updateUser(id, updates) {
  const users = await getUsers();
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    throw new Error(`Utilisateur avec ID ${id} non trouvé`);
  }

  // Fusionner les modifications
  users[index] = { ...users[index], ...updates };

  await saveUsers(users);
  return users[index];
}

async function deleteUser(id) {
  const users = await getUsers();
  const initialLength = users.length;

  const filteredUsers = users.filter((u) => u.id !== id);

  if (filteredUsers.length === initialLength) {
    throw new Error(`Utilisateur avec ID ${id} non trouvé`);
  }

  await saveUsers(filteredUsers);
  return true;
}

export { getUsers, addUser, getUserById, updateUser, deleteUser };
