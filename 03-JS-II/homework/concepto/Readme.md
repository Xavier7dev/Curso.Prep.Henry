# **CONCEPTOS APRENDIDOS:**

# * `for`

### El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. La sintaxis del bucle for se muestra a continuación.

```javascript
for (incicalización; condición; actualización) {
  //Sentencias a ejecutar en cada iteración.
}
```
```javascript
for (let a = 1; a < 5; a++) {
  console.log(a);
}

//(let a = 1) declaramos la variable a = 1
//(a < 5) se ejecutará hasta que "a" siga siendo menor que "5"
//(a++) aumenta en 1 (a)
//se ejecuta el bucle
1
2
3
4
```
-----

# Operadores Lógicos
# * `||` (OR/O)
### En la programación clásica, el OR lógico esta pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false.
```Javascript
alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)
```
## *El operador OR || realiza lo siguiente:*

### Evalúa los operandos de izquierda a derecha.
### Para cada operando, convierte el valor a booleano. Si el resultado es true, se detiene y retorna el valor original de ese operando.
### Si todos los operandos han sido evaluados (todos eran false), retorna el ultimo operando.
----
----

# * `&&` (AND/Y)
## El operador AND es representado con dos ampersands &&:

## En la programación clásica, AND retorna true si ambos operandos son valores verdaderos y false en cualquier otro caso.

```Javascript
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```
----
----

# * `!` (NOT/NO)
## El operador booleano NOT se representa con un signo de exclamación !.

## El operador acepta un solo argumento y realiza lo siguiente:

* Convierte el operando al tipo booleano: true/false.
* Retorna el valor contrario.

```Javascript
alert(!true); // false
alert(!0); // true
```






