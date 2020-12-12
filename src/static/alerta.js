import swal from 'sweetalert2'

 function alerta(text,icon){
    swal.fire({
        position: 'top-end',
        text:text,
        icon:icon,
        showConfirmButton: false,
        timer: 1500
    });
    
   
    
}
export default alerta




