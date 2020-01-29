export default (array, key = 'id') => {
    return [...array].reduce((current, next) => {

        return { ...current, [next[key]]: { ...next } }
    }, {})
}