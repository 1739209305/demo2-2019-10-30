import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Output() resize = new EventEmitter<void>();

  constructor() { 
  	/*sideright
  	获取最外面的div*/

  }

  ngOnInit() {
  		/*window.onload = function(argument) {
  			console.log("window.onload is start");
  			var min_width = "350px";
  			var max_width = "500px";
  			var slider = document.getElementById("slider");
  			console.log(slider);
  			var demo = document.getElementById("demo");
  			console.log(demo);		
  }*/
  

}
  
  keyUp(){
  	console.log("keyUp thing is already start");
  	var username = 'ql91565';

  	var myDate = new Date();  
  	var Day = (myDate.toLocaleDateString());
  	var Hour = (myDate.getHours());
  	var Minute = (myDate.getMinutes());
  	var Time = Day+" "+Hour+":"+Minute;
  	var labelInf = username + "---" + Time;
  	/*console.log(Time);*/
  	var comments = document.getElementById("comments");
  	/*var inputValue = (document.getElementById("comments") as HTMLInputElement).value;*/
   /* 一种解决的方案*/
  	if(comments['value'].trim().length>0){
  		console.log("comments.value not a null");
  		/*接下来写增加标签函数*/
  		/*获取discuss的div*/
    	var discuss = document.getElementById("discuss");
    	console.log(discuss);
  		console.log(discuss.children[0]);
  		/*移除第一个节点*/
  		/*discuss.children[0].remove();*/

  		//获取了最后一个节点
  		var Lastnode = discuss.lastElementChild;
  		console.log(Lastnode);
  		/*克隆了最后一个标签*/
  		var addNode = Lastnode.cloneNode(true);
  		var mat_label = (addNode as any).children[0].children[0].children[0].lastElementChild.children[0].children[0];
  		console.log(mat_label);
  		mat_label.innerHTML = labelInf;
  		discuss.appendChild(addNode);
  		var mat_textarea = (addNode as any).children[0].children[0].children[0].children[0];
  		console.log(mat_textarea);
  		mat_textarea['value'] = comments['value'].trim();
  		comments['value'] = "";

  		/*让滚动条自动到底部*/
    	discuss.scrollTop = discuss.scrollHeight;
  	}
  	else{
  		alert("please input your comments,thank");
  	}
	  	
  }
}
