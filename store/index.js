import { nanoid } from 'nanoid'

export const state = () => ({
    winners: []
})

export const mutations = {
    addWinner(state, { name, timer }) {
        state.winners.push({ id: nanoid(), name, date: new Date(), timer })
    }
}