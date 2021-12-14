var counter = 0;

function clickButton()
{
    counter++;
    if(counter == 1)
    {
        document.getElementById("buttonTO").innerText = "why did you press me?";
    }
    if(counter == 2)
    {
        document.getElementById("buttonTO").innerText = "Stop it";
    }
    if(counter == 4)
    {
        document.getElementById("buttonTO").innerText = "This button has no purpose";
    }
    if(counter == 5)
    {
        document.getElementById("buttonTO").innerText = "Warning #1";
    }
    if(counter == 6)
    {
        document.getElementById("buttonTO").innerText = "Warning #2";
    }
    if(counter == 7)
    {
        document.getElementById("buttonTO").innerText = "Warning #3";
    }
    if(counter == 8)
    {
        document.getElementById("buttonTO").innerText = "Alright enough is enough stop pressing it";
    }
    if(counter == 9)
    {
        document.getElementById("buttonTO").innerText = "I am being serious";
    }
    if(counter == 10)
    {
        document.getElementById("buttonTO").innerText = "If you press this one more time you are gonna be kicked off this website";
    }
    if(counter == 11)
    {
        window.close()
    }
}
function clickButton1()
{
  document.getElementById("box").innerText = "Make sure to have your best work in the beginning of your portfolio. First impressions are everything.";
}
function clickButton2()
{
  document.getElementById("box").innerText = "Make sure to include alot of variety in your work";
}
function clickButton3()
{
  document.getElementById("box").innerText = "Keep the portfolio up to date. Don't include work that you have done god knows how long ago";
}
function clickButton4()
{
  document.getElementById("box").innerText = "Be confident in your work. If you want to add something add it. Don't be scared!";
}
function clickButton5()
{
  document.getElementById("box").innerText = "Make sure your work is to the point and easily acessible in the platform you are using to create the portfolio.";
}
function clickButton6()
{
  document.getElementById("box").innerText = "Make sure the portfolio has style! Make it appealing to the eye";
}