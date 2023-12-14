function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('petName').value;
	var email = document.getElementById('email').value;

	var messageBody = "Nombre " + userName +
	"<br/> Mascota " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mceteri@gmail.com",
    Password : "0D82EDB80ECE5945160758B80FFD9039031B",
    To : 'martin@zeegodigital.com',
    From : "mceteri@gmail.com",
    Subject : "Nueva solicitud",
    Body : messageBody
}).then(
  message => alert(message)
  /*
  {
  	if(message=='OK'){
  		swal("OK", "Se ha registrado su solicitud!", "success");
  	}
  	else{
  		swal("Error", "No pudimos registrar la solicitud!", "error");
  	}
  }*/
);
}