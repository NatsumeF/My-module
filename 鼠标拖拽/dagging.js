/*
 *调用方式 dagging(ele,click);
 *ele代表可以拖动的dom;
 *click代表点击的部位,如果只传一个表示点击dom任意位置整个dom都可以拖动;
 */

function dagging(ele, click) {
	//如果只传入一个参数 表示这个dom都可以拖动;
	if (!click) {
		click = ele;
	}

	click.addEventListener("mousedown", function(e) {
		var flg = true;
		var mouseX = e.clientX,
			mouseY = e.clientY,
			divX=ele.offsetLeft,
			divY=ele.offsetTop;
			function move(e) {
				if (flg) {
					var _x = e.clientX,
						_y = e.clientY;
					ele.style.left = _x - (mouseX - divX) + "px";
					ele.style.top = _y - (mouseY - divY) + "px";
				}
			}
		window.addEventListener("mousemove", move)
		div.onmouseup = function() {
			flg = false;
			window.removeEventListener("mousemove", move)
		}
	})

}