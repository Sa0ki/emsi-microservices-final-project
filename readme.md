# Gestion des Produits - README

## Afficher les Produits
La page principale de cette application affiche une liste complète des produits disponibles. Les utilisateurs peuvent facilement parcourir les produits grâce à une interface conviviale.

## Rechercher les Produits
Un mécanisme de recherche puissant permet aux utilisateurs de trouver rapidement des produits spécifiques. Cela améliore l'expérience utilisateur en facilitant la localisation des articles recherchés.

## Pagination
Pour garantir une expérience utilisateur fluide, la liste des produits est paginée. Cela permet une navigation aisée, surtout lorsque la liste des produits est étendue.

## Supprimer un Produit
Les utilisateurs ont la possibilité de supprimer des produits de la liste. Cette fonctionnalité offre une gestion complète des produits en permettant la suppression d'articles obsolètes ou indésirables.

## Éditer un Produit
La fonction d'édition permet aux utilisateurs de modifier les détails d'un produit existant. Cela inclut la mise à jour des informations telles que le nom, la description, etc.

## Mettre à Jour un Produit
Les utilisateurs peuvent mettre à jour les informations d'un produit, y compris le prix, la quantité, etc.

## Authentification
Un système d'authentification sécurise l'accès aux fonctionnalités de gestion des produits. Certaines opérations sensibles ne sont accessibles qu'après authentification.

## Protection des Routes
Certaines fonctionnalités sont accessibles uniquement après l'authentification, assurant la sécurité des opérations sensibles.

## Consul Discovery
Utilisé pour la découverte des services dans un environnement distribué. Permet aux microservices de s'enregistrer et de découvrir d'autres services.

## Spring Cloud Config
Gère la configuration centralisée des microservices. Fournit un moyen de stocker et de récupérer la configuration des applications.

## Spring Cloud Gateway
Agit en tant que passerelle pour rediriger le trafic vers les microservices appropriés. Gère le routage et peut implémenter des fonctionnalités telles que l'équilibrage de charge.

## Customer Service
Gère les informations relatives aux clients, telles que les détails personnels. Peut gérer la création, la modification et la suppression des informations client.

## Inventory Service
Gère les informations sur les stocks de produits. Permet de consulter les niveaux de stock et de mettre à jour les quantités disponibles.

## Order Service
Gère le processus de création et de gestion des commandes. Peut impliquer la vérification des stocks, la gestion des paiements, etc.

## Consul Config (Billing Service)
Utilisé pour configurer le service de facturation. Peut stocker des informations de configuration spécifiques au service de facturation.

## Vault (Billing Service)
Utilisé pour la gestion des secrets et des informations sensibles dans le service de facturation. Assure la sécurité des données sensibles comme les clés d'API, les mots de passe, etc.

## Frontend Web avec Angular
Interface utilisateur développée en Angular pour interagir avec les microservices. Permet aux utilisateurs de parcourir les produits.
