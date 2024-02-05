//alert("hello");
var pattern=[];
var upattern=[];
var color=["red", "blue", "green", "yellow" ];
var start=false;
var level=0;

$(document).keypress(function(){
    if(!start)
    {
        $("#level-title").text("Level "+level);
        seq();
        start=true;
    }
});

$(".btn").click(function(){
    var ucolor=$(this).attr("id");
    upattern.push(ucolor);
    sound(ucolor);
    animate(ucolor);
    check(upattern.length-1);
});

function check(currlvl)
{
    if(pattern[currlvl]===upattern[currlvl])
    {
        if(upattern.length===pattern.length)
        {
            setTimeout(function () {
                seq();
            },1000);
        }
    }
    else
    {
        sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over! Press any key to restart");
        startOver();
    }
}

function startOver()
{
    level=0;
    start=false;
    pattern=[];
}

function seq()
{
    upattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var a=Math.floor(Math.random()*4);
    var ccolor=color[a];
    pattern.push(ccolor);
    $("#"+ccolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(ccolor);
}

function sound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animate(currcolor)
{
    $("#"+currcolor).addClass("pressed");
    setTimeout(function () {
        $("#" + currcolor).removeClass("pressed");
      }, 100);
}