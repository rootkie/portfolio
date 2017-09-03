function toggleMenu() {
	let navlist = document.getElementById("navlist")
	navlist.style.display = window.getComputedStyle(navlist).display === 'block' ? 'none' : 'block'
}

window.addEventListener('resize', function(event){
	if (window.innerWidth>767){
		document.getElementById("navlist").style.display = 'flex';
	}
});



function pageOnReady(callback) {
    var intervalID = window.setInterval(checkReady, 500);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function loaderToggle(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

pageOnReady(function () {
    loaderToggle('page', true);
    loaderToggle('loading', false);
});
