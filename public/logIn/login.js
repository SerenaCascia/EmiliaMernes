
function getInputValues() {

    const emailInput= document.getElementById('email');
    const contraseñaInput = document.getElementById('contraseña');
    
    const emailValor = emailInput.value;
    const contraseñaValor = contraseñaInput.value;
     

    return {
            email: emailValor,
            contraseña: contraseñaValor
            }
  }
const loginUser = async (e) => {
    e.preventDefault()
    const objectToSend=getInputValues()
    try{
     const respuesta = await axios.post(`/loginuser`,objectToSend)
    window.location.href= "../index.html"
    }
    catch(error){
        swal({
            title: 'Error!',
            icon: 'error',
          })
    }
}

const loginButton = document.getElementById('ingresar')
loginButton.addEventListener('click', (e)=> loginUser(e))