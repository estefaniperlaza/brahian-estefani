function runMyFuntion(){
	alert("esta es la alerta mi funcion")


}
function agregaralcarito(nombreproducto,precio){
	alert("quieres agregar esto al carrito")
	
	var divnuevo=document.createelement("div");
	var nombreproducto=document.createtextnode(nombreproducto);
	divnuevo.appendChild(nombreproducto);
	document.getElementById("novedades").appendChild(divnuevo);
}


