//toggle gui
function toggleItemViewer(){
    if(document.getElementById("dashboard-item-viewer").style.display == "none"){
        document.getElementById("dashboard-item-viewer").style.display = "block";
        document.getElementById("dashboard-main").style.display = "none";
    }else{
        document.getElementById("dashboard-item-viewer").style.display = "none";
        document.getElementById("dashboard-main").style.display = "block";
    }
}

//add items to viewer