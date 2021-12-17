var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
	e.preventDefault();
	fetch(form.action, {
		method : "POST",
		body: new FormData(document.getElementById("sheetdb-form")),
	}).then(
		response => response.json()
	).then((html) => {
		window.location.href = 'thankyou.html';
	});
});
function show_value(x) {
	for(var i = 1; i<=10; i++) {
		document.getElementById("val"+i.toString()).style.fontWeight="normal";
		document.getElementById("val"+i.toString()).style.fontSize="initial";
	}
	var now="val"+x.toString();
	document.getElementById(now).style.fontWeight="bolder";
	document.getElementById(now).style.fontSize="x-large";
}