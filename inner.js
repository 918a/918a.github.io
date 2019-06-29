function content (e) {
	var a = document.getElementById("revealed")
	var c = e.parentNode.children
	var x = Array.prototype.indexOf.call(c, e)
	var l = c.length
	for (var i=0;i<l;i+=2) {
		c[i].setAttribute("class","myhover")
		a.children[i/2].style.display=""
	}
	c[x].setAttribute("class","myhover mynow")
	a.children[x/2].style.display="inline"
}
function hasher () {
	hashemitter(parseInt(location.hash.slice(1)))
}
function hashemitter (h) {
	h*=2
	if (!isNaN(h)) content(document.getElementById("listed").children[h])
}