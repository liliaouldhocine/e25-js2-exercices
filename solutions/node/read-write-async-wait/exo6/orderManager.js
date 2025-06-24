import fs from "fs/promises";
import path from "path";

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");
const USERS_FILE = path.join(process.cwd(), "data", "users.json");

// Fonction utilitaire pour lire un fichier JSON
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; // Fichier non trouvé = tableau vide
    }
    throw error;
  }
}

async function getOrders() {
  return readJsonFile(ORDERS_FILE);
}

async function getUsers() {
  return readJsonFile(USERS_FILE);
}

async function getUserOrders(userId) {
  try {
    const [orders, users] = await Promise.all([getOrders(), getUsers()]);

    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("Utilisateur non trouvé");

    return {
      user,
      orders: orders.filter((o) => o.userId === userId),
    };
  } catch (error) {
    console.error("Erreur dans getUserOrders:", error.message);
    throw error;
  }
}

async function createOrder(orderData) {
  try {
    const orders = await getOrders();
    const users = await getUsers();

    // Validation
    if (
      !orderData.userId ||
      !orderData.items ||
      !Array.isArray(orderData.items)
    ) {
      throw new Error("Données de commande invalides");
    }

    // Vérifier que l'utilisateur existe
    const userExists = users.some((u) => u.id === orderData.userId);
    if (!userExists) {
      throw new Error("Utilisateur spécifié n'existe pas");
    }

    // Générer un ID unique
    const newOrder = {
      ...orderData,
      id: orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1,
      date: new Date().toISOString(),
      status: "pending",
    };

    orders.push(newOrder);
    await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));

    return newOrder;
  } catch (error) {
    console.error("Erreur lors de la création de commande:", error.message);
    throw error;
  }
}

export { getOrders, getUserOrders, createOrder };
