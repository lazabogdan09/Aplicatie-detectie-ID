# Aplicație detecție ID

>Aplicația constă intr-un exemplu de formular în care trebuie validat un document de identificare (buletin, pașaport, permis de conducere, etc.). Acesta se poate încarca în format imagine png/jpg sau scana cu ajutorul camerei. Acest program a fost realizat cu [TensorFlow.js](https://www.tensorflow.org/js/) versiunea 3.6.0 și [Angular CLI](https://github.com/angular/angular-cli) versiunea 11.2.11. 

## Model utilizat

>Modelul a fost antrenat cu ajutorul [Teachable Machine by Google](https://teachablemachine.withgoogle.com/train/image). Pentru antrenarea modelului au fost utilizate date din dataset-ul [MIDV-2020](http://l3i-share.univ-lr.fr/MIDV2020/midv2020.html). Puteți citi mai multe despre acesta accesând următorul [articol](https://arxiv.org/ftp/arxiv/papers/2107/2107.00396.pdf).

## Instalarea modulelor NPM

>În terminalul de comandă se rulează comanda `npm install`. Aceasta va instala toate modulele necesare executării programului.

## Server de dezvoltare

>În terminal se rulează `ng serve` pentru a creea un server local. Navigați în browser la urmatoarea adresă `http://localhost:4200/`. Aplicația se va actualiza după fiecare modificare efectuată în cod.

## Schelă cod

>Pentru generarea de noi componente se introduce în terminal `ng generate component componentName`. Se mai pot genera de asemenea: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construirea aplicației

>Rulați `ng build` în terminal pentru a construi aplicația. Artefactele de construcție vor fi stocate în directorul `dist/`.

## Efectuarea de teste unitare

>Rulați `ng test` în terminal pentru a rula teste unitare via [Karma](https://karma-runner.github.io).

## Efectuarea de teste end-to-end

>Rulați `ng e2e` în terminal pentru a rula teste end-to-end via [Protractor](http://www.protractortest.org/).

## Mai multe informații

>Pentru a obține informații rulați `ng help` sau navigați pe pagina [Angular CLI Overview and Command Reference](https://angular.io/cli).
