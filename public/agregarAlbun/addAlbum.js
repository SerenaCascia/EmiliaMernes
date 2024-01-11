
// Valores ingresados por el usuario
function getInputValues() {

    const tituloInput = document.getElementById('titulo');
    const añoInput = document.getElementById('año');
    const  descripcionInput= document.getElementById('descripcion_del_album');
    const imagenInput = document.getElementById('portada');
  
    const tituloValor = tituloInput.value;
    const añoValor=añoInput.value;
    const descripcionValor = descripcionInput.value;
    const imagenValor = imagenInput.value;
  

    return {
      titulo: tituloValor,
      descripcion: descripcionValor,
      año: añoValor,
      portada: imagenValor
    };
  }

//   crear album

const addAlbum = async (e) => {
    e.preventDefault();       
    const objectToSend = getInputValues()
    try {
      await axios.post("/band", objectToSend);
      swal({
        title: 'Album editado!',
        text: 'El album se creo con exito!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      window.location.href = `../index.html`;
    } catch (error) {
        swal({
            title: 'Error!',
            text: `${error.respuesta.data}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
  }

//   boton agregar album

const botonAgregar=document.getElementById('añadirAlbum');
botonAgregar.addEventListener('click',(e)=>{
    addAlbum(e);
    }
)
const logout = async () => {
  try {
    await axios.post('../me');

    await swal({
      title: 'Deslogueado',
      icon: 'success',
    })
    window.location.href= "../../login/login.html"
  } catch (error) {
    console.log(error);
  }
};

const botonlogout=document.getElementById('logout')

botonlogout.addEventListener('click',()=> logout())
