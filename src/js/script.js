document.addEventListener('DOMContentLoaded', getPostList);
window.addEventListener("mousedown", startPaint, false);
window.addEventListener("mousemove", paint, false);
window.addEventListener("mouseup", endPaint, false);
document.querySelectorAll(".drawBtn").forEach(function(drawBtn){
	drawBtn.addEventListener("click", clickDraw, false);
})
document.querySelector(".drawCtrl .clear").addEventListener("click", clickClear, false);
document.querySelector(".colorInput").addEventListener("change", changeColor);
document.querySelector(".menu .list").addEventListener("click", getPostList, false);
// window.addEventListener("scroll", scrollWindow);

let isOpneCanvas = false;
let isMousedown = false;
let hue = 170;
let paintColor = "#8cd9cc"
let lineWidth = 5;
let isWidthAdd = true;
let startX, startY;

const canvas = document.querySelector('#draw');
computeCanvas();
const ctx = canvas.getContext('2d');

function computeCanvas(){
	const body = document.body;
	const html = document.documentElement;
	canvas.width = document.querySelector('body').offsetWidth-1;
	canvas.height = Math.max( body.scrollHeight, body.offsetHeight, 
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );
}

function startPaint(event){
	isMousedown = true;
	startX = event.offsetX;
	startY = event.offsetY;
}

function paint(event){
	if(!isOpneCanvas) return;
	if(!isMousedown) return;
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=lineWidth;
	// ctx.strokeStyle= `hsl(${hue}, 50%, 70%)`;
	ctx.strokeStyle= paintColor;
	// ctx.strokeStyle="rgba(177, 222, 180, 20)"
	ctx.moveTo(startX, startY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	startX = event.offsetX;
	startY = event.offsetY;
	// hue = (hue+1)%360;

	if(lineWidth >= 30){
		isWidthAdd = false;
	}else if(lineWidth <= 5){
		isWidthAdd = true;
	}
}

function endPaint(){
	isMousedown = false;
}

function clickDraw(){
	const drawCtrl = document.querySelector('.drawCtrl');
	const ctrls = document.querySelectorAll('.ctrl');
	canvas.classList.toggle('hidden');
	const drawBtns = document.querySelectorAll('.drawBtn');
	const blackPaint = `<img class="icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTkuMjkxIDE5LjI5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkuMjkxIDE5LjI5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik03LjYyMSwxMC4yNjdjLTAuMzY3LDAuNDA0LTAuNDU3LDAuNjk0LTAuOTM4LDEuNDU0YzAuMzExLDAuMjE3LDAuOTA4LDAuNzE4LDEuMzIyLDEuNTgxICAgYzAuODI3LTAuNDc1LDEuMjEzLTAuNTQ3LDEuNjUxLTAuOTE2YzIuODYyLTIuNDEsOS44Ny0xMS4wNDksOS42MjktMTEuMjk5QzE5LjAzMiwwLjgyMiwxMC4xNDEsNy41MDMsNy42MjEsMTAuMjY3eiBNNS44NTcsMTIuMzkyICAgYy0xLjI0My0wLjIyLTIuNDcsMC41NjYtMy4yODksMi41M2MtMC44MiwxLjk2NC0yLjI4NCwyLjc1LTIuNTY4LDIuNzAyYzEuNTI4LDAuNTUzLDYuMTg4LDEuOTY3LDcuMzQ2LTMuNDE2ICAgQzYuODU0LDEyLjkxNyw1Ljg1NywxMi4zOTIsNS44NTcsMTIuMzkyeiIgZmlsbD0iIzQ0NDQ0NCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;
	const grayPaint = `<img class="icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTkuMjkxIDE5LjI5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkuMjkxIDE5LjI5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik03LjYyMSwxMC4yNjdjLTAuMzY3LDAuNDA0LTAuNDU3LDAuNjk0LTAuOTM4LDEuNDU0YzAuMzExLDAuMjE3LDAuOTA4LDAuNzE4LDEuMzIyLDEuNTgxICAgYzAuODI3LTAuNDc1LDEuMjEzLTAuNTQ3LDEuNjUxLTAuOTE2YzIuODYyLTIuNDEsOS44Ny0xMS4wNDksOS42MjktMTEuMjk5QzE5LjAzMiwwLjgyMiwxMC4xNDEsNy41MDMsNy42MjEsMTAuMjY3eiBNNS44NTcsMTIuMzkyICAgYy0xLjI0My0wLjIyLTIuNDcsMC41NjYtMy4yODksMi41M2MtMC44MiwxLjk2NC0yLjI4NCwyLjc1LTIuNTY4LDIuNzAyYzEuNTI4LDAuNTUzLDYuMTg4LDEuOTY3LDcuMzQ2LTMuNDE2ICAgQzYuODU0LDEyLjkxNyw1Ljg1NywxMi4zOTIsNS44NTcsMTIuMzkyeiIgZmlsbD0iI2FiYWJhYiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;
	drawBtns.forEach(function(drawBtn){
		if(!isOpneCanvas){
			drawCtrl.style.bottom = "0px";
			drawBtn.innerHTML = blackPaint;
		}
		else{
			drawCtrl.style.bottom = "-84px";
			drawBtn.innerHTML = grayPaint;
		}
	})
	isOpneCanvas = !isOpneCanvas;
}

function clickClear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function changeColor(){
	paintColor = this.value;
}

function clickPost(){
	const list = document.querySelector('.menu .list');
	list.classList.remove('current');
	const container = document.querySelector('.container');
	const num = this.id.slice(4);
	var xhttp = new XMLHttpRequest();
	let url = `./post/${num}/index.html`;
	xhttp.open('GET', url, true);
	xhttp.send();
	xhttp.onload = function(){
		if(this.readyState === 4 && this.status == 200){
			container.innerHTML = xhttp.responseText;
			computeCanvas();
		}
		else{
			console.log("no");
		}
	}
}

function getPostList(){
	const container = document.querySelector('.container');
	var xhttp = new XMLHttpRequest();
	let url = './src/json/list.json';
	xhttp.open('GET', url, true);
	xhttp.send();
	xhttp.onload = function(){
		if(this.readyState === 4 && this.status == 200){
			container.innerHTML = '<ul class="postList"></ul>';
			const ul = container.querySelector('ul');
			const list = document.querySelector('.menu .list');
			list.classList.add('current');
			const postList = JSON.parse(xhttp.responseText).list;
			postList.forEach(function(post){
				ul.innerHTML += `
				<li class="post" id="post${post.id}">
					<span class="time">${post.datetime}</span>
					<span class="listTitle">${post.name}</span>
				</li>`;
			})
			const posts = document.querySelectorAll('.post');
			posts.forEach(function(post){
				post.addEventListener("click", clickPost, false);
			})
			computeCanvas();
		}
		else{
			console.log("no");
		}
	}
}