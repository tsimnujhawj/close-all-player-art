const socketName = 'module.close-player-art';

const closeImagePopout = () => {
    const imagePopout = document.querySelector('.image-popout a.close');
    if (imagePopout) {
        imagePopout.click();
        return;
    }

    const journalPopout = document.querySelector('.journal-sheet a.close');
    if (journalPopout) {
        journalPopout.click();
        return;
    }
};

Hooks.on('ready', () => {
    if (game.user.isGM === true) {
        document.addEventListener('keypress', e => {
            if (e.key = '`') {
                closeImagePopout();
                game.socket.emit(socketName);
            }
        });
    }

    game.socket.on(socketName, closeImagePopout);
});