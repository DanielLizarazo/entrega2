const peliculas = [
    {
        id: 1,
        nombre: "El rey leon",
        genero: "animado",
        duracion: "120 min",
        cartelera: false,
        imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41",
        
    },
    {
        id: 2,
        nombre: "El extraño mundo de Jack",
        genero: "animado",
        duracion: "130 min",
        cartelera: false,
        imagen: "https://f.rpp-noticias.io/2023/12/09/1511900el-extrano-mundo-de-jackjpg.jpg",
        
    },
    {
        id: 3,
        nombre: "Cuando las luces se apagan",
        genero: "terror",
        duracion: "80 min",
        cartelera: false,
        imagen: "https://cdn.cinencuentro.com/wp-content/uploads/2016/08/lights-out-poster-lg.jpg",
        
    },
    {
        id: 4,
        nombre: "La monja",
        genero: "terror",
        duracion: "96 min",
        cartelera: false,
        imagen: "https://es.web.img2.acsta.net/pictures/18/08/14/15/35/4396669.jpg",
        
    },
    {
        id: 5,
        nombre: "Dune",
        genero: "accion",
        duracion: "155 min",
        cartelera: true,
        imagen: "https://es.web.img3.acsta.net/pictures/21/08/25/14/35/3349802.jpg",
        
    },
    {
        id: 6,
        nombre: "Taken",
        genero: "accion",
        duracion: "120 min",
        cartelera: false,
        imagen: "https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg?region=0%2C0%2C800%2C12000",
        
    },
    {
        id: 7,
        nombre: "El lobo de wall street",
        genero: "drama",
        duracion: "180 min",
        cartelera: false,
        imagen: "https://es.web.img3.acsta.net/pictures/210/615/21061596_20131129121836144.jpg",
        
    },
    {
        id: 8,
        nombre: "Requiem por un sueño",
        genero: "drama",
        duracion: "160 min",
        cartelera: false,
        imagen: "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        
    },
];


const contenedor = document.getElementById("contenedor");

function verPeliculas(arrayDePeliculas) {
   
    arrayDePeliculas.forEach(el => {
        const card = document.createElement("div");
        card.className = "card";
            
              const nombre = document.createElement("p");
              nombre.innerText = el.nombre;
              nombre.className = "nombre"; 
        
              const imagen = document.createElement("img");
              imagen.src = el.imagen;
              imagen.className = "imagen";

   
              card.appendChild(nombre);
              card.appendChild(imagen);
        
              contenedor.appendChild(card);
});
}


function verTodas(){
    if (verTodas) {
        verPeliculas(peliculas);      
    }
};


function filtrarPorGenero() {
   const genero = prompt(`que genero quieres buscar 
   animado
   drama
   accion
   terror`).toLowerCase();
   const peliculasPorGenero = peliculas.filter(el => el.genero.includes(genero));
 
   if(peliculasPorGenero.length > 0){
    verPeliculas(peliculasPorGenero)
  }
};

function buscarPeli() {
    const buscar = prompt(`filtra por peli`).toLowerCase();
    const peliculasFiltro = peliculas.filter(el => el.nombre.includes(buscar));
  
    if(peliculasFiltro.length > 0){
     verPeliculas(peliculasFiltro)
   } else alert('No tenemos esa peli ')
 };
 


 let seleccion 

 do {
     seleccion = parseInt(prompt(`Hola estas son las pelis que tenemos,
     1. quieres verlas todas 
     2. quieres filtrar por genero 
     3. quieres buscar una peli
     0. si quieres salir`));

     switch (seleccion) {
         case 0:
             alert("vuelve pronto");
             break;
         case 1:
             verTodas();
             seleccion = 0;
             break;
         case 2:
             filtrarPorGenero();
             seleccion = 0;
             break;
         case 3:
             buscarPeli();
             seleccion = 0;
             break;
         default:
             alert("selecciona una opcion");
             break;
     }

 } while (seleccion !== 0);
