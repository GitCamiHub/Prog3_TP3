
// 1) Introducción a Javascript

// Ejercicio 2 
/*
let a = 3;
let b = 2;
let c = a + b;

console.log(a)
console.log(b)
console.log("Las suma de a y b es", c);

// Ejercicio 3

let nombre = prompt("¿Cuál es tu nombre?");
console.log("¡Hola " + nombre + "!");


// 2) Operadores lógicos y condicionales

// Ejercicio 1

let num1 = 50;
let num2 = 160;
let num3 = 32;

if ((num1 > num2) && (num1 > num3)) {
  console.log("El mayor de los tres números es: ", num1);
} else if ((num2 > num1) && (num2 > num3)) {
  console.log("El mayor de los tres números es: ", num2);
} else {
  console.log("El mayor de los tres números es: ", num3);
}

// Ejercicio 2

let numero = prompt("Ingresa un número y te diré si es par o impar.");

if (numero % 2 === 0) {
  console.log("El número " + numero + " es par.");
} else {
  console.log("El número " + numero + " es impar.");
}


// 3) Operadores de asignación y bucles

// Ejercicio 1

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Ejercicio 2

let numMayor;
do {
  numMayor = prompt("Ingresa un número mayor a 100.");

} while (numMayor <= 100);

console.log("Ingresaste un número mayor a 100: " + numMayor);


// 4) Funciones Javascript

// Ejercicio 1

const esPar = (num4) => {
  if (num4 % 2 === 0) {
    return "El número " + num4 + " es par: " + true;
  } else {
    return "El número " + num4 + " es par: " + false;
  }
};

console.log(esPar(8));
console.log(esPar(7));

// Ejercicio 2

const convertirCelsiusAFahrenheit = (valor) => {
  return valor + "°C son equivalentes a " + (valor * 1.8 + 32) + "°F";
};

console.log(convertirCelsiusAFahrenheit(30));


// 5) Objetos en Javascript

// Ejercicio 1

let persona = {
  nombre: "Mariela",
  edad: 30,
  ciudad: "Mendoza",
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};

console.log(persona.nombre+" tiene "+persona.edad+" años y vive en "+persona.ciudad);
let nuevaCiudad = prompt("Actualizar ciudad: ");
persona.cambiarCiudad(nuevaCiudad);
console.log(persona.nombre+" tiene "+persona.edad+" años y vive en "+persona.ciudad);

// Ejercicio 2

let anioActual = 2024;

let libro = {
  nombre: "El Quijote",
  autor: "Miguel de Cervantes",
  anio: 1605,
  esAntiguo: function() {
    if (anioActual - this.anio > 10){
      console.log("El libro '"+ this.nombre + "' es antiguo: "+ true);
    }else{
      console.log("El libro '"+ this.nombre + "' es antiguo: "+ false);
    }
  }
}

libro.esAntiguo();
*/

// 6) Arrays

// Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMult = [];

for (let i = 0; i < numeros.length; i++) {
  numerosMult.push(numeros[i] * 2);
}

console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + numerosMult);

// Ejercicio 2

let pares = [];

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log("Primeros 10 números pares: " + pares);


// 7) Introducción al DOM

// Ejercicio 1

const boton = document.getElementById("cambiarColor");

const parrafos = document.getElementById("texto");

const cambiarColorParrafo = () => {
  parrafos.classList.add("parrafoColor");
};

boton.addEventListener("click", () => {
  cambiarColorParrafo();
});

// Ejercicio 2

const botonForm = document.getElementById("boton-formulario");

const getDataInputs = () => {
  alert("Has ingresado: " + document.getElementById("input").value);
};

botonForm.addEventListener("click", () => {
  getDataInputs();
});


//  8) Eventos en DOM

// Ejercicio 1

const elementos = document.querySelectorAll("#elemento-lista li");

elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    console.log(elemento.textContent);
  });
});

// Ejercicio 2

const deshabilitar = document.getElementById("bloqueo");
const habilitar = document.getElementById("habilitar");
const input = document.getElementById("campo");

const bloquearInput = () => {
  input.classList.remove("campoH");
  input.classList.add("campoB");
  input.disabled = true;
};

const habilitarInput = () => {
  input.classList.remove("campoB");
  campo.classList.add("campoH");
  input.disabled = false;
};


deshabilitar.addEventListener("click", () => {
  bloquearInput();
});

habilitar.addEventListener("click", () => {
  habilitarInput();
});


// 9) LocalStorage

// Ejercicio 1

const mail = document.getElementById("campo-correo");
const botonGuardar = document.getElementById("guardar-correo");
const botonEliminar = document.getElementById("eliminar-correo");
const existeCorreo = document.getElementById("caja-correo");

const obtenerDataInput = () => {
  const correo = mail.value;
  localStorage.setItem("datos", JSON.stringify({ correo }))
  mostrarCorreo(); 
};

botonGuardar.addEventListener("click", () => {
  obtenerDataInput();

  const resultado = localStorage.getItem("datos");

  if (resultado) {
    console.log(JSON.parse(resultado));
  } else {
    console.log("Los datos no existen.");
  }

});

const mostrarCorreo = () => {
  const datos = localStorage.getItem("datos");
  if (datos) {
    const { correo } = JSON.parse(datos);
    existeCorreo.textContent = `Correo guardado: ${correo}`;
  } else {
    existeCorreo.textContent = '';
  
  }
};

mostrarCorreo();

botonEliminar.addEventListener('click', () => {
  localStorage.removeItem('datos');
  mostrarCorreo(); 
});



