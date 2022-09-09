// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:c
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var cantidadArray = array.length;
  return array[cantidadArray - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var a = 0;
  while (a < array.length) {
    array[a] = array[a] + 1;
    //console.log(array);
    a++;
  }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var arrayLong = array.length - 1;
  array[arrayLong + 1] = elemento
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var arrayInit = array.unshift(elemento);
  return array; 
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === elemento) {
      console.log(array[i]);
      var existe = true
    } else {
    } 
  }
  if (existe === true) {
    return existe;
  }
  else {
    return false;
  }  
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numero = 0;
  for (var i = 0; i < numeros.length; i++) {
    numero = numero + numeros[i];
  }
  return numero;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var numero = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    numero = numero + resultadosTest[i];
  }
  return numero / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max = 0;
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  } 
  return max; 
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  resultado = 1
  if (arguments.length !== 0) {
    for (i = 0; i < arguments.length; i++) {
      resultado = resultado * arguments[i]
     //console.log(resultado + "=" +  resultado, "*" ,arguments[i] + " resultado = resultado * arguments[i]");   
    }
  }
  else {
  //console.log(0 + " porque el array está vacio");
  return 0;
  }
  //console.log(resultado + " Resultado de operación");
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  mayor = 0
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      mayor = mayor + 1
    }
  }
  return mayor;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    dia = "Es fin de semana";
  }
  else {
    dia = "Es dia Laboral";
  }
  return dia;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  nueves = ["" + n]
  for (var i = 0; i < nueves.length; i++) {
    if (nueves[0][0] == 9) {
      return true;
    }
    else {
      return false;
    }
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  contador = 0;
  n = 0;
  for (var i = 0; i < arreglo.length; i++) {
    n = n + 1
    if (arreglo[n] === arreglo[i]) {
      contador = contador + 1
      if (arreglo.length === (contador + 1)) {
        return true;
      }
    } 
    else {
      falso = false;
    }
  }
  return falso; 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  triMestre =  []
  mes1 = "Marzo"
  mes2 = "Noviembre"
  n = 0;
  for (var n = 0; n < array.length; n++) {  
    if (mes1 === array[n]) {
      for (var x = 0; x < array.length; x++) {
        if (mes2 === array[x]) {
          for (var i = 0; i < array.length; i++) {
            if ("Enero" === array[i]) {
                triMestre = [mes1, mes2, "Enero"]
                return triMestre;
            //  }
            }
          }  
        }  
      }
    }
  }
  if (triMestre !== triMestre.length) {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  arrayTwo = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100 && array[i] <= 200) {
      arrayTwo.push(array[i]);
    }
  }
  return arrayTwo
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  conta = 0;
  suma = 0;
  array = [];
  numero = numero + 2;
  for (var i = 0; i < 10; i++) {
    suma = conta + numero
    conta = conta + 2 
    array.push(suma)
    if (suma === array.length) {
      break 
    }
    else if (array.length === 10) {
      return array;
    }
  }
  return "Se interrumpió la ejecución";
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  conta = 0;
  array = []
  for (let i = 0; i < 10; i++) {
    if (i === 4) {
      continue
    }
  conta = conta + 2;
  suma = conta + numero;
  array.push(suma);  } 
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
