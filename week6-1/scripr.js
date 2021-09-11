window.onload=function() {
    alert("환영합니다! 카드를 눌러 카드팩을 열어보세요!")
    let cardimg0=document.getElementById("cardimg0")
    cardimg0.hidden="true";
    let cardimg1=document.getElementById("cardimg1")
    cardimg1.hidden="true";
    let cardimg2=document.getElementById("cardimg2")
    cardimg2.hidden="true";
    let button=document.getElementById("retry")
    button.hidden=true;
}

function ClickCard() {
    alert("카드팩이 열렸습니다!")
    let text=document.getElementById("h1text")
    text.innerText="카드팩이 열렸습니다!"
    let ptext=document.getElementById("ptext")
    ptext.innerText="카드를 클릭하면 상세 페이지로 이동합니다."
    let cardimg0=document.getElementById("cardimg0")
    cardimg0.hidden=false;
    let cardimg1=document.getElementById("cardimg1")
    cardimg1.hidden=false;
    let cardimg2=document.getElementById("cardimg2")
    cardimg2.hidden=false;
    let test=document.getElementById("cardpack")
    test.hidden=true;
    let button=document.getElementById("retry")
    button.hidden=false;
}

function ClickButton() {
    alert("아직 준비중이에요")
}