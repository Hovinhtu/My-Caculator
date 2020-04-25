var input = document.querySelector(".input");
var items = Array.from(document.querySelectorAll(".item"));
var item1=document.querySelector(".item1");
items.forEach(function(btn){
btn.addEventListener("click",function(){
	var checkBtn = btn.innerHTML;
	if(input.innerHTML == "0")input.innerHTML = "";
	if(checkBtn == 'C'|| checkBtn =="AC"){input.innerHTML = "0";
item1.innerHTML = "AC";
}
	else if(checkBtn =="DEL"){
		 var arrText= Array.from(input.innerHTML);		 arrText.splice(arrText.length-1,1);
		 if(arrText.length !=0)input.innerHTML = arrText.join('');
	 else input.innerHTML = "0";
	} 
   else if (checkBtn == "="){
			input.innerHTML = eval(input.innerHTML);
			input.className = 'input';
	}
	else{
	input.innerHTML += checkBtn;
	item1.innerHTML = "C";
	if (checkBtn == "+" || checkBtn == "-" || checkBtn == "*" || checkBtn == "/")input.className ='goUp';
		}
})		
})
		