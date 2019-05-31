function selectSongBlock(newBlock) {
    document.getElementById("selected-song-block").id = "";
    newBlock.id = "selected-song-block";
}

var h, w, x, y;

function maximize() {
    if (require('electron').remote.getCurrentWindow().isMaximized()) {
        require('electron').remote.getCurrentWindow().setSize(w, h);
        require('electron').remote.getCurrentWindow().setPosition(x, y, true);
    } else {
        h = require('electron').remote.getCurrentWindow().getBounds().height;
        w = require('electron').remote.getCurrentWindow().getBounds().width;
        x = require('electron').remote.getCurrentWindow().getBounds().x;
        y = require('electron').remote.getCurrentWindow().getBounds().y;
        require('electron').remote.getCurrentWindow().maximize();
    }
}