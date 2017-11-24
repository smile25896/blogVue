const brushIcon = `<svg class="icon brushIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="19.291px" height="19.292px" viewBox="0 0 19.291 19.292" style="enable-background:new 0 0 19.291 19.292;" xml:space="preserve">
						<g>
							<path d="M7.621,10.267c-0.367,0.404-0.457,0.694-0.938,1.454c0.311,0.217,0.908,0.718,1.322,1.581   c0.827-0.475,1.213-0.547,1.651-0.916c2.862-2.41,9.87-11.049,9.629-11.299C19.032,0.822,10.141,7.503,7.621,10.267z M5.857,12.392   c-1.243-0.22-2.47,0.566-3.289,2.53c-0.82,1.964-2.284,2.75-2.568,2.702c1.528,0.553,6.188,1.967,7.346-3.416   C6.854,12.917,5.857,12.392,5.857,12.392z" style="fill: rgb(171, 171, 171);"></path>
						</g>
					</svg>`;
// const ctrlIcon = `<input class="colorInput" type="color" value="#8cd9cc" name="">
			// <img class="icon color" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDU5IDQ1OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU5IDQ1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJwYWxldHRlIj4KCQk8cGF0aCBkPSJNMjI5LjUsMEMxMDIsMCwwLDEwMiwwLDIyOS41UzEwMiw0NTksMjI5LjUsNDU5YzIwLjQsMCwzOC4yNS0xNy44NSwzOC4yNS0zOC4yNWMwLTEwLjItMi41NS0xNy44NS0xMC4yLTI1LjUgICAgYy01LjEtNy42NS0xMC4yLTE1LjMtMTAuMi0yNS41YzAtMjAuNCwxNy44NTEtMzguMjUsMzguMjUtMzguMjVoNDUuOWM3MS40LDAsMTI3LjUtNTYuMSwxMjcuNS0xMjcuNUM0NTksOTEuOCwzNTcsMCwyMjkuNSwweiAgICAgTTg5LjI1LDIyOS41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTNjguODUsMTUzLDg5LjI1LDE1M3MzOC4yNSwxNy44NSwzOC4yNSwzOC4yNVMxMDkuNjUsMjI5LjUsODkuMjUsMjI5LjV6ICAgICBNMTY1Ljc1LDEyNy41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTMTQ1LjM1LDUxLDE2NS43NSw1MVMyMDQsNjguODUsMjA0LDg5LjI1UzE4Ni4xNSwxMjcuNSwxNjUuNzUsMTI3LjV6ICAgICBNMjkzLjI1LDEyNy41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTMjcyLjg1LDUxLDI5My4yNSw1MXMzOC4yNSwxNy44NSwzOC4yNSwzOC4yNVMzMTMuNjUsMTI3LjUsMjkzLjI1LDEyNy41eiAgICAgTTM2OS43NSwyMjkuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzM0OS4zNSwxNTMsMzY5Ljc1LDE1M1M0MDgsMTcwLjg1LDQwOCwxOTEuMjVTMzkwLjE1LDIyOS41LDM2OS43NSwyMjkuNXoiIGZpbGw9IiNhYmFiYWIiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />`;

var paintColor = "#a9d6d6";

var container = new Vue({
	el: '.container',
	data:{
		list: [],
		post: ""
	},
	methods:{
		getPostList: getPostList,
		clickPost: clickPost,
		highLight: highLight
	},
	created(){
	 	this.getPostList();
	},
	watch:{
		post: function(){
			setTimeout(computeCanvas, 100)
		}
	}
})

var header = new Vue({
	el: '.header',
	data:{
		title: "Cathy P",
		menu: ["列表", "分類"],
		current: 0,
		icon: {
			brush: brushIcon}
	},
	methods:{
		getPostList: getPostList,
		clickBrushIcon: clickBrushIcon
	}
})

var drawCtrl = new Vue({
	el: '.drawCtrl',
	data:{
		brush:{
			html: brushIcon,
			class: "drawBtn",
			onclick: clickBrushIcon
		},
		color:{
			img:{
				src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDU5IDQ1OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU5IDQ1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJwYWxldHRlIj4KCQk8cGF0aCBkPSJNMjI5LjUsMEMxMDIsMCwwLDEwMiwwLDIyOS41UzEwMiw0NTksMjI5LjUsNDU5YzIwLjQsMCwzOC4yNS0xNy44NSwzOC4yNS0zOC4yNWMwLTEwLjItMi41NS0xNy44NS0xMC4yLTI1LjUgICAgYy01LjEtNy42NS0xMC4yLTE1LjMtMTAuMi0yNS41YzAtMjAuNCwxNy44NTEtMzguMjUsMzguMjUtMzguMjVoNDUuOWM3MS40LDAsMTI3LjUtNTYuMSwxMjcuNS0xMjcuNUM0NTksOTEuOCwzNTcsMCwyMjkuNSwweiAgICAgTTg5LjI1LDIyOS41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTNjguODUsMTUzLDg5LjI1LDE1M3MzOC4yNSwxNy44NSwzOC4yNSwzOC4yNVMxMDkuNjUsMjI5LjUsODkuMjUsMjI5LjV6ICAgICBNMTY1Ljc1LDEyNy41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTMTQ1LjM1LDUxLDE2NS43NSw1MVMyMDQsNjguODUsMjA0LDg5LjI1UzE4Ni4xNSwxMjcuNSwxNjUuNzUsMTI3LjV6ICAgICBNMjkzLjI1LDEyNy41Yy0yMC40LDAtMzguMjUtMTcuODUtMzguMjUtMzguMjVTMjcyLjg1LDUxLDI5My4yNSw1MXMzOC4yNSwxNy44NSwzOC4yNSwzOC4yNVMzMTMuNjUsMTI3LjUsMjkzLjI1LDEyNy41eiAgICAgTTM2OS43NSwyMjkuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzM0OS4zNSwxNTMsMzY5Ljc1LDE1M1M0MDgsMTcwLjg1LDQwOCwxOTEuMjVTMzkwLjE1LDIyOS41LDM2OS43NSwyMjkuNXoiIGZpbGw9IiNhYmFiYWIiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",
				class:[
					"icon",
					"color"
				]
			},
			class: "colorInput",
			value: ""
		},
		clear:{
			text: "清除",
			class: ["ctrl", "clear"],
			onclick: clickClear
		},
		index: {
			bottom: "-84px"
		},
		model: "#a9d6d6"
	},
	watch:{
		model: changePaintColor
	},
	methods:{
		getPostList: getPostList,
		clickBrushIcon: clickBrushIcon
	}
})

