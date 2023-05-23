console.log("success");
var tab_list = document.querySelector('.tabs');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for(var i = 0;i<lis.length;i++){
    //给所有的li添加自定义属性索引号
    lis[i].setAttribute('index',i)
    //设置鼠标点击事件
    lis[i].onclick = function(){
        for( var i = 0;i<lis.length;i++){
            //将所有类的类名设置为空
            lis[i].className='';
            //将所有的display设置为none
            items[i].style.display='none';
        }
        //给点击事件的类名设置为color
        this.className='is-active';
        //获取点击事件的索引号
        var index = this.getAttribute('index');
        // for (var i=0;i<items.length;i++){
        //     items[i].style.display='none';
        // }
        //将点击事件的display设置为block
        items[index].style.display = 'block';
    }
}

var modal = document.getElementById(".myModal");

// Get the button that opens the modal
var btn = document.getElementById(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}