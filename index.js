// DEV
// const urlApiInventario = 'http://localhost:3000/inventario';
// const urlApiFactura = 'http://localhost:3000/factura';
// const urlApiProveedores = 'http://localhost:3000/proveedores';
// const urlApiDescuentos = 'http://localhost:3000/descuentos';

// NON PROD
// const urlApiInventario = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/inventario';
// const urlApiFactura = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/factura';
// const urlApiProveedores = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/proveedores';
// const urlApiDescuentos = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/descuentos';

// PROD
const urlApiInventario = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/inventario.json';
const urlApiFactura = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/factura.json';
const urlApiProveedores = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/proveedores.json';
const urlApiDescuentos = 'https://jorgelmunozp.github.io/fruteria-facturacion-inventario-backend-express/descuentos.json';

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
                  <td> ${inventario[0].detail.nombre} </td>
                  <td> ${formatterMiles.format(inventario[0].detail.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario[0].detail.ventas)} </td>
                  <td> ${formatterMiles.format(inventario[0].detail.kilos)} </td>
                  <td> ${formatterPeso.format(inventario[0].detail.total)} </td>
                </tr>   
                <tr>
                  <td> ${inventario[1].detail.nombre} </td>
                  <td> ${formatterMiles.format(inventario[1].detail.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario[1].detail.ventas)} </td>
                  <td> ${formatterMiles.format(inventario[1].detail.kilos)} </td>
                  <td> ${formatterPeso.format(inventario[1].detail.total)} </td>
                </tr> 
                <tr>
                  <td> ${inventario[2].detail.nombre} </td>
                  <td> ${formatterMiles.format(inventario[2].detail.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario[2].detail.ventas)} </td>
                  <td> ${formatterMiles.format(inventario[2].detail.kilos)} </td>
                  <td> ${formatterPeso.format(inventario[2].detail.total)} </td>
                </tr>      
                <tr>
                  <td> ${inventario[3].detail.nombre} </td>
                  <td> ${formatterMiles.format(inventario[3].detail.cantidad)} </td>
                  <td> ${formatterMiles.format(inventario[3].detail.ventas)} </td>
                  <td> ${formatterMiles.format(inventario[3].detail.kilos)} </td>
                  <td> ${formatterPeso.format(inventario[3].detail.total)} </td>
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
                  <th> Valor Kilo </th>
                  <th> Proveedor </th>
                </tr>
                <tr>
                  <td> ${proveedores[0].detail.nombre} </td>
                  <td> ${proveedores[0].detail.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores[0].detail.valorkilo)} </td>
                  <td> ${proveedores[0].detail.proveedor} </td>
                </tr>   
                <tr>
                  <td> ${proveedores[1].detail.nombre} </td>
                  <td> ${proveedores[1].detail.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores[1].detail.valorkilo)} </td>
                  <td> ${proveedores[1].detail.proveedor} </td>
                </tr> 
                <tr>
                  <td> ${proveedores[2].detail.nombre} </td>
                  <td> ${proveedores[2].detail.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores[2].detail.valorkilo)} </td>
                  <td> ${proveedores[2].detail.proveedor} </td>
                </tr>      
                <tr>
                  <td> ${proveedores[3].detail.nombre} </td>
                  <td> ${proveedores[3].detail.descripcion} </td>
                  <td> ${formatterPeso.format(proveedores[3].detail.valorkilo)} </td>
                  <td> ${proveedores[3].detail.proveedor} </td>
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
                  <td> ${descuentos[0].detail.cantidad} </td>
                  <td> ${descuentos[0].detail.descuento} %</td>
                </tr>   
                <tr>
                  <td> ${descuentos[1].detail.cantidad} </td>
                  <td> ${descuentos[1].detail.descuento} %</td>
                </tr> 
                <tr>
                  <td> ${descuentos[2].detail.cantidad} </td>
                  <td> ${descuentos[2].detail.descuento} %</td>
                </tr>      
                <tr>
                  <td> ${descuentos[3].detail.cantidad} </td>
                  <td> ${descuentos[3].detail.descuento} %</td>
                </tr>  
              </table>
            </div>
      `
  });