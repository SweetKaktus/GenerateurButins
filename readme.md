# 🗡️ Générateur de Butins

Générateur de loot pour jeux de rôle sur table (TTRPG) avec une interface inspirée de divers univers médiévaux-fantastiques (type D&D, Warhammer, etc.).

## 📋 Description

Ce projet permet de générer aléatoirement du butin (loot) en fonction d'une catégorie d'adversaires et d'un nombre d'ennemis vaincus. Idéal pour les maîtres de jeu qui souhaitent dynamiser leurs parties de jeux de rôle !

## ✨ Fonctionnalités

- **Génération aléatoire de loot** basée sur un système de rareté (Commun, Rare, Épic, Légendaire)
- **6 catégories d'adversaires** : Pirates, Gobelins, Bandits de grands chemins, Vampires, Marchands, Soldats
- **30 objets uniques** avec des descriptions thématiques
- **Interface responsive** adaptée mobile et desktop
- **Design taverne médiévale** avec parchemins et ornements dorés
- **Système de couleurs** pour identifier rapidement les raretés

## 🎨 Aperçu

L'interface reprend l'esthétique d'une taverne médiévale avec :
- Fond bois sombre
- Sections parchemin
- Bordures dorées
- Police Metamorphous pour l'immersion
- Codes couleur pour les raretés :
  - 🔘 Commun : Gris
  - 🔵 Rare : Bleu
  - 🟣 Épic : Violet
  - 🟠 Légendaire : Orange/Or

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/SweetKaktus/GenerateurButins.git
```

2. Via VsCode et l'extension Live Server, ouvrez le fichier `index.html` avec 'Open with Live Server', ou via un petit serveur backend local si vous préférez (Apache, NodeJS, Flask, etc.).

## 📂 Structure du projet

```
GenerateurButins/
├── index.html          # Structure HTML
├── script.js           # Logique de génération de loot
├── utils.js            # Fonctions utilitaires
├── style.css           # Styles et design
└── README.md           # Documentation
```

## 🎲 Utilisation

1. **Choisissez une catégorie** d'adversaire dans le menu déroulant
2. **Indiquez le nombre** d'adversaires vaincus
3. **Cliquez sur "Générer le loot !"**
4. Consultez le tableau des objets obtenus avec leur rareté

Chaque adversaire peut fournir jusqu'à 2 objets selon la chance du tirage !

## 🛠️ Technologies utilisées

- **HTML5**
- **CSS3** (Flexbox, Grid, Responsive Design)
- **JavaScript ES6+** (Modules, Arrow functions)
- **Google Fonts** (Metamorphous)

## 📊 Système de rareté

Le générateur utilise un système de lancer de dés (d100) pour déterminer la rareté :
- **1** : Légendaire (1% de chance)
- **2-9** : Épic (8% de chance)
- **10-33** : Rare (24% de chance)
- **34-60** : Commun (27% de chance)
- **61-100** : Pas de loot (40% de chance)

## 🎯 Catégories disponibles

| Catégorie | Exemples d'objets |
|-----------|-------------------|
| **Pirate** | Coffret de joyaux, Médaillon maudit, Carte au trésor |
| **Gobelin** | Machine bizarrement fonctionnelle, Cœur greffé d'engrenages |
| **Bandit de grands chemins** | Faux documents, Arc, Dague en acier |
| **Vampire** | Bague d'envoûtement, Bottes silencieuses, Sabre à lame courbe |
| **Marchand** | Parchemin de boule de feu, Document de guilde |
| **Soldat** | Épée en acier, Chemise de maille, Médaille avec écusson |

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Proposer de nouveaux objets
- Ajouter des catégories d'adversaires
- Améliorer le design
- Corriger des bugs

## 📝 License

Ce projet est open source et disponible pour usage personnel et communautaire.

## 👤 Auteur

**SweetKaktus**

## 🙏 Remerciements

Projet inspiré par des univers médiévaux-fantastiques et les TTRPG en général.

---

⚔️ *Que vos dés soient bénis et votre butin généreux !* 🎲