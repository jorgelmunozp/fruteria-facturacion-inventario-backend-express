// const urlApiInventario = 'http://localhost:3000/inventario';
// const urlApiFactura = 'http://localhost:3000/factura';
// const urlApiFrutas = 'http://localhost:3000/frutas';
// const urlApiInventario = 'http://192.168.18.249:8800/inventario';
// const urlApiFactura = 'http://192.168.18.249:8800/factura';
// const urlApiFrutas = 'http://192.168.18.249:8800/frutas';
const urlApiInventario = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/inventario.json';
const urlApiFactura = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/factura.json';
const urlApiFrutas = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/frutas.json';

const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});

fetch(urlApiInventario)                 //API REST para la simulación de la tabla INVENTARIO de la base de datos
  .then(response => response.json())
  .then(inventario => {
      let contenidoInventario = document.getElementById('contenidoInventario');

      contenidoInventario.innerHTML = `
            <div>  
              <p> Inventario </p>
              <table border='1'>
                <tr>
                  <th> Fruta </th>
                  <th> Inventario </th>
                  <th> Ventas </th>
                  <th> Kilos </th>
                  <th> Total </th>
                </tr>  
                <tr>
                  <td> ${inventario.manzanas.nombre} </td>
                  <td> ${formatterMiles.format(inventario.manzanas.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario.manzanas.ventas)} </td>
                  <td> ${formatterMiles.format(inventario.manzanas.kilos)} </td>
                  <td> ${formatterPeso.format(inventario.manzanas.total)} </td>
                </tr>   
                <tr>
                  <td> ${inventario.bananos.nombre} </td>
                  <td> ${formatterMiles.format(inventario.bananos.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario.bananos.ventas)} </td>
                  <td> ${formatterMiles.format(inventario.bananos.kilos)} </td>
                  <td> ${formatterPeso.format(inventario.bananos.total)} </td>
                </tr> 
                <tr>
                  <td> ${inventario.mangos.nombre} </td>
                  <td> ${formatterMiles.format(inventario.mangos.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario.mangos.ventas)} </td>
                  <td> ${formatterMiles.format(inventario.mangos.kilos)} </td>
                  <td> ${formatterPeso.format(inventario.mangos.total)} </td>
                </tr>      
                <tr>
                  <td> ${inventario.fresas.nombre} </td>
                  <td> ${formatterMiles.format(inventario.fresas.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario.fresas.ventas)} </td>
                  <td> ${formatterMiles.format(inventario.fresas.kilos)} </td>
                  <td> ${formatterPeso.format(inventario.fresas.total)} </td>
                </tr>  
              </table>
            </div>
      `
  });

  fetch(urlApiFactura)                 //API REST para la simulación de la tabla FACTURA de la base de datos
  .then(response => response.json())
  .then(factura => {
      let contenidoFactura = document.getElementById('contenidoFactura');

      contenidoFactura.innerHTML = `
            <div>
              <p> Última Factura Recibida</p> 
              <table border='1'>
                  <tr>
                    <th> Número </th>
                    <th> Fruta </th>
                    <th> Kilos </th>
                    <th> Precio </th>
                    <th> Subtotal </th>
                    <th> Descuento </th>
                    <th> Total </th>
                    <th> Vendedor </th>
                  </tr>  
                  <tr>
                  <td rowspan="4">${factura.id}</td>
                    <td> ${factura.detalle.manzanas.nombre} </td>
                    <td> ${formatterMiles.format(factura.detalle.manzanas.kilos)} </td>
                    <td> ${formatterPeso.format(factura.detalle.manzanas.precio)} </td>
                    <td> ${formatterPeso.format(factura.detalle.manzanas.subtotal)} </td>
                    <td> ${formatterPeso.format(factura.detalle.manzanas.descuento)} </td>
                    <td> ${formatterPeso.format(factura.detalle.manzanas.total)} </td>
                    <td rowspan="4">${factura.vendedor}</td>
                  </tr>   
                  <tr>
                    <td> ${factura.detalle.bananos.nombre} </td>
                    <td> ${formatterMiles.format(factura.detalle.bananos.kilos)} </td>
                    <td> ${formatterPeso.format(factura.detalle.bananos.precio)} </td>
                    <td> ${formatterPeso.format(factura.detalle.bananos.subtotal)} </td>
                    <td> ${formatterPeso.format(factura.detalle.bananos.descuento)} </td>
                    <td> ${formatterPeso.format(factura.detalle.bananos.total)} </td>
                  </tr> 
                  <tr>
                    <td> ${factura.detalle.mangos.nombre} </td>
                    <td> ${formatterMiles.format(factura.detalle.mangos.kilos)} </td>
                    <td> ${formatterPeso.format(factura.detalle.mangos.precio)} </td>
                    <td> ${formatterPeso.format(factura.detalle.mangos.subtotal)} </td>
                    <td> ${formatterPeso.format(factura.detalle.mangos.descuento)} </td>
                    <td> ${formatterPeso.format(factura.detalle.mangos.total)} </td>
                  </tr>      
                  <tr>
                    <td> ${factura.detalle.fresas.nombre} </td>
                    <td> ${formatterMiles.format(factura.detalle.fresas.kilos)} </td>
                    <td> ${formatterPeso.format(factura.detalle.fresas.precio)} </td>
                    <td> ${formatterPeso.format(factura.detalle.fresas.subtotal)} </td>
                    <td> ${formatterPeso.format(factura.detalle.fresas.descuento)} </td>
                    <td> ${formatterPeso.format(factura.detalle.fresas.total)} </td>
                  </tr>  
                </table>
            </div>
      `
  });

  fetch(urlApiFrutas)                 //API REST para la simulación de la tabla FACTURA de la base de datos
  .then(response => response.json())
  .then(frutas => {
      let contenidoFrutas = document.getElementById('contenidoFrutas');

      contenidoFrutas.innerHTML = `
            <div>
              <p> Frutas Disponibles </p>
              <table border='1'>
                <tr>
                  <th> Fruta </th>
                  <th> Descripción </th>
                  <th> Valor (Kilo) </th>
                  <th> Proveedor </th>
                </tr>  
                <tr>
                  <td> ${frutas.fruta1.nombre} </td>
                  <td> ${frutas.fruta1.descripcion} </td>
                  <td> ${formatterPeso.format(frutas.fruta1.valorkilo)} </td>
                  <td> ${frutas.fruta1.proveedor} </td>
                </tr>   
                <tr>
                  <td> ${frutas.fruta2.nombre} </td>
                  <td> ${frutas.fruta2.descripcion} </td>
                  <td> ${formatterPeso.format(frutas.fruta2.valorkilo)} </td>
                  <td> ${frutas.fruta2.proveedor} </td>
                </tr> 
                <tr>
                  <td> ${frutas.fruta3.nombre} </td>
                  <td> ${frutas.fruta3.descripcion} </td>
                  <td> ${formatterPeso.format(frutas.fruta3.valorkilo)} </td>
                  <td> ${frutas.fruta3.proveedor} </td>
                </tr>      
                <tr>
                  <td> ${frutas.fruta4.nombre} </td>
                  <td> ${frutas.fruta4.descripcion} </td>
                  <td> ${formatterPeso.format(frutas.fruta4.valorkilo)} </td>
                  <td> ${frutas.fruta4.proveedor} </td>
                </tr>  
              </table>
            </div>
      `
  });