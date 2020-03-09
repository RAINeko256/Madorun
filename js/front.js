function furniture_move_up(furniture_name) {
    var top = -1;
    top += parseInt(document.getElementById(furniture_name).style.top.replace("px", ""));
    document.getElementById(furniture_name).style.top = top + "px";
    console.log(document.getElementById(furniture_name).style.top);
}