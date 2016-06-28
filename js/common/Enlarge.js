function Enlarge(id){
	//抽取属性
	this.container = document.getElementById(id);
	this.width = 300;
	this.height = 300;
	this.url = "1.jpg";
	this.scale = 4;
	this.createHTML();
	this.onHover();
}
Enlarge.prototype = {
	constructor : Enlarge,
	createHTML : function(){
		//生成放大镜HTML+CSS代码

		//左侧DIV
		this.smallDiv = document.createElement("div");
		this.smallDiv.style.cssText = "width:"+this.width+"px; height:"+this.height+"px; position:relative; top:10px;";

		//生成缩略图
		var smallImg = document.createElement("img");
		smallImg.src = this.url;
		smallImg.style.cssText = "width:"+this.width+"px; height:"+this.height+"px;";

		//生成滤镜
		this.lay = document.createElement("div");
		this.lay.style.cssText = "width:"+this.width / this.scale+"px; height:"+this.height / this.scale+"px; border:solid 1px #666; background:#fff; opacity:0.5; filter:alpha(opacity:50); position:absolute; left:0; top:0; display:none;";

		//右侧DIV
		this.bigDiv = document.createElement("div");
		this.bigDiv.style.cssText = "width:"+this.width+"px; height:"+this.height+"px; position:absolute; left:"+(this.smallDiv.offsetLeft + this.width + 10)+"px; top:10px; overflow:hidden; display:none;";

		this.bigImg = document.createElement("img");
		this.bigImg.src = this.url;
		this.bigImg.style.cssText = "width:"+(this.width * this.scale)+"px; height:"+(this.height * this.scale)+"px;";

		this.smallDiv.appendChild(smallImg);
		this.smallDiv.appendChild(this.lay);
		this.bigDiv.appendChild(this.bigImg);
		this.container.appendChild(this.smallDiv);
		this.container.appendChild(this.bigDiv);

	},
	onHover : function(){
		//控制放大镜中的事件
		var that = this;
		this.smallDiv.onmouseover = function(){
			that.lay.style.display = "block";
			that.bigDiv.style.display = "block";
		}
		this.smallDiv.onmouseout = function(){
			that.lay.style.display = "none";
			that.bigDiv.style.display = "none";
		}
		this.smallDiv.onmousemove = function(e){
			e = e || event;
			that.lay.style.left = e.clientX - that.lay.offsetWidth / 2 + "px";
			that.lay.style.top = e.clientY - that.smallDiv.offsetTop - that.lay.offsetHeight / 2 + "px";
			if(that.lay.offsetLeft <= 0){
				that.lay.style.left = 0 + "px";
			}
			if(that.lay.offsetLeft >= that.smallDiv.offsetWidth - that.lay.offsetWidth){
				that.lay.style.left = that.smallDiv.offsetWidth - that.lay.offsetWidth + "px";
			}
			if(that.lay.offsetTop <= 0){
				that.lay.style.top = 0;
			}
			if(that.lay.offsetTop >= that.smallDiv.offsetHeight - that.lay.offsetHeight){
				that.lay.style.top = that.smallDiv.offsetHeight - that.lay.offsetHeight + "px";
			}
			that.bigImg.style.marginLeft = that.lay.offsetLeft * that.scale * -1 + "px";
			that.bigImg.style.marginTop = that.lay.offsetTop * that.scale * -1 + "px";
		}
	}
}

function $(id){
	new Enlarge(id);
}