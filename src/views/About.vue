<template>
  <div class="about">
    <div class="font-bold text-2xl mt-2 mb-3 underline">
      Arbeitszeitenrechner
    </div>
    <div class="text-justify">
      In dieser Anwendung können Sie Ihre Arbeitszeiten berechnen. In der ersten
      Spalte werden die Überstunden berechnet anhand dem vorher angegeben
      Arbeitsende. Die zweite Spalte berechnet das Arbeitsende anhand der
      gewünschte Über- / Minusstunden. Die berechneten Werte werden Grün
      markiert. Ist die gesetzlich verpflichtende Pause länger als die
      angegebene Pause wird auch diese in grün markiert.
    </div>
    <div class="text-justify mt-1">
      Die Daten, die in dieser Anwendung eingegeben werden, werden
      ausschließlich, und nur nach Ihrer Einwilligung, lokal auf Ihrem Endgerät (im local Storage) gespeichert.
    </div>
    <div class="text-justify mt-1">
      Sollten Sie Fehler finden oder Funktionswünsche haben, wenden Sie sich an den
      Entwickler über die im Folgenden angegebene E-Mail Adresse.
    </div>
    <div class="text-xl mt-4 mb-1 underline">App</div>
    <div>
      Entwickler:
      <a
        class="underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://markusscheuring.de"
        >Markus Scheuring</a
      >
    </div>
    <div>
      Kontakt:
      <a
        class="underline"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:apps@markusscheuring.de"
        >apps@markusscheuring.de</a
      >
    </div>
    <div>Version: 1.0</div>
    <div>
      <a
        class="underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/McFreshMuffin/workingTimeCalculator"
        >Quellcode auf Github ansehen</a
      >
    </div>
  </div>
</template>

<style scoped>
.about {
  margin-right: 10%;
  margin-left: 10%;
}
</style>