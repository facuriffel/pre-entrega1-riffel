let continuar = true;

while (continuar) {
  // Solicitar al usuario que ingrese un número
  let inputNumero = prompt("Ingrese el precio del producto (o escriba 'salir' para finalizar):");

  // Verificar si el usuario desea salir
  if (inputNumero.toLowerCase() === 'salir') {
    alert('Saliendo del programa.');
    continuar = false;
  } else {
    // Validar si el valor ingresado es un número
    let num = parseFloat(inputNumero);

    // Verificar si la conversión a número fue exitosa y el valor no es NaN
    if (!isNaN(num)) {
      // Calcular el 155% del número ingresado
      let resultado = num * 2.55;

      // Mostrar el resultado al usuario
      alert(`El resultado de sumarle el 155% a ${num} es: ${resultado}`);
    } else {
      // Mostrar un mensaje de error si el usuario no ingresó un número válido
      alert("Por favor, ingrese un número válido.");
    }
  }
}
