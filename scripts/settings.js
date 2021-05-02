import constants from '../constants.js';

export const registerSettings = () => {
    game.settings.register(constants.modName, 'hotkey', {
        name: `${constants.modName}.settings.hotkey.name`,
        hint: `${constants.modName}.settings.hotkey.hint`,
        scope: 'world',
        config: true,
        default: "`",
        type: String,
    });
};