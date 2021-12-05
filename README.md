# set-cardgame

Set nevű kártyajáték Javascriptben megvalósítva, eredetileg beadandóként készült. A játék logikája teljes, de hibakezelés néhány helyen hiányos, és néhány funkció is hiányzik belőle, amivel teljes lehetne a játékélmény.
Készítés dátuma: 2020. 11. 29. 

Játékszabály:

A játék célja hogy 3 kártyából álló SET-eket találjunk meg az asztalra lehelyezett 12 kártyából. Minden kártyának 4 tulajdonsága van, amik a következők:
- FORMA: ovális, hullámos, rombusz
- SZÍN: piros, zöld, lila
- SZÁM: 1, 2 vagy 3 forma
- TARTALOM: tömör, csíkos, üres

Egy SET 3 kártyából áll, amiben minden jellemzőt külön megvizsgálva, azoknak

- vagy minden kártyán azonosnak,
- vagy minden kártyán különbözőnek kell lennie.

Ennek a szabálynak MINDEN tulajdonság esetében meg kell felelnie a kiválasztott három lapnak. Más szavakkal: a forma vagy azononos mindhárom kártyán, vagy mindegyiken más; a szín vagy azonos mindhárom kártyán, vagy mindegyiken különböző, stb... Fordítva: ha a lapokon egy tulajdonságot vizsgálva 2 azonos és 1 különböző típus látható, akkor az nem SET. Például, ha 2 lap piros, 1 pedig lila, akkor az nem SET.

