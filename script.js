const getColor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215)
    const colorCode='#'+randomNumber.toString(16)
    document.getElementById('color-code').innerText=colorCode
    document.body.style.backgroundColor=colorCode
    console.log(colorCode);

    // copy the color code when clicking on the button
    navigator.clipboard.writeText(colorCode)
}
document.getElementById('btn').onclick=getColor

getColor()

