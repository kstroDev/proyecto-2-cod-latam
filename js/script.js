const menuBtn = document.querySelector('#menu-button');
const menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active');
});

menuItems.forEach(function(item) {
      
    item.addEventListener('click', function() {
    
      document.body.classList.remove('mobile-menu-active');

      const currentItem = document.querySelector('.active');
      currentItem.classList.remove('active');
      this.classList.add('active');
    });
});

/* Modo Oscuro */

const switchButton = document.getElementById('switch');
    switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})

/* Animación de boton */

document.addEventListener("DOMContentLoaded",function(){
	this.addEventListener("click",e => {
		let tar = e.target;
		if (tar.hasAttribute("data-dl")) {
			let dlClass = "dl-working";
			if (!tar.classList.contains(dlClass)) {
				let lastSpan = tar.querySelector("span:last-child"),
					lastSpanText = lastSpan.textContent,
					timeout = getMSFromProperty("--dur",":root");

				tar.classList.add(dlClass);
				lastSpan.textContent = "Descargando…";
				tar.disabled = true;

				setTimeout(() => {
					lastSpan.textContent = "¡Completo!";
				},timeout * 0.9);

				setTimeout(() => {
					tar.classList.remove(dlClass);
					lastSpan.textContent = lastSpanText;
					tar.disabled = false;
				},timeout + 1e3);
			}
		}
	});
});
function getMSFromProperty(property,selector) {
	let cs = window.getComputedStyle(document.querySelector(selector)),
		transDur = cs.getPropertyValue(property),
		msLabelPos = transDur.indexOf("ms"),
		sLabelPos = transDur.indexOf("s");

	if (msLabelPos > -1)
		return transDur.substr(0,msLabelPos);
	else if (sLabelPos > -1)
		return transDur.substr(0,sLabelPos) * 1e3;
}