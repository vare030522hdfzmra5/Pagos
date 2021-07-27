import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {

	function menu(evt) {
		window.location = "--------";
  }

return (

    <div>
      <h1>Negosio</h1>
      <p></p>
     <ul>

<ul class="nav">
				
				<li><a href="">RECARGAS ELECTRONICAS:</a>
					<ul>
						<li><a href="https://www.telcel.com/personas/telefonia/amigo/recarga-compra-ahora">Telcel<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Telcel_logo.svg/1280px-Telcel_logo.svg.png" align="center" width="120" height="60" alt="" /></a></li>
						<li><a href="https://www.unefon.com.mx/servicios/mi-unefon.php">Unefon<img src="https://www.unefon.com.mx/img/unefon-logo-color.png" align="center" width="100" height="60" alt="" /></a></li>
            <li><a href="https://tienda.movistar.com.mx/recarga-en-linea">Movistar<img src="https://logos-marcas.com/wp-content/uploads/2020/04/Movistar-Simbolo.png" align="center" width="100" height="60" alt="" /></a></li>
						<li><a href="https://www.att.com.mx/prepago/puntos-recarga-tiempo-aire">at&t<img src="https://logos-marcas.com/wp-content/uploads/2020/11/ATT-Logo.png" align="center" width="100" height="60" alt="" /></a></li>
           
					</ul>
				</li>

        <li><a href="">PAGO DE SERVICIOS:</a>
					<ul>
						<li><a href="https://telmex.com/web/acerca-de-telmex/pago-recibo-telmex">Telmex<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Telmex_Logo.svg/1280px-Telmex_Logo.svg.png" align="center" width="150" height="60" alt="" /></a></li>
						<li><a href="https://serviciosenlinea.sky.com.mx/sky/faces/bienvenido">Vetv<img src="https://vetvsky.com/assets/img/tda/Logo-VETV.png" align="center" width="100" height="60" alt="" /></a></li>
            <li><a href="https://www.megacable.com.mx/">Megacable<img src="https://cdn.worldvectorlogo.com/logos/megacable.svg" align="center" width="100" height="60" alt="" /></a></li>
						<li><a href="https://app.cfe.mx/Aplicaciones/CCFE/MiEspacio/Login.aspx">CFE<img src="https://www.sise-servicios.com/wp-content/uploads/2017/06/CFE-01.png" align="center" width="100" height="70" alt="" /></a></li>
           
					</ul>
				</li>

			</ul>
      </ul>
			<button onClick={menu}> MENU PRINCIPAL </button>
      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
