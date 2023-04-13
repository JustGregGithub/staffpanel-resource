// Created By JustGreg (Greg)
// Made with awful fivem js documentation <3

exports.getAllPlayers = function () {
    let players = {};
    const allPeds = global.getPlayers();

    allPeds.forEach(player => {
        players[player] = {
            name: GetPlayerName(player),
            identifiers: getPlayerIdentifiers(player),
            ping: GetPlayerPing(player),
            id: player
        }
    })

    return players;
}

exports.getPlayerCount = function () {
    let totalPlayers = 0;
    const allPeds = global.getPlayers();

    allPeds.forEach(() => {
        totalPlayers++
    })

    return totalPlayers
}