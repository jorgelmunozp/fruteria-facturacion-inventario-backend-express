// const urlApiInventario = 'http://localhost:3000/inventario';
// const urlApiFactura = 'http://localhost:3000/factura';
// const urlApiUsuarios = 'http://localhost:3000/usuarios';
// const urlApiInventario = 'http://192.168.18.249:8800/inventario';
// const urlApiFactura = 'http://192.168.18.249:8800/factura';
// const urlApiUsuarios = 'http://192.168.18.249:8800/usuarios';
const urlApiInventario = 'http://185.199.108.153:80/inventario';
const urlApiFactura = 'http://185.199.108.153:80/factura';
const urlApiUsuarios = 'http://185.199.108.153:80/usuarios';
// const urlApiInventario = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/inventario';
// const urlApiFactura = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/factura';
// const urlApiUsuarios = 'https://jorgelmunozp.github.io/express-fruteria-inventario-backend/usuarios';

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
            <div class="columnaContenido">  
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
  })


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
  })



  fetch(urlApiUsuarios)                 //API REST para la simulación de la tabla USUARIOS de la base de datos
  .then(response => response.json())
  .then(usuarios => {
      let contenidoUsuarios = document.getElementById('contenidoUsuarios');

      contenidoUsuarios.innerHTML = `
            <div>
            <p> Usuarios </p>
              <table border='1'>
                  <tr>
                    <th> Nombre </th>
                    <th> Usuario </th>
                    <th> Contraseña </th>
                    <th> Perfil </th>
                  </tr>  
                  <tr>
                    <td> ${usuarios.user1.nombre} </td>
                    <td> ${usuarios.user1.user} </td>
                    <td> ${usuarios.user1.password} </td>
                    <td> ${usuarios.user1.perfil} </td>
                  </tr>   
                  <tr>
                    <td> ${usuarios.user2.nombre} </td>
                    <td> ${usuarios.user2.user} </td>
                    <td> ${usuarios.user2.password} </td>
                    <td> ${usuarios.user2.perfil} </td>
                  </tr> 
                  <tr>
                    <td> ${usuarios.user3.nombre} </td>
                    <td> ${usuarios.user3.user} </td>
                    <td> ${usuarios.user3.password} </td>
                    <td> ${usuarios.user3.perfil} </td>
                  </tr>      
                  <tr>
                    <td> ${usuarios.user4.nombre} </td>
                    <td> ${usuarios.user4.user} </td>
                    <td> ${usuarios.user4.password} </td>
                    <td> ${usuarios.user4.perfil} </td>
                  </tr>  
                  <tr>
                    <td> ${usuarios.user5.nombre} </td>
                    <td> ${usuarios.user5.user} </td>
                    <td> ${usuarios.user5.password} </td>
                    <td> ${usuarios.user5.perfil} </td>
                  </tr>  
                </table>
            </div>

      `
  })