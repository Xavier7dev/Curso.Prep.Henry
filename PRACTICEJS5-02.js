
function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
    this.saludar = function() {
      return `Hola, mi nombre es ${this.nombre}`
    }
  }
  return Usuario;
}

Usuario.prototype.saludar = function() {
  return `Hola, mi nombre es ${this.nombre}`
}







function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero === 1 || numero === 0)  {
    return false
  }
   for( var i = 2; i > numero; i++) {
    if(i % numero === 0) {
      return false
    } 
    if(i % numero !== 0 ) {
      return true
    }
  }
}
esPrimo()












function continueStatemet(numero){
  let array1=[];
  let cont=0;
  while(cont<10){
    cont++;
    if (cont===5){
      // array1.push(numero);
      continue;
    }
    numero=numero +2;
    array1.push(numero);
  }
  return array1;
}
continueStatemet(1)







function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array1=[];
  let cont=0;
  while(cont<10){
    cont++;
    if (cont===5){
      // array1.push(numero);
      continue;
    }
    numero=numero +2;
    array1.push(numero);
    }
  return array1;
}
continueStatement(1);