
window.onload = addListeners();
var offX;
var offY;
function addListeners() {
    document.querySelector('.login-modal').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp () {
    // mousemove event: mouse在元素内部移动
    //鬆開滑鼠時, 移除在瀏覽器object(window)所設置的偵測/監聽滑鼠移動函數
  window.removeEventListener('mousemove', loginframeMove, true);
}

function mouseDown(e) {
    
    var loginDiv = document.querySelector('.login-modal');
    offX =  e.offsetX;
    offY =  e.offsetY;
    //按住滑鼠時, 在瀏覽器object(window)新增偵測/監聽滑鼠移動函數
    window.addEventListener('mousemove', loginframeMove, true);
}

function loginframeMove(e) {
    var loginDiv = document.querySelector('.login-modal');
    loginDiv.style.position = 'absolute';
    loginDiv.style.top = (e.clientY - offY) + 'px';
    loginDiv.style.left = (e.clientX - offX) + 'px';
}

var closeBtn = document.querySelector('.close-sign');

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
  document.querySelector('.login-modal').style.display =  'none';
});

document.querySelector('.to-display').addEventListener('click', toggleDisplay);



function toggleDisplay(e) {
    e.preventDefault();
    var loginDiv = document.querySelector('.login-modal')
var isDisplay = ( loginDiv.style.display === 'none' ) ? false : true;
    if(!isDisplay)
       loginDiv.style.display = 'inline-block';
    else 
      loginDiv.style.display = 'none';
}