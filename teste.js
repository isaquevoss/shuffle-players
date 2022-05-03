const players = [
    {
        nome: 'player1',
        goleiro: true,
        stats: 55
    },
    {
        nome: 'player2',
        goleiro: false,
        stats: 33
    },
    {
        nome: 'player3',
        goleiro: true,
        stats: 99
    },
    {
        nome: 'player4',
        goleiro: false,
        stats: 67
    },
    {
        nome: 'player5',
        goleiro: false,
        stats: 123
    },
    {
        nome: 'player6',
        goleiro: false,
        stats: 123
    },
]

function sortear(players) {
    const goleiros = players.filter(player => {
        return player.goleiro
    })
    const jogadores = players.filter(player => {
        return !player.goleiro
    })

    const times = {
        a: [],
        b: []
    };
    let i = 0;
    while (goleiros.length > 0) {
        i++;
        const goleiro = goleiros[Math.floor(Math.random() * goleiros.length)]
        if ((i % 2) == 0)
            times.a.push(goleiro);
        else
            times.b.push(goleiro);

        goleiros.splice(goleiros.indexOf(goleiro), 1);
    }
    i = 0;
    while (jogadores.length > 0) {
        i++
        const player = jogadores[Math.floor(Math.random() * jogadores.length)]
        if ((i % 2) == 0)
            times.b.push(player);
        else
            times.a.push(player);
        jogadores.splice(jogadores.indexOf(player), 1);
    }

    console.log(JSON.stringify(times));


}

sortear(players);