/////
Vue.component('draw-board', {
	template: '<canvas v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" width="800px" height="800px"></canvas>',
	data: function(){
		return {
			mouse: {
				current:{
					x: 0,
					y: 0
				},
				previous:{
					x: 0,
					y: 0
				},
				down: false
			}
		}
	},
	methods:{
		draw: function(event){
			if(!this.mouse.down){
				return;
			}
			const canvas = document.querySelector('canvas');
			// computeCanvas();
			const ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.lineCap="round";
			ctx.lineWidth=5;
			// ctx.strokeStyle= `hsl(${hue}, 50%, 70%)`;
			ctx.strokeStyle = paintColor;
			// ctx.strokeStyle="rgba(177, 222, 180, 20)"

			//開始畫～
			ctx.moveTo(this.mouse.previous.x, this.mouse.previous.y);
			ctx.lineTo(this.mouse.current.x, this.mouse.current.y);
			ctx.stroke();

			// //重新設定初始位置
			this.mouse.previous.x = this.mouse.current.x;
			this.mouse.previous.y = this.mouse.current.y;
			// startX = event.offsetX;
			// startY = event.offsetY;
		},
		handleMouseDown: function(event){
			this.mouse.down = true;
			this.mouse.current.x = event.offsetX;
			this.mouse.current.y = event.offsetY;
		},
		handleMouseUp: function(event){
			this.mouse.down = false;
		},
		handleMouseMove: function(event){
			this.mouse.current.x = event.offsetX;
			this.mouse.current.y = event.offsetY;
			if(this.mouse.down){
				this.draw();
			}
			else{
				this.mouse.previous.x = this.mouse.current.x;
				this.mouse.previous.y = this.mouse.current.y;
			}
		}
	}
})

var drawBoard = new Vue({
	el: "#drawBoard",
	data: {
		isOpen: false
	},
	mounted(){
		computeCanvas();
	}
})
////////////////

var footer = new Vue({
	el: '.footer',
	data:{
		auth: `Icons made by <a href="https://www.flaticon.com/authors/vectorgraphit" title="Vectorgraphit">Vectorgraphit</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>`
	}
})

//取得所有文章列表
function getPostList(){
	fetch('./src/json/list.json', {
	       headers:{
	        "Content-Type": "application/json"
	    },
		method: "get",
		    body: JSON.stringify()
	})
	.then(function(res) {
		return res.json();
	})
	.then(function(data){
		container.post = "";
		container.list = data.list;
		header.current = 0;
	})
	.catch(function(err) {
		// Error :(
	})
}

//點擊文章的文章時
function clickPost(id){
	//把menu中的current class拿掉
	header.current = null;
	//讀取文章
	let url = `./post/${id}/index.html`;
	fetch(url, {
	       headers:{
	        "Content-Type": "application/json"
	    },
		method: "get",
		    body: JSON.stringify()
	})
	.then(function(res) {
		return res.text();
	})
	.then(function(data){
		container.post = data;
	})
	.then(highLight)
	.catch(function(err) {
		// Error :(
	})
}

function computeCanvas(){
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	const body = document.body;
	const html = document.documentElement;
	canvas.width = document.querySelector('body').offsetWidth-1	;
	canvas.height = Math.max( body.scrollHeight, body.offsetHeight, 
		                       html.clientHeight, html.scrollHeight,
		                       html.offsetHeight)-4;
}

function clickBrushIcon(){
	const brushIcons = document.querySelectorAll('.brushIcon path');
	brushIcons.forEach(function(brushIcon){
		if(brushIcon.style.fill == "rgb(170, 170, 170)"){
			brushIcon.style.fill = "rgb(50, 50, 50)";
		}
		else{
			brushIcon.style.fill = "rgb(170, 170, 170)";
		}
	});
	drawBoard.isOpen = !drawBoard.isOpen;
	if(drawCtrl.index.bottom == "0px"){
		brushIcons.forEach(function(brushIcon){
			brushIcon.style.fill = "rgb(170, 170, 170)";

		});
		drawCtrl.index.bottom = "-84px";
	}
	else{
		brushIcons.forEach(function(brushIcon){
			brushIcon.style.fill = "rgb(50, 50, 50)";

		});
		drawCtrl.index.bottom = "0px";
	}
}

function changePaintColor(){
	console.log(drawCtrl.color.model);
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	paintColor = drawCtrl.model;
}

function clickClear(){
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function highLight(){
	document.querySelectorAll('pre code').forEach(function(block) {
	  hljs.highlightBlock(block);
	});	
}
