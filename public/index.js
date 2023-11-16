// const urlApiInventario = 'http://localhost:3000/inventario';
// const urlApiFactura = 'http://localhost:3000/proveedores';
// const urlApiProveedores = 'http://localhost:3000/frutas';
// const urlApiDescuentos = 'http://localhost:3000/descuentos';
// const urlApiInventario = 'http://192.168.18.249:8800/inventario';
// const urlApiFactura = 'http://192.168.18.249:8800/proveedores';
// const urlApiProveedores = 'http://192.168.18.249:8800/frutas';
// const urlApiDescuentos = 'http://192.168.18.249:8800/descuentos';
const urlApiInventario = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/inventario.json';
const urlApiFactura = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/factura.json';
const urlApiProveedores = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/proveedores.json';
const urlApiDescuentos = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/descuentos.json';

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
              <hr></hr>
              <h4> Inventario </h4>
              <hr></hr>
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
              <hr></hr>
              <h4> Última Factura Recibida</h4> 
              <hr></hr>
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

  fetch(urlApiProveedores)                 //API REST para la simulación de la tabla PROVEEDORES de la base de datos
  .then(response => response.json())
  .then(proveedores => {
      let contenidoFrutas = document.getElementById('contenidoFrutas');

      contenidoFrutas.innerHTML = `
            <div>
              <hr></hr>
              <h4> Proveedores </h4>
              <hr></hr>
              <table border='1'>
                <tr>
                  <th> Fruta </th>
                  <th> Descripción </th>
                  <th> Valor (Kilo) </th>
                  <th> Proveedor </th>
                </tr>  
                <tr>
                  <td> ${proveedores.fruta1.nombre} </td>
                  <td> ${proveedores.fruta1.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores.fruta1.valorkilo)} </td>
                  <td> ${proveedores.fruta1.proveedor} </td>
                </tr>   
                <tr>
                  <td> ${proveedores.fruta2.nombre} </td>
                  <td> ${proveedores.fruta2.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores.fruta2.valorkilo)} </td>
                  <td> ${proveedores.fruta2.proveedor} </td>
                </tr> 
                <tr>
                  <td> ${proveedores.fruta3.nombre} </td>
                  <td> ${proveedores.fruta3.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores.fruta3.valorkilo)} </td>
                  <td> ${proveedores.fruta3.proveedor} </td>
                </tr>      
                <tr>
                  <td> ${proveedores.fruta4.nombre} </td>
                  <td> ${proveedores.fruta4.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores.fruta4.valorkilo)} </td>
                  <td> ${proveedores.fruta4.proveedor} </td>
                </tr>  
              </table>
            </div>
      `
  });

  fetch(urlApiDescuentos)                 //API REST para la simulación de la tabla DESCUENTOS de la base de datos
  .then(response => response.json())
  .then(descuentos => {
      let contenidoDescuentos = document.getElementById('contenidoDescuentos');

      contenidoDescuentos.innerHTML = `
            <div>
              <hr></hr>
              <h4> Descuentos </h4>
              <hr></hr>
              <table border='1'>
                <tr>
                  <th> Cantidad </th>
                  <th> Descuento </th>
                </tr>  
                <tr>
                  <td> ${descuentos.descuento1.cantidad} </td>
                  <td> ${descuentos.descuento1.descuento} </td>
                </tr>   
                <tr>
                  <td> ${descuentos.descuento2.cantidad} </td>
                  <td> ${descuentos.descuento2.descuento} </td>
                </tr> 
                <tr>
                  <td> ${descuentos.descuento3.cantidad} </td>
                  <td> ${descuentos.descuento3.descuento} </td>
                </tr>      
                <tr>
                  <td> ${descuentos.descuento4.cantidad} </td>
                  <td> ${descuentos.descuento4.descuento} </td>
                </tr>  
              </table>
            </div>
      `
  });