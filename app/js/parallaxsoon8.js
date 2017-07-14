function BrowserDetection() { 
	if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 
		var e = new Number(RegExp.$1); 
		rint = 10; 
		pulsion = 3 
	} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
		var t = new Number(RegExp.$1); 
		rint = 50; 
		pulsion = 16 } 
		else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 
			var n = new Number(RegExp.$1); 
			rint = 50; 
			pulsion = 16 
		} else if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 
			var r = new Number(RegExp.$1); 
			rint = 50; 
			pulsion = 16 
		} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) { 
			var i = new Number(RegExp.$1); 
			rint = 50; 
			pulsion = 16 
		} 
		WIDTH = window.innerWidth; 
		if (WIDTH < 1024) { 
			numberObject = 19e3; 
			numberBall = 10; 
			pulsion = 2; 
			rint = 10 
		} 
} 

function draw() { 
	con.clearRect(0, 0, WIDTH, HEIGHT); 
	for (var e = 0; e < pxs.length; e++) { 
		pxs[e].fade(); 
		pxs[e].move(); 
		pxs[e].draw() } 
	} 

	function Circle() { 
		WIDTH = window.innerWidth; 
		HEIGHT = window.innerHeight; 
		this.s = { 
			ttl: numberObject, 
			xmax: speedX, 
			ymax: speedY, 
			rmax: radius, 
			rt: pulsion, 
			xdef: 1260, 
			ydef: 740, 
			xdrift: 10, 
			ydrift: 10, 
			random: true, 
			blink: true 
		}; 
		this.reset = function () { 
			this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef; 
			this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef; 
			this.r = (this.s.rmax - 1) * Math.random() + 1; 
			this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1); 
			this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1); 
			this.hl = this.s.ttl / rint * (this.r / this.s.rmax); 
			this.rt = Math.random() * this.hl; this.s.rt = Math.random() + 1; 
			this.stop = Math.random() * .2 + .4; 
			this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1); 
			this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1) 
		}; 
		this.fade = function () { this.rt += this.s.rt }; 
		this.draw = function () { 
			if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1; 
			else if (this.rt >= this.hl) this.reset(); 
			var e = 1 - this.rt / this.hl; 
			var t = document.getElementById("container"); 
			con.beginPath(); 
			con.font = "normal 600 16px pf_dintext_prothin"; 
			var n = this.r * e; 
			g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, n <= 0 ? 1 : n); 
			g.addColorStop(this.stop, colorRect + e * opacityRect + ")"); 
			con.fillStyle = g; 
			con.fillText("Разработка сайтов", this.x, this.y); 
			con.fillText("Яндекс Директ", this.x + -20, this.y + 50); 
			con.fillText("Google Adwords", this.x + 300, this.y + 80); 
			con.fillText("SMM", this.x + 15, this.y + -60); 
			con.fillText("Маркетинговая стратегия", this.x + 10, this.y + 350); 
			con.fillText("Email-маркетинг", this.x + -15, this.y + 390);
			con.fillText("Маркетинг-киты", this.x + -350, this.y + 10);
			con.fillText("Landing page", this.x + 200, this.y + 0);
			con.fillText("CRM-системы", this.x + 100, this.y + 200);
			con.fillText("Сквозная аналитика", this.x + -120, this.y + 190);
			con.fillText("Анализ конкурентов", this.x + 2, this.y + 250);
			con.fillText("Контекстная реклама", this.x + -250, this.y + 70);
			con.fillText("Медийная реклама", this.x + 80, this.y + -50);

			con.closePath(); 
			con.fill() 
		}; 
		this.move = function () { 
			WIDTH = window.innerWidth; 
			HEIGHT = window.innerHeight; 
			this.x += this.rt / this.hl * this.dx; 
			this.y += this.rt / this.hl * this.dy; 
			if (this.x > WIDTH || this.x < 0) this.dx *= -1; 
			if (this.y > HEIGHT || this.y < 0) this.dy *= -1 
		}; 
		this.getX = function () { return this.x }; 
		this.getY = function () { return this.y } 
	} 

	var WIDTH; 
	var HEIGHT; 
	var canvas; 
	var con; 
	var g; 
	var pxs = new Array; 
	var rint = 3; 
	var numberObject = 3e9; 
	var pulsion = 500; 
	var radius = 3; 
	var speedX = 5; 
	var speedY = 3; 
	var widthRect = 150; 
	var heightRect = 200; 
	var colorRect = "rgba(255,255,255,"; 
	var opacityRect = .3; 
	var numberBall = 10; /* количество слов*/
	var width = 125; 
	var height = 50; 
	var padding = 10; 

	$(document).ready(function () { 
		BrowserDetection(); 
		WIDTH = window.innerWidth; 
		HEIGHT = window.innerHeight; 
		canvas = document.getElementById("pixie"); 
		$(canvas).attr("width", WIDTH).attr("height", HEIGHT); 
		con = canvas.getContext("2d"); 
		for (var e = 0; e < numberBall; e++) { 
			pxs[e] = new Circle; 
			pxs[e].reset() 
		} 
		setInterval(draw, rint) 
	})