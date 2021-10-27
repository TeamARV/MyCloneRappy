import "../styles/Page1.css"
import moto from "../media/motosvg.svg"
import perfil from "../media/perfilsvg.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"


function Page1() {



    return(

    <div>
      

      <nav class="navbar navbar-light bg-light fixed-top ">


      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar ">
      <span class="navbar-toggler-icon"></span>
      </button>
      <span className="  col-sm-1 text-end h4" just>  <img src="https://i.imgur.com/jmnUCAo.png" alt="" /> RAPPY <i class="fas fa-motorcycle  text-success"></i>  </span>
      <span className="  col-sm-1 text-end h4">  <i class="fas fa-shopping-cart text-success "/>  Ingreso </span>
      <span className=" bg-transparent col-sm-6 text-center">            <form class="d-flex">
          <input class="form-control me-1 " type="search" placeholder="Busca en Rappy....." aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Buscar </button>   
        </form>
        </span>
        <span className=" col-sm-1 text-center h5">   <i class="fas fa-map-marker-alt text-success"></i> Ingresar ubicación   </span>
        
         

        
        
     
      
      
  
  
  



  <div class="container-fluid">
    

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">  
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel font-weight-bold">  RAPPY <i class="fas fa-motorcycle text-success"></i></h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
          <li class="nav-item">
              <span> <hr /> </span>
              <span class="nav-link inactive">SECCIONES </span>
            <a class="nav-link active" aria-current="page" href="#">Restaurantes</a>
            <a class="nav-link active" aria-current="page" href="#">Supermercados</a>
            <a class="nav-link active" aria-current="page" href="#">Farmacia</a>
            <a class="nav-link active" aria-current="page" href="#">Licores</a>
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ver más
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Express</a></li>
              <li><a class="dropdown-item" href="#">Rappy Mail</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Ver Menos</a></li>
            </ul>
          </li>
          <hr />
          <li class="nav-item">
            <a class="nav-link inactive" >OTROS</a>
            <a class="nav-link active" aria-current="page" href="#">Regira tu restraurante </a>
            <a class="nav-link active" aria-current="page" href="#">Registra tu comercio</a>
            <a class="nav-link active" aria-current="page" href="#">Quiero ser un RappYtender@</a>
            <a class="nav-link active" aria-current="page" href="#">Pauta en Rappy</a>
          </li>
       <hr />
       <span className="h5 font-weight-bold" > 🇨🇴 COLOMBIA  </span>
       
       <hr />
        </ul>
        
        
      </div>
    </div>
  </div>
</nav>

<div className="cuadro">
<div className="col-sm-12">
     <span className="intro">
         <br />
    <span > Si tienes <strong>Rappy,</strong> tienes Todo.</span>  

    
    
    <form class="d-flex col-sm-9 text-center">
          <input class="form-control me-2" type="search" placeholder=" ⛊ Dónde Quieres recibir tu compra?" aria-label="Search"/>
        </form>
        <br />
        
        <div className="row">
        <br />
        <span className="footer1 row-sm-12 text-center"> <i class="fas fa-map-marker-alt"/> Usa tu ubicacipon actual            </span>
        <span className="footer1 col-sm-12 text-center"> iniciar sessión Para ver tus credenciales recientes   </span>
        
        
        </div>
        
        </span>

    </div>
    
    </div>


    <div className="cuadro2 col-sm-12">

        <span className="titulo1"> <strong>Categorias</strong></span>
        
    <div className="row">
    
  <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/hZdC2OP.jpg" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">Restaurantes  <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>

    <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/VL55Iz7.jpg" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">Supermercados  <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>

    <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/CIgaA6a.jpg" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">Farmacia  <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>


    <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/5R2xXw0.jpg" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">Licores  <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>

    <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/t5ADkD9.png" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">Express  <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>

    <div className="col-sm-2">
    <div className="card2">
      <div className="card-body">     
        <img src="https://i.imgur.com/t5ADkD9.png" className="img-fluid" alt="Responsive image" />   
        <p className="card-text">RappyMail <i class="fas fa-arrow-right text-success"></i> </p>
      </div>
    </div>
    </div>

    </div>
    
   </div>



   <div className="cuadro3 col-sm-12">

   <div className="row">
       

<span className="h5"> ¡PIDE TODO EN EL MISMO LUGAR!</span>  
<span className="h1"> ¡Tú   a  lo  tuyo y lo demás</span>  
<span className="h1">  <strong>déjaselo a  <span className="text-success"> Rappy...!</span></strong> </span>  


<span className="h5 col-sm-4">
<span className="h5 col-sm-4"> <i class="imagent fas fa-tags text-success"></i> </span>
<hr /> 
<span className="h5 col-sm-4">   <span className="h2">¡Ahorra tiempo!</span> Corremos para hacerte la vida más fácil. Sigue en tus actividades del día a día que Rappi te lleva TODO.</span> 
</span>

<span className="h5 col-sm-4">
<span className="h5 col-sm-4"> <i class="imagent  fas fa-sun text-success"></i><i class=" imagent far fa-moon text-success"></i></span>
<hr /> 
<span className="h5 col-sm-4">   <span className="h2">Trabajamos las 24 horas</span> Soporte 24/7 y una gran oferta de restaurantes y aliados con servicio las 24 horas.</span> 
</span>

<span className="h5 col-sm-4">
<span className="h5 col-sm-4"> <i class="imagent fas fa-tags text-success"></i> </span> 
<hr /> 
<span className="h5 col-sm-4">   <span className="h2">¡Encuentras de todo!</span> Ya no tienes que salir de tu oficina para disfrutar lo mejora de tu ciudad.</span>  
</span>
</div>


</div>


<div className="cuadro4 ">

<img src="https://i.imgur.com/oy4di5Q.jpg" className="img-fluid" alt="Responsive image" />   

    </div>

    
 
    
    <div className="cuadro5  text-center">

        <div className="row">
        <span className="h2">Grandes marcas en </span>
        <span className="h1 text-success"> <strong>Rappy... </strong> </span>
        <span><img src="https://i.imgur.com/pPP3Dq7.png" className="img-fluid" alt="Responsive image" /></span>
        
        </div>
        <hr />
          
    <div className="row">
        <div className="col-4">
    <img  src="https://i.imgur.com/7o59OGn.png" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/3N6aOBh.png" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/K3IRq17.png" className="img-fluid" alt="Responsive image" />   
    </div>

    <div className="col-4">
    <img  src="https://i.imgur.com/ziWDuPj.jpg" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/xf13Oll.jpg" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/HO6bzzU.png" className="img-fluid" alt="Responsive image" />   
    </div>

    <div className="col-4">
    <img  src="https://i.imgur.com/RabdPPD.png" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/1oR3y4Q.png" className="img-fluid" alt="Responsive image" />   
    <img  src="https://i.imgur.com/hHOXo9a.png" className="img-fluid" alt="Responsive image" />   
    </div>
    </div>
    <hr />
    </div>


    <div className="cuadro6  text-center">
<div className="titleTestimonio row">
<span className="h2">¿Quieres ser un aliado?</span>
<span className="h1 text-success"> <strong>Únete a Rappy</strong> </span>
</div>

<div className="row">
<div className="col-6">
<img  src="https://i.imgur.com/KeOsgdj.jpg" className="img-fluid" alt="Responsive image" />   
 
</div>
<div className="col-6">

<span className="testimonio row">
    <span className="h2">¡Registra tu </span>
    <span className="h1"><strong>Restaurante o Comercio!</strong></span> 
    <span>Descubre los beneficios que tienen los +50.000 aliados en 9 países que ya trabajan con Rappi.</span>

</span> 
<br />
<button className="testimonioB" type="button" class="btn btn-success">! Registrar tu Restaurante ¡</button> <br /> <br />
<button className="testimonioB" type="button" class="btn btn-success">! Registrar Comercio ¡</button>
</div>


</div>
</div>


<div className="cuadro7  text-center">
<div className="titleTestimonio row">
<span className="h2">¿Quieres ser un aliado?</span>
<span className="h1 text-success"> <strong>Únete a Rappy</strong> </span>
</div>

<div className="row">
<div className="col-6">
<span className="testimonio row">
    <span className="h2">¡Conviértete en </span>
    <span className="h1"><strong>Rappitendero!</strong></span> 
    <span>Gana dinero extra entregando domicilios. Recibe 100% de tus propinas. Hacemos más domicilios que otras plataformas.</span>

</span>
<br /> 
<button className="testimonioB" type="button" class="btn btn-success">! Registrar ahora ¡</button>
 
</div>
<div className="col-6">
<img  src="https://i.imgur.com/kkNyx7O.png" className="img-fluid" alt="Responsive image" />  

</div>
</div>
</div>




<div className="cuadro8  text-center">


<hr />
  
<div className="row">
<div className="col-4">
<span className="titlefoot"> Ciudades en Colombia</span><br /> 

<span>
Bogotá <br /> Chía<br /> Cajicá<br /> Guaymaral<br /> Cota<br /> Medellín<br /> Cali<br /> Cartagena<br /> Barranquilla<br /><br /><br />
</span>
</div>

<div className="col-4">
<span className="titlefoot"> Encuéntranos en estos países</span><br /> 
<span>
Argentina<br />Brasil<br />Chile<br />Colombia<br />Costa Rica<br />Ecuador<br />México<br />Perú<br />Uruguay<br /><br /><br />
</span>
</div>

<div className="col-4">
<span className="titlefoot"> Top tiendas cerca a ti</span><br /> 
<span>
Pizza cerca a mi<br /> Hamburguesa cerca a mi<br /> Comida china cerca a mi<br /> Sushi cerca a mi<br /> Café cerca a mi<br /> Comida italiana cerca a mi<br /> 
Mariscos cerca a mi<br /> Almuerzos cerca a mi<br /> Desayunos cerca a mi<br /><br /><br />
</span> 


</div>
</div>

</div>


<div className="cuadro9  text-center">

<div className="row">


</div>

  
<div className="row">
<div className="col-4">

<span className="titlefoot"> Categorías</span><br /> 
<span>
Restaurantes<br /> Supermercados<br /> Farmacia<br /> Licores<br /> Express<br /> RappiMall<br /> 
</span>
  
</div>

<div className="col-4">
<span className="titlefoot"> Únete a rappy</span><br /> 
<span>
Registra tu restaurante<br /> Trabaja con nosotros<br /> Registra tu comercio<br /> Posiciones disponibles<br /> Quiero ser Rappytendero Propio <br /> 
Quiero ser Personal Shopper<br /> Brands by Rappy<br /> Haz crecer tu marca<br /> 
</span>
 
</div>

<div className="col-4">
<span className="titlefoot"> Sobre Rappy</span><br /> 
<span>
Blog<br /> Derecho de retracto<br /> SIC<br /> Términos y Condiciones<br /> Rappy Card<br /> Políticas de Privacidad<br /> Tratamiento de Datos <br /> 
</span>
  
</div>
</div>

</div>


<div className="cuadro10  text-center">

<div className="row">


</div>

  
<div className="row">
<div className="col-4">
<span className="icofoot">
<i class="fab fa-facebook"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-instagram"></i>
</span>
  
</div>

<div className="col-4">
<span className="icofoot3">
<button className="testimonioB" type="button" class="btn btn-success"> <i class="fab fa-apple"></i> App Store</button> <br />
<button className="testimonioB" type="button" class="btn btn-success"> <i class="fab fa-google-play"></i> Google Play</button>
</span>
 
</div>

<div className="col-4">
<span className="icofoot2">
2021 Rappy Inc. All rights reserved. <br />
clonado y reimaginado por Andrés TeamARV
</span>
  
</div>
</div>

<blockquote className="blockquote"><span className="text-dark">Hecho en Colombia en 🇨🇴</span> </blockquote>

<span className="pie">
<img src={perfil} className="img-fluid col-3 text-start" alt="Responsive image" />
<img src={moto} className="img-fluid col-3 text-end" alt="Responsive image" />
</span>


</div>



    </div>
    )


 
}
export default Page1