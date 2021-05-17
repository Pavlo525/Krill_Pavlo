function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}


$.holdReady(true);

$(document).ready(function () {
	console.log("Сработало событие ready");
	$("body").mouseenter(function (e) {
		$(this).css("opacity", 0.5);
	}).mouseout(function (e) {
		$(this).css("opacity", 1.0);
	})
});

$("button").hover(function () {
	$(this).css("background-color", "#8236D2");
}, function () {
	$(this).css("background-color", "#322D53");
});

$(".avatar").hover(function () {
	$(this).animate({ width: "100px", height: "100px" });
}, function () {
	$(this).animate({ width: "50px", height: "50px" });
});

readTextFile("./data.json", function (text) {
	var data = JSON.parse(text);
	let news = document.querySelector('.news');
	data.forEach(element => {
		news.innerHTML += `<div class="news-block-item">
		<div class="bottom-block-top">
			<img src="./img/news-img.png" alt="">
			<p>${element['new']['content']}</p>
		</div>
		<div class="bottom-block-bottom">
			<p style="color: #57537C; font-size: 12px;">${element['new']['time']}AM</p>
			<p>READ</p>
		</div>
	</div>`
	});
});

import { MDCTopAppBar } from '@material/top-app-bar';
window.randomize = function () {
	$('.ko-progress-circle').attr('data-progress', 75);
}
setTimeout(window.randomize, 200);
$('.ko-progress-circle').click(window.randomize);
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
import { MDCRipple } from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
import { MDCList } from '@material/list';

new MDCList(document.querySelector('.mdc-list'));

