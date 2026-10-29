// Sceglie la lingua del sito: prima ?lang=en nell'indirizzo, poi l'ultima scelta salvata,
// altrimenti italiano. Così su Upwork puoi mandare il link .../?lang=en
(function () {
  var html = document.documentElement;
  var scelta = new URLSearchParams(location.search).get("lang");
  if (scelta !== "it" && scelta !== "en") {
    try { scelta = localStorage.getItem("lingua"); } catch (e) { scelta = null; }
  }
  html.setAttribute("data-lingua", scelta === "en" ? "en" : "it");

  window.cambiaLingua = function () {
    var nuova = html.getAttribute("data-lingua") === "it" ? "en" : "it";
    html.setAttribute("data-lingua", nuova);
    try { localStorage.setItem("lingua", nuova); } catch (e) {}
  };
})();
