function verificar(){
	var valor = document.getElementById("número").value;

	if( valor.length > 8){
		return false;
	} else{
		return true;
	}
}