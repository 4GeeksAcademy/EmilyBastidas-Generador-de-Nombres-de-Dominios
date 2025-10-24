/* import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

window.onload = function (generatorDom) {

  let pronombre = ['nuestro', 'los', 'las', 'sus'];
  let adjetivo = ['mejores', 'grandes'];
  let sustantivo = ['ideas', 'corredor'];
  let dominios = ['.com'];


  for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let s = 0; s < sustantivo.length; s++) {

        console.log(pronombre[p] + adjetivo[a] + sustantivo[s] + dominios[0]);
      }
    }
  }

};

