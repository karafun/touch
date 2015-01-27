var tcpClient;
var settings;
$(document).ready(function () {
    settings =  new Settings();
    setTimeout(function() {
        if(settings.isReady) {
            tcpClient = new TcpClient(settings);
            tcpClient.connect();
            player = new Player(tcpClient);
            tcpClient.setPlayer(player);
            clearTimeout();
        }
    }, 1000);
    
    $('a.topbar__right').click(function () {
        $('.topbar__search').focus();
        return false;
    });

    $('.empty_search').click(function () {
        $('.topbar__search').val('');
    });
});