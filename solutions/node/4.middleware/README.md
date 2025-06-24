### **Bonnes Pratiques Complémentaires**

1. **Organisation des middlewares** :

   ```bash
   /middlewares
     /auth
       - jwt.js
       - roles.js
     /validation
       - users.js
       - products.js
     /utils
       - logger.js
       - rateLimit.js
     index.js # Exportations centralisées
   ```

2. **Middleware paramétrable** :

   ```javascript
   // middleware/roleCheck.js
   export const roleCheck = (requiredRole) => {
     return (req, res, next) => {
       if (req.user.role !== requiredRole) {
         return res.status(403).json({ error: "Forbidden" });
       }
       next();
     };
   };

   // Utilisation
   app.delete("/api/users/:id", roleCheck("admin"), userController.delete);
   ```

3. **Validation avec Zod** (alternative moderne) :

   ```javascript
   import { z } from "zod";

   const userSchema = z.object({
     name: z.string().min(3),
     email: z.string().email(),
     age: z.number().int().positive().optional(),
   });

   export const validateWithZod = (schema) => (req, res, next) => {
     try {
       schema.parse(req.body);
       next();
     } catch (err) {
       res.status(400).json({ errors: err.errors });
     }
   };

   // Utilisation
   app.post("/api/users", validateWithZod(userSchema), createUser);
   ```

Ces solutions montrent comment structurer des middlewares réutilisables et modulaires. Chaque exemple peut être étendu avec des cas réels comme :

- JWT authentication
- Upload file validation
- Cache control
- Request transformation
