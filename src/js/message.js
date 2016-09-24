//
// message.js
//
// v1.0.0
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

    case "fr":
      return "Cette page a été correctement effacée de votre historique de navigation";
      break;

    default:
      return "This page was successfully deleted from your browsing history";
      break;
  }

}
