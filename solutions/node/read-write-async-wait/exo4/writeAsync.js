import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "products.json");

async function addProduct(newProduct) {
  try {
    // Validation du nouveau produit
    if (!newProduct.id || !newProduct.name) {
      throw new Error("Le produit doit avoir un id et un nom");
    }

    // 1. Lire les produits existants
    let products = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      products = JSON.parse(data);
      if (!Array.isArray(products)) {
        throw new Error("Format de données invalide");
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      // Si le fichier n'existe pas, on continue avec un tableau vide
    }

    // 2. Vérifier les doublons
    if (products.some((p) => p.id === newProduct.id)) {
      throw new Error(`Un produit avec l'ID ${newProduct.id} existe déjà`);
    }

    // 3. Ajouter le nouveau produit
    products.push(newProduct);

    // 4. Écrire les produits mis à jour
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));

    console.log("Produit ajouté avec succès!");
    return newProduct;
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error.message);
    throw error; // Propagation pour gestion ultérieure
  }
}

// Exemple d'utilisation avec auto-incrément d'ID
(async () => {
  try {
    // Générer un ID automatique si non fourni
    const products = JSON.parse(
      await fs.readFile(filePath, "utf-8").catch(() => "[]")
    );
    const nextId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    const monProduit = {
      id: nextId, // ID auto-généré
      name: "Nouveau Produit",
      price: 29.99,
    };

    const addedProduct = await addProduct(monProduit);
    console.log("Produit ajouté:", addedProduct);
  } catch (error) {
    console.error("Erreur dans le flux principal:", error.message);
  }
})();
