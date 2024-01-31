document.addEventListener("DOMContentLoaded", function () {
  // Tablica z ciekawostkami
  let ciekawostkiZwierzat = [
    "Koty potrafią spać nawet 16 godzin dziennie.",
    "Psy potrafią rozpoznawać ludzkie emocje.",
    "Alpaki są spokrewnione z wielbłądami.",
    "Kapibary to największe gryzonie na świecie.",
    "Koty potrafią spać nawet 16 godzin dziennie.",
    "Psy potrafią rozpoznawać ludzkie emocje.",
    "Alpaki są spokrewnione z wielbłądami.",
    "Kapibary to największe gryzonie na świecie.",
    "Koty mruczą nie tylko z zadowolenia, ale także gdy są zestresowane.",
    "Psy mają doskonały słuch i potrafią usłyszeć dźwięki, których ludzkie uszy nie są w stanie wychwycić.",
    "Alpaki są znane z tego, że mają bardzo miękkie futro.",
    "Kapibary potrafią pływać, a nawet nurkować.",
    "Koty mają unikalne linie papilarne na swoich nosach, podobnie jak ludzie mają odciski palców.",
    "Psy mają ponad 220 milionów komórek węchowych, co sprawia, że są doskonałymi tropicielami.",
    "Alpaki są roślinożercami i głównie żywią się trawą.",
    "Kapibary są bardzo towarzyskimi zwierzętami i często żyją w grupach rodzinnych.",
    "Koty potrafią skakać nawet pięciokrotnie swojej wysokości w jednym skoku.",
    "Psy są uważane za jedne z najbardziej lojalnych zwierząt domowych.",
    "Alpaki pochodzą z Ameryki Południowej i są hodowane ze względu na ich miękkie futro oraz jako zwierzęta gospodarskie.",
    "Kapibary są zwierzętami o spokojnym temperamentu i są często trzymane jako zwierzęta domowe w niektórych regionach.",
  ];

  // Pobieramy elementy HTML
  let losujButton = document.getElementById("losujCiekawostke");
  let ciekawostkaTekst = document.getElementById("ciekawostkaTekst");

  // Obsługa naciśnięcia guzika
  losujButton.addEventListener("click", function () {
    // Losujemy indeks ciekawostki
    let losowyIndex = Math.floor(Math.random() * ciekawostkiZwierzat.length);

    // Wyświetlamy losową ciekawostkę
    ciekawostkaTekst.textContent = ciekawostkiZwierzat[losowyIndex];
  });
});
