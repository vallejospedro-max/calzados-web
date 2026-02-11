function whatsapp(producto) {
  const numero = "595XXXXXXXXX"; // cambiá por el real
  const mensaje = `Hola, quiero consultar por ${producto}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
