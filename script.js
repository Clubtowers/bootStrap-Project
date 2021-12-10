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