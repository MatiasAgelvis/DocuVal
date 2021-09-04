
window.onload = function () {

	let footer_info = document.getElementsByClassName("related-information")[0]

	let original_info = footer_info.innerHTML

	footer_info.innerHTML = "<p style=\"width: 100%; display: flex; justify-content: space-between;\"><span class=\"sd-sphinx-override sd-badge sd-outline-primary sd-text-primary\">Universidad de Los Andes - Mérida, Venezuela</span><a href=\"mailto:agelvis@ula.ve\"><span class=\"sd-sphinx-override sd-badge sd-outline-primary sd-text-primary\">Contacto en: agelvis@ula.ve</span></a><a href=\"https://matiasagelvis.github.io\"><span class=\"sd-sphinx-override sd-badge sd-outline-primary sd-text-primary\">Página mantenida por Matías Agelvis</span></a></p>" + original_info
}