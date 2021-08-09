const {Is} = require('./types.js')
const getProto = Object.getPrototypeOf

const classes = {

    ancestors: function classAncestors(arg) {
        const ancs = []
        if (Is.Function(arg) === false) {
            return ancs
        }
        for (let cls = getProto(arg); cls && cls.name; cls = getProto(cls)) {
            ancs.push(cls)
        }
        return ancs
    },

    inherits: function classInherits(arg, check) {
        if (Is.Function(arg) === false || Is.Function(check) === false) {
            return false
        }
        for (let cls = getProto(arg); cls && cls.name; cls = getProto(cls)) {
            if (cls === check) {
                return true
            }
        }
        return false
    },
}

module.exports = {
    ...classes,
    ...namedf(classes),
}

function namedf(obj) {
    return Object.fromEntries(
        Object.values(obj).map(f => [f.name, f])
    )
}