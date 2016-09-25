//
// message.js
//
// v1.0.1
//
// Cyril Weller
// cyril.weller@protonmail.com
//
// GNU GPLv3 licence
//

//
// getMessage
//    displays message depending on the user language
//
function getMessage(language){

  // Switch-case for every language
  switch (language) {

    // French
    case "fr":
      return "Cette page a été correctement effacée de votre historique de navigation";
      break;

    // Default : English
    default:
      return "This page was successfully deleted from your browsing history";
      break;
  }

}
