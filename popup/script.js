const pages = {
    blocked: 'blocked',
    pomodoro: 'pomodoro',
    settings: 'settings',
    stats: 'stats',
}

document.getElementById("navbar-pomodoro").addEventListener("click", handleNavbarClick,);
document.getElementById("navbar-pomodoro").navbarOption = pages.pomodoro;
document.getElementById("navbar-settings").addEventListener("click", handleNavbarClick);
document.getElementById("navbar-settings").navbarOption = pages.settings;
document.getElementById("navbar-stats").addEventListener("click", handleNavbarClick);
document.getElementById("navbar-stats").navbarOption = pages.stats;
document.getElementById("navbar-blocked").addEventListener("click", handleNavbarClick);
document.getElementById("navbar-blocked").navbarOption = pages.blocked;

document.getElementById("navbar-blocked").classList.add('selected');

function handleNavbarClick (e) {
    switch (e.currentTarget.navbarOption) {
        case pages.blocked: 
            document.getElementById("main-window").innerHTML='<object type="text/html" data="../pages/blocked_page/blocked.html"></object>';
            break;
        case pages.pomodoro: 
            document.getElementById("main-window").innerHTML='<object type="text/html" data="../pages/pomodoro_page/pomodoro.html"></object>';
            break;
        case pages.settings: 
            document.getElementById("main-window").innerHTML='<object type="text/html" data="../pages/settings_page/settings.html"></object>';
            break;
        case pages.stats: 
            document.getElementById("main-window").innerHTML='<object type="text/html" data="../pages/stats_page/stats.html"></object>';
            break;
    }
    markSelected(e.currentTarget.navbarOption);
}

function markSelected(id) {
    Object.keys(pages).forEach(element => {
        if (element != id) {
            document.getElementById(`navbar-${element}`).classList.toggle('selected');
        }
    });
    document.getElementById(`navbar-${id}`).classList.toggle('selected');
}