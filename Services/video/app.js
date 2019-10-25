function getVideo()
{
    var videoLink = document.getElementById("videoSource").value;
    var videoFinal = document.getElementById("videoFinal");
    videoFinal.src = videoLink;
    videoFinal.load();
    videoFinal.play();
}