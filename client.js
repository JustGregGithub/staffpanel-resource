// Created By JustGreg (Greg)
// Made with awful fivem js documentation <3

let players = [];
let DeathReason, Killer, DeathCauseHash, Weapon;

const NetEvents = ['client-sendMessage', 'client-getServerId', 'getPlayers']

NetEvents.forEach(event => {
  RegisterNetEvent(event)
})

on('client-sendMessage', async (data) => {
	emit('chat:addMessage', {
        args: [
          data
        ]
	})
});

on('getPlayers', async () => {
  const players = GetNumberOfPlayers();
  console.log(players)
})

on('client-getServerId', async (src) => {
  console.log('test')
  const serverId = GetPlayerServerId(src);
  console.log(serverId)
  emitNet('server-sendServerId', serverId)
})

setInterval(() => {
  console.log(IsPedDeadOrDying(PlayerPedId()))
  if (IsPlayerDead(PlayerPedId())) {
    const pedKiller = GetPedSourceOfDeath(PlayerPedId())
    DeathCauseHash = GetPedCauseOfDeath(PlayerPedId())

    const killer = NetworkGetPlayerIndexFromPed(pedKiller)

    emitNet('server-playedDied', killer, DeathCauseHash)
  }
}, 0)