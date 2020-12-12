import swal from 'sweetalert2'
 function alerta2(text,icon){
    swal.fire({
        
        icon: icon,
        text: text,
        showConfirmButton: false,
        timer: 1500,
        
      
        
      })
    }
export default alerta2;