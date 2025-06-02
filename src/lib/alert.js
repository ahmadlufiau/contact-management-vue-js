import $wal from 'sweetalert2';

export const alertSuccess = async (message) => {
  return $wal.fire({
    icon: 'success',
    title: 'Success',
    text: message
  })
}

export const alertError = async (message) => {
  return $wal.fire({
    icon: 'error',
    title: 'Ups',
    text: message
  })
}