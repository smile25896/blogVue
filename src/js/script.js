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

//切換是否要打開Canvas
let isOpneCanvas = false;
//畫畫時用，判斷畫數有沒有按下去
let isMousedown = false;
// let hue = 170;
//設定筆刷顏色、寬度、起始位置
let paintColor = "#8cd9cc"
let lineWidth = 5;
// let isWidthAdd = true;
let startX, startY;

const canvas = document.querySelector('#draw');
computeCanvas();
const ctx = canvas.getContext('2d');

//算Canvas的長寬
function computeCanvas(){
	const body = document.body;
	const html = document.documentElement;
	canvas.width = document.querySelector('body').offsetWidth-1	;
	canvas.height = Math.max( body.scrollHeight, body.offsetHeight, 
		                       html.clientHeight, html.scrollHeight, html.offsetHeight );
}

//當mouseDown時觸發，設定筆刷的開始位置
function startPaint(event){
	isMousedown = true;
	startX = event.offsetX;
	startY = event.offsetY;
}

//當mouseMove時觸發，畫畫～
function paint(event){
	//如果畫布隱藏或Mouse沒有Down就跳出
	if(!isOpneCanvas) return;
	if(!isMousedown) return;
	//筆刷基本設定
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=lineWidth;
	// ctx.strokeStyle= `hsl(${hue}, 50%, 70%)`;
	ctx.strokeStyle= paintColor;
	// ctx.strokeStyle="rgba(177, 222, 180, 20)"

	//開始畫～
	ctx.moveTo(startX, startY);
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();

	//重新設定初始位置
	startX = event.offsetX;
	startY = event.offsetY;
	// hue = (hue+1)%360;

	// if(lineWidth >= 30){
	// 	isWidthAdd = false;
	// }else if(lineWidth <= 5){
	// 	isWidthAdd = true;
	// }
}


//當mouseUp時觸發
function endPaint(){
	isMousedown = false;
}

//點draw的icon，會切換畫畫的狀態
function clickDraw(){
	const drawCtrl = document.querySelector('.drawCtrl');
	const ctrls = document.querySelectorAll('.ctrl');
	//隱藏or打開畫布
	canvas.classList.toggle('hidden');
	const drawBtns = document.querySelectorAll('.drawBtn');
	const blackPaint = `<img class="icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTkuMjkxIDE5LjI5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkuMjkxIDE5LjI5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik03LjYyMSwxMC4yNjdjLTAuMzY3LDAuNDA0LTAuNDU3LDAuNjk0LTAuOTM4LDEuNDU0YzAuMzExLDAuMjE3LDAuOTA4LDAuNzE4LDEuMzIyLDEuNTgxICAgYzAuODI3LTAuNDc1LDEuMjEzLTAuNTQ3LDEuNjUxLTAuOTE2YzIuODYyLTIuNDEsOS44Ny0xMS4wNDksOS42MjktMTEuMjk5QzE5LjAzMiwwLjgyMiwxMC4xNDEsNy41MDMsNy42MjEsMTAuMjY3eiBNNS44NTcsMTIuMzkyICAgYy0xLjI0My0wLjIyLTIuNDcsMC41NjYtMy4yODksMi41M2MtMC44MiwxLjk2NC0yLjI4NCwyLjc1LTIuNTY4LDIuNzAyYzEuNTI4LDAuNTUzLDYuMTg4LDEuOTY3LDcuMzQ2LTMuNDE2ICAgQzYuODU0LDEyLjkxNyw1Ljg1NywxMi4zOTIsNS44NTcsMTIuMzkyeiIgZmlsbD0iIzQ0NDQ0NCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;
	const grayPaint = `<img class="icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTkuMjkxIDE5LjI5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkuMjkxIDE5LjI5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik03LjYyMSwxMC4yNjdjLTAuMzY3LDAuNDA0LTAuNDU3LDAuNjk0LTAuOTM4LDEuNDU0YzAuMzExLDAuMjE3LDAuOTA4LDAuNzE4LDEuMzIyLDEuNTgxICAgYzAuODI3LTAuNDc1LDEuMjEzLTAuNTQ3LDEuNjUxLTAuOTE2YzIuODYyLTIuNDEsOS44Ny0xMS4wNDksOS42MjktMTEuMjk5QzE5LjAzMiwwLjgyMiwxMC4xNDEsNy41MDMsNy42MjEsMTAuMjY3eiBNNS44NTcsMTIuMzkyICAgYy0xLjI0My0wLjIyLTIuNDcsMC41NjYtMy4yODksMi41M2MtMC44MiwxLjk2NC0yLjI4NCwyLjc1LTIuNTY4LDIuNzAyYzEuNTI4LDAuNTUzLDYuMTg4LDEuOTY3LDcuMzQ2LTMuNDE2ICAgQzYuODU0LDEyLjkxNyw1Ljg1NywxMi4zOTIsNS44NTcsMTIuMzkyeiIgZmlsbD0iI2FiYWJhYiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;

	//依照畫畫狀態，設定icon灰色或黑色，和打開or隱藏左下角的畫圖控制窗
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

//點清除時，清除畫部內容
function clickClear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//點換顏色時～
function changeColor(){
	paintColor = this.value;
}

//點文章列表裡的文章
function clickPost(){
	const list = document.querySelector('.menu .list');
	//在menu上，列表移除class:current狀態
	list.classList.remove('current');
	const container = document.querySelector('.container');
	//取id的第四碼開始 例如post01 >> 01，再去取url~
	const num = this.id.slice(4);
	let url = `./post/${num}/index.html`;

	//get那篇文章
	var xhttp = new XMLHttpRequest();
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
			//再container加ul
			container.innerHTML = '<ul class="postList"></ul>';
			const ul = container.querySelector('ul');

			//在menu上，列表加上class:current狀態
			const list = document.querySelector('.menu .list');
			list.classList.add('current');

			//get文章列表
			const postList = JSON.parse(xhttp.responseText).list;
			postList.forEach(function(post){
				ul.innerHTML += `
				<li class="post" id="post${post.id}">
					<span class="time">${post.datetime}</span>
					<span class="listTitle">${post.name}</span>
				</li>`;
			})

			//幫postList的post加上監聽事件
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