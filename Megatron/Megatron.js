function uncover()
{
    if(document.getElementById("aud").paused)
    {
        document.getElementById("aud").play();
    }
    document.getElementById("cover").className="uncovered";
}