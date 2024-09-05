const parkingContainer = document.getElementById("parking-container");
const parkingContainerWidth = parkingContainer.clientWidth;
console.log(parkingContainerWidth);
const parkingContainerHeight = parkingContainer.clientHeight;
console.log(parkingContainerHeight);
const spotSize = 50; //Tamaño fijo de cada casilla

function generarEspacios() {
    //Calcular el numero de casillas por fila y columna;
    const spotsPerRow = Math.floor(parkingContainerWidth / (spotSize + 6));
    const spotsPerColumn = Math.floor(parkingContainerHeight / (spotSize + 6));

    //Configurar el contenedor como una cuadricula
    parkingContainer.style.gridTemplateColumns = `repeat(${spotsPerRow}, ${spotSize}px)`;
    parkingContainer.style.gridTemplateRows = `repeat(${spotsPerColumn}, ${spotSize}px)`;

    //Limpiar casillas existentes antes de agregar nuevas
    // // parkingContainer.innerHTML = '';

    let parkingSpots = ''

    //Crear las casillas
    for (let i = 0; i < spotsPerRow * spotsPerColumn; i++) {
        // const spot = document.createElement('div');
        // spot.classList.add("parking-spot");
        // parkingContainer.appendChild(spot);
        const colores = ['green', 'red'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        const spot = document.createElement('div');
        spot.classList.add("parking-spot");
        spot.classList.add(colorAleatorio);
        spot.innerHTML = `<i class="fas fa-car icon-car"></i>`;

        parkingSpots += spot.outerHTML;
    }

    parkingContainer.innerHTML = parkingSpots;
}

generarEspacios();

//Añadir el event listener para el evento resize 
window.addEventListener('resize', generarEspacios);


