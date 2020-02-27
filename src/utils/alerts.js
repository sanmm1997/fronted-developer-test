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