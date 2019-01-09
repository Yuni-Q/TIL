// html 문서를 전부 읽고 나서 onload한다.
// head tag 사이에 script를 넣었을 때 사용한다.
// body tag 끝에 사용하면 사용하지 않아도 된다.
window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}
