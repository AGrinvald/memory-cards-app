import { nanoid } from 'nanoid'

export const state = () => ({
    timer: {
        hours: 0,
        minutes: 0,
        seconds: 0
    },
    cards: [],
    gridSize: 6,
    status: null
})

export const getters = {
    openedCards: (state) => {
        return state.cards.filter((item) => {
            return item.isOpened && item.isMatched === false
        })
    },
    isAllCardsMatched: (state) => {
        const matched = state.cards.filter((item) => {
            return item.isMatched
        })

        return matched.length === state.cards.length
    }
}

export const mutations = {
    initializeCards(state) {
        const cards = []
        const uniqueCardsAmount = state.gridSize * state.gridSize / 2

        for (let i = 0; i < uniqueCardsAmount; i++) {
            for (let j = 0; j < 2; j++) {
                const card = {
                    id: nanoid(),
                    image: `https://robohash.org/${i}?set=set2`,
                    isOpened: false,
                    isMatched: false
                }
                cards.push(card)
            }
        }
        state.cards = cards
    },
    shuffleCards(state) {
        const cards = [...state.cards]
        const length = cards.length

        let card = null

        for (let i = 0; i < cards.length; i++) {
            const randomIndex = Math.floor(Math.random() * (length - 1));

            card = cards[randomIndex]
            cards[randomIndex] = cards[i]
            cards[i] = card
        }

        state.cards = cards
    },
    resetTimer(state) {
        state.timer = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    tickTimer(state) {
        let { hours, minutes, seconds } = state.timer
        seconds++

        if (seconds === 60) {
            minutes++
            seconds = 0
        }
        if (minutes === 60) {
            hours++
            minutes = 0
            seconds = 0
        }

        state.timer = { hours, minutes, seconds }
    },
    setStatus(state, { status }) {
        state.status = status
    },
    openCard(state, { index }) {
        const card = { ...state.cards[index] }
        card.isOpened = true

        state.cards.splice(index, 1, card)
    },
    closeCards(state, { cards }) {
        for (const card of cards) {
            const index = state.cards.findIndex((item) => item.id === card.id)
            card.isOpened = false

            state.cards.splice(index, 1, card)
        }

    },
    matchCards(state, { cards }) {
        for (const card of cards) {
            const index = state.cards.findIndex((item) => item.id === card.id)
            card.isMatched = true

            state.cards.splice(index, 1, card)
        }
    },
    resetCards(state) {
        const cards = [...state.cards]

        for (const card of cards) {
            card.isOpened = false
            card.isMatched = false
        }

        state.cards = cards
    }
}

export const actions = {
    initialize({ commit }) {
        commit('initializeCards')
        commit('shuffleCards')
    },
}
