function setCookie() {
	const d = new Date();
	const cname = "username";
	const cvalue = document.getElementById("cname").value;;
	const exdays = 30;
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	let user = getCookie("username");
	if (user != "") {
		var temp2 = "<a href='links.html' class='nav-item nav-link m-0 p-3 text-dark bg-white'>EventsFiles</a>";
		document.getElementById("noShow").innerHTML = temp2;
		var temp3 = `<div class="nav-item  m-2 p-1 ">更多</div> <div class="position-absolute documents " id="twoDMenuContent" style="display:none"> <a class="nav-item nav-link m-0 p-3 text-dark bg-white" href="https://docs.google.com/spreadsheets/d/1_Bqj5AM0g2gw6oDD3XcKOd6qZ1mMg9usdjZyb7EViS0/edit?usp=sharing" style="width:150px;">ODay人手安排</a> </div>`;
		document.getElementById("twoDMenu").innerHTML = temp3;
	} else {

	}
}
