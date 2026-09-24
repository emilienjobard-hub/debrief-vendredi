/* =====================================================================
   DÉBRIEF DU VENDREDI — réglages de la semaine (à éditer par la direction)
   Un seul fichier à toucher chaque semaine : la question joker.
   Garder la syntaxe : guillemets droits, virgules entre les lignes.
   ===================================================================== */
window.HEBDO_CONFIG = {

  /* 🃏 QUESTION JOKER — changer l'id à chaque nouvelle question (ex. J-2026-S41).
     type : "texte"  → réponse libre
            "choix"  → boutons ; remplir options (+ commentaire: true pour un champ libre en plus)
            "echelle"→ note de 1 à 5 ; bornes = libellés des deux extrémités            */
  joker: {
    id: "J-2026-S40",
    question: "Si tu avais une baguette magique pour ton poste lundi matin, tu changerais quoi en premier ?",
    type: "texte"
    // exemple choix :   type: "choix", options: ["Oui", "Non", "Ça dépend"], commentaire: true
    // exemple échelle : type: "echelle", bornes: ["Pas du tout", "Complètement"]
  },

  /* 📤 ENVOI — adresse proposée quand le téléphone ne sait pas partager des fichiers.
     [PROVISOIRE] à renseigner : boîte du référent, ou boîte commune « debrief ».   */
  envoi: {
    email: "",
    sujet_prefixe: "[DÉBRIEF]"
  },

  /* ⚠️ Qui prévenir tout de suite pour un sujet sécurité / qualité client */
  securite_contact: "ton chef d'équipe ou le responsable de production"
};
