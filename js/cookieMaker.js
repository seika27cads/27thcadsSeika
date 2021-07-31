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
				var temp2="<a href='links.html' class='nav-item nav-link m-0 p-3 text-dark bg-white'>AllinOneEventsLinks</a>";
				document.getElementById("noShow").innerHTML=temp2;
			} else {

			}
		}
