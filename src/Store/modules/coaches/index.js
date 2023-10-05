import CoachesMutations from './mutations.js'
import CoachesGetters from './getters.js'
import CoachesActions from './action.js'
export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Adam',
                    lastName: 'Kowalsky',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Adam and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations: CoachesMutations,
    getters: CoachesGetters,
    actions: CoachesActions
}