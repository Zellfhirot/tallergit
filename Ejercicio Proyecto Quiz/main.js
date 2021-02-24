const pregunta = document.getElementById("pre");
const resp1 = document.getElementById("ra");
const resp2 = document.getElementById("rb");
const resp3 = document.getElementById("rc");
const resp4 = document.getElementById("rd");
const btn = document.getElementById("btn");
let numpreg = 0;
let puntos = 0;

const preg = [
  {
    pregunta: "¿Que día llego el Perseverance a Marte?",
    respuesta: [
      "29 de Febrero 2021",
      "18 de Febrero de 2020",
      "12 de Febrero de 2021",
      "18 de Febrero de 2021",
    ],
    correcta: 3,
  },

  {
    pregunta: "¿Cual es la vocal que contiene la palabra STAR?",
    respuesta: ["b", "e", "a", "d"],
    correcta: 2,
  },
  {
    pregunta: "¿A cuanta distancia esta Proxima Centauri b?",
    respuesta: [
      "7.12 años luz",
      "4.24 años luz",
      "4.98 años luz",
      "Al lado de casa",
    ],
    correcta: 1,
  },

  {
    pregunta: "¿A cuanta temperatura esta la superficie solar?",
    respuesta: ["5778K", "10758K", "8950K", "12350K"],
    correcta: 0,
  },
  {
    pregunta: "¿Cuantos planetas puede haber en nuestra galaxia?",
    respuesta: [
      "1",
      "2000 millones",
      "6000 millones",
      "mas que los visitados por Yoda",
    ],
    correcta: 2,
  },
];

cambiarPregunta(numpreg);

numpreg = numpreg + 1;

btn.addEventListener("click", function () {
  if (document.querySelector("input:checked")) {
    let comprocheck = document.querySelector("input:checked").value;

    let respval = preg[numpreg - 1].correcta;

    if (comprocheck == respval) {
      puntos++;
      document.querySelector("input:checked").parentNode.classList.add("verde");
    } else {
      puntos = puntos - 0.5;
      document.querySelector("input:checked").parentNode.classList.add("rojo");
    }

    setTimeout(() => {
      
      if (numpreg == preg.length) {
        finalQuiz(puntos, preg.length);
      } else {
        limpiarClases();
        cambiarPregunta(numpreg);
        numpreg = numpreg + 1;
      }
    }, 1000);
  }
});


function limpiarClases() {
  if (document.querySelector("input:checked")) {
    document
      .querySelector("input:checked")
      .parentNode.classList.remove("verde");
    document.querySelector("input:checked").parentNode.classList.remove("rojo");
  }
}

function cambiarPregunta(numpreg) {
  let cambio = document.getElementById("pre");
  document.querySelector("#pre h1").innerText = preg[numpreg].pregunta;
  document.querySelector("#aa").innerText = preg[numpreg].respuesta[0];
  document.querySelector("#bb").innerText = preg[numpreg].respuesta[1];
  document.querySelector("#cc").innerText = preg[numpreg].respuesta[2];
  document.querySelector("#dd").innerText = preg[numpreg].respuesta[3];
}

function finalQuiz(puntos,total) {
  document.querySelector("#pre h1").innerText = "Has terminado...inutil!!!";
  document.querySelector(".resp")
    .innerText = `Has conseguido ${puntos} de ${total}`;
}
// const question = {
//     title: '¿A quién ha doblado más veces Constantino Romero?',
//     answers: [

//         {
//             a: "Clint Eastwood",
//             b: "clint-eastwood",
//             c: "actor",
//             d: "clint-eastwood",
//         },
//         title: '¿de color es el amarillo?',
//         {
//             label: "James Earl",
//             id: "james-earl",
//             name: "actor",
//             value: "james-earl",
//         },

//         {
//             label: "Roger Moore",
//             id: "roger-moore",
//             name: "actor",
//             value: "roger-moore",
//         },

//         {
//             label: "William Shatner",
//             id: "william-shatner",
//             name: "actor",
//             value: "william-shatner",
//         },

//         {
//             label: "Arnold Schwarzenegger",
//             id: "arnold-schwarzenegger",
//             name: "actor",
//             value: "arnold-schwarzenegger",
//         }

//     ]
// }
