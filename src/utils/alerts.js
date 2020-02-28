import Swal from 'sweetalert2';

export const deleteConfirmation = (employeeName) => {
    return Swal.fire({
        title: `Desea eliminar el empleado "${employeeName}"`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: 'Cancelar!'
    })
};

export const showResult = ({ status, message }) => {
    console.log('entra', { status, message })
    Swal.fire({
        title: `Desea eliminar el empleado "${employeeName}"`,
        icon: status === 'failed' ? 'error' : 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
    })
}


export const invalidSearch = () => {
    Swal.fire({
        title: `Criterios de busqueda incorrecto`,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
    })
};