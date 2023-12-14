Afficher les produits :
La page principale affiche la liste complète des produits disponibles.

Chercher les produits :
Un mécanisme de recherche permet aux utilisateurs de trouver rapidement des produits spécifiques.

Pagination :
La liste des produits est paginée pour améliorer la convivialité lorsque la liste est étendue.

Supprimer un produit :
Les utilisateurs peuvent supprimer des produits de la liste.

Éditer un produit :
Fonctionnalité d'édition permettant de modifier les détails d'un produit existant.

Mettre à jour un produit :
Possibilité de mettre à jour les informations d'un produit, y compris le prix, la quantité, etc.

Authentification :
Système d'authentification pour sécuriser l'accès aux fonctionnalités de gestion des produits.

Protection des routes :
Certaines fonctionnalités sont accessibles uniquement après l'authentification, assurant la sécurité des opérations sensibles.

Consul Discovery :

Utilisé pour la découverte des services dans un environnement distribué.
Permet aux microservices de s'enregistrer et de découvrir d'autres services.
Spring Cloud Config :

Gère la configuration centralisée des microservices.
Fournit un moyen de stocker et de récupérer la configuration des applications.
Spring Cloud Gateway :

Agit en tant que passerelle pour rediriger le trafic vers les microservices appropriés.
Gère le routage et peut implémenter des fonctionnalités telles que l'équilibrage de charge.
Customer Service :

Gère les informations relatives aux clients, telles que les détails personnels.
Peut gérer la création, la modification et la suppression des informations client.
Inventory Service :

Gère les informations sur les stocks de produits.
Permet de consulter les niveaux de stock et de mettre à jour les quantités disponibles.
Order Service :

Gère le processus de création et de gestion des commandes.
Peut impliquer la vérification des stocks, la gestion des paiements, etc.
Consul Config (Billing Service) :

Utilisé pour configurer le service de facturation.
Peut stocker des informations de configuration spécifiques au service de facturation.
Vault (Billing Service) :

Utilisé pour la gestion des secrets et des informations sensibles dans le service de facturation.
Assure la sécurité des données sensibles comme les clés d'API, les mots de passe, etc.
Frontend Web avec Angular :

Interface utilisateur développée en Angular pour interagir avec les microservices.
Permet aux utilisateurs de parcourir les produits.