
var $infoList = $('#infoList');
var $infoPanel = $('#infoPanel');


let displayInfo = function (info) {
    var $li = $('<li></li>', { text: info});
    appendLIst($li);
};


let appendLIst = function ($item) {
    $infoList.append( $item );
    $infoList.animate({scrollTop: $infoList.prop("scrollHeight")}, 500);
}
