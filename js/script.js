const time = 100;
const step = 1;  

function outNum(num, elem) {
    let e = document.querySelector('#out');
    n = 0;
    let t = Math.round(time/(num/step));
    setTimeout(() => {
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
              clearInterval(interval);
         }
    e.innerHTML = n;
                },
  t);
}, 3000);
};

outNum(548, '#out'); 

$(document).ready(function() {
var url = "../thank.html";
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(location).attr('href',url);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});