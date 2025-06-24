import {
  getUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./async/userManager.js";

(async () => {
  try {
    // 1. Récupérer tous les utilisateurs
    console.log("Tous les utilisateurs:", await getUsers());

    // 2. Ajouter un nouvel utilisateur
    const newUser = {
      id: Date.now(), // ID unique simple
      name: "Test User",
      email: "test@example.com",
    };
    await addUser(newUser);
    console.log("Utilisateur ajouté");

    // 3. Récupérer un utilisateur par ID
    const user = await getUserById(newUser.id);
    console.log("Utilisateur trouvé:", user);

    // 4. Mettre à jour l'utilisateur
    const updatedUser = await updateUser(newUser.id, { name: "Updated Name" });
    console.log("Utilisateur mis à jour:", updatedUser);

    // 5. Supprimer l'utilisateur
    await deleteUser(newUser.id);
    console.log("Utilisateur supprimé");

    // 6. Vérifier la suppression
    console.log("Utilisateurs restants:", await getUsers());
  } catch (error) {
    console.error("Erreur dans main.js:", error.message);
  }
})();
import { getOrders, getUserOrders, createOrder } from "./async/orderManager.js";

(async () => {
  try {
    // Créer une nouvelle commande
    const newOrder = await createOrder({
      userId: 1, // Doit correspondre à un utilisateur existant
      items: [
        { productId: 101, quantity: 2 },
        { productId: 205, quantity: 1 },
      ],
    });
    console.log("Nouvelle commande créée:", newOrder);

    // Récupérer les commandes d'un utilisateur
    const userWithOrders = await getUserOrders(1);
    console.log("Commandes de l'utilisateur:", userWithOrders);
  } catch (error) {
    console.error("Erreur dans l'exemple:", error.message);
  }
})();
