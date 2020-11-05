import string from './css'


const player = {
    id: undefined,
    string2: '',
    n: 0,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'destroy',
        '#btnPlay': 'create',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.create()
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    create: () => {
        player.id = setInterval(player.play, player.time)
    },
    destroy: () => {
        window.clearInterval(player.id)
    },
    play: () => {
        if (player.n > string.length-1) {
            window.clearInterval(player.id)
            return
        }
        if (string[player.n] === " ") {
            player.string2 += "&nbsp;"
        } else if (string[player.n] === '\n') {
            player.string2 += "<br>"
        } else {
            player.string2 += string[player.n]
        }
        player.ui.demo.innerHTML = player.string2
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        ++player.n;
    },
    slow: () => {
        player.destroy()
        player.time = 200
        player.create()
    },
    normal: () => {
        player.destroy()
        player.time = 100
        player.create()
    },
    fast: () => {
        player.destroy()
        player.time = 0
        player.create()
    },
}

player.init()
