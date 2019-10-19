herramienta = "lapiz";
	tamano = 20;
	pintar = Boolean(false);
	color_prim = "#FFF";
	color_sec = "#FFF";
	window.onload = function(){
		'use strict';
		var c = document.createElement("canvas");
		var ctx = c.getContext("2d");
 
		c.setAttribute("width", window.innerWidth);
    	c.setAttribute("height", window.innerHeight);
 
		document.body.appendChild(c);
 
		c.onmousedown = function (e){
			pintar = true;
			if( herramienta == "lapiz" ){
				ctx.moveTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
			}
		}
		c.onmouseup = function(){
			pintar = false;
			ctx.beginPath();
		}
		c.onmousemove = function(e){
			if (pintar) {
				if (herramienta == "lapiz") {
					ctx.lineTo(e.pageX - c.offsetLeft, e.pageY - c.offsetTop);
					ctx.lineWidth = tamano;
					ctx.strokeStyle = color_prim;
					ctx.stroke();
				}
				else if(herramienta == "borrador"){
					ctx.beginPath();
					ctx.clearRect(e.pageX - c.offsetLeft, e.pageY - c.offsetTop,tamano,tamano);
				}
			}
		}
		c.onmouseout = function(){
			pintar = false;
		};
	}