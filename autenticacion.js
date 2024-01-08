authCuentaFacebook () {
const provider = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithPipup(provider).then(result => {
  $('#avatar').attr('src', result.user.photoURL)
  $('.modal').modal('close')
  materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
})
.catch(error =>{
  console.error(error)
  Materialize.toast(`Error al autenticarse con Facebook: ${error} `, 4000)
})
}
