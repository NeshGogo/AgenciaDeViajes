
const reservacion = document.getElementById("reservacion");
const destino = document.getElementById("destino");
const btnReservacionMenu = document.getElementById("btnReservacionMenu");
const btnDestinoMenu = document.getElementById("btnDestinoMenu");

const destinoInfo = (titulo) => {
    //entrutura
    let destinoModalLabel = document.getElementById("destinoModalLabel");
    destinoModalLabel.innerHTML = titulo;
}
const mostrarReservacion = () => {
    btnReservacionMenu.className="list-group-item btn bg-secondary active";
    btnDestinoMenu.className="list-group-item btn";
    destino.style.setProperty("display", "none");
   
    return reservacion.style.removeProperty("display");
};

const mostrarDestino = () => {
    btnDestinoMenu.className="list-group-item btn bg-secondary active";
    btnReservacionMenu.className="list-group-item btn";
    reservacion.style.setProperty("display", "none");
    
    return destino.style.removeProperty("display");
};
