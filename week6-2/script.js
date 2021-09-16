window.onload=function() {
    alert("환영합니다! 카드를 눌러 카드팩을 열어보세요!")
    let img1=document.getElementById("card0img")
    img1.hidden=true;
    let img2=document.getElementById("card1img")
    img2.hidden=true;
    let img3=document.getElementById("card2img")
    img3.hidden=true;
    let button=document.getElementById("retry")
    button.hidden=true;

}

function ClickCardPack() {
    alert("카드팩이 열렸습니다!")
    let text1 = document.getElementById("h1text")
    text1.innerText = "카드를 눌러 카드를 확인해보세요!"
    let text2 = document.getElementById("ptext")
    text2.innerText = "카드를 한번 더 누르면 상세페이지로 이동합니다."
    // text2.innerText="카드를 한번 더 누르면 상세페이지로 이동합니다." <= 질문할 내용. 
    // Q1. 대체 텍스트에 스타일 부여 하는 방법 <del></del> 넣고 싶었음.
    let img0 = document.getElementById("cardpackimg")
    img0.hidden = true;
    let img1=document.getElementById("card0img")
    img1.hidden=false;
    let img2=document.getElementById("card1img")
    img2.hidden=false;
    let img3=document.getElementById("card2img")
    img3.hidden=false;
    let button=document.getElementById("retry")
    button.hidden=false;
}

function ClickCard0() {
    let img1=document.getElementById("card0img")
    img1.src="images/cards/card0.png"
    // img1.src="images/cards/card0.png" <= 질문할 내용.
    // Q2. 대체 이미지가 나타난 다음에 외부링크 연결 할 수 있는지.
    let img2=document.getElementById("card1img")
    img2.src="images/cardback/cardback2.png"
    let img3=document.getElementById("card2img")
    img3.src="images/cardback/cardback2.png"
}

function ClickCard1() {
    let img1=document.getElementById("card1img")
    img1.src="images/cards/card1.png"
    let img2=document.getElementById("card0img")
    img2.src="images/cardback/cardback2.png"
    let img3=document.getElementById("card2img")
    img3.src="images/cardback/cardback2.png"
}

function ClickCard2() {
    let img1=document.getElementById("card2img")
    img1.src="images/cards/card2.png"
    let img2=document.getElementById("card0img")
    img2.src="images/cardback/cardback2.png"
    let img3=document.getElementById("card1img")
    img3.src="images/cardback/cardback2.png"
}

function ClickButton() {
    let img1=document.getElementById("card0img")
    img1.src="images/cardback/cardback2.png"
    let img2=document.getElementById("card1img")
    img2.src="images/cardback/cardback2.png"
    let img3=document.getElementById("card2img")
    img3.src="images/cardback/cardback2.png"
}