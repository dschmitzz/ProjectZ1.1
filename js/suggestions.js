var btn=document.getElementById('btn');
var con=document.getElementById('content');

function message(){
    messCol = document.getElementById('messColumn');
    if(messCol.value.trim()==""){
        alert("The input cannot be empty or blank");
        return;
    }
    const newContent = document.createTextNode(messCol.value);
    content.prepend(document.createElement('br'));
    content.prepend(newContent);
    var messDiv=document.createElement('div');
    
    messCol.value = '';

    // messDiv.setAttribute('style', 'width:450px;height:30px;border:2px dotted #808080;margin-bottom:5px;');
    // {
    //     var messCon = document.createElement('div');
    //     messCon.setAttribute('style','float:left;width:350px;height:30px;line-height:30px;overflow:auto;');
    //     var del=document.createElement('a');
    //     del.setAttribute('style','float:left;width:50px;height:30px;line-height:30px;');
    //     del.setAttribute('href','javascript:;');
    //     del.innerHTML = 'delete';
    //     messDiv.appendChild(messCon);
    //     messDiv.appendChild(del);
    //     messCon.innerHTML=messCol.ariaValueMax;
    //     del.onclick=function() {
    //         con.removeChild(this.parentNode);
    //     }
    // }
    // con.appendChild(messDiv);
    // messCol.value="";
}

document.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        message();
    }
});