const pkg = module.exports = {
    // classes
    get Logger()    { return require('./src/logger.js')     },
    get HashProxy() { return require('./src/hash-proxy.js') },
    get Errors()    { return require('./src/errors.js')     },
    // utils
    get arrays()  { return require('./src/util/arrays.js')  },
    get buffers() { return require('./src/util/buffers.js') },
    get chars()   { return require('./src/util/chars.js')   },
    get classes() { return require('./src/util/classes.js') },
    get codes()   { return require('./src/util/codes.js')   },
    get colors()  { return require('./src/util/colors.js')  },
    get errors()  { return require('./src/util/errors.js')  },
    get merging() { return require('./src/util/merging.js') },
    get objects() { return require('./src/util/objects.js') },
    get regexes() { return require('./src/util/regexes.js') },
    get strings() { return require('./src/util/strings.js') },
    get types()   { return require('./src/util/types.js')   },
    // shortcuts
    get Cast()   { return pkg.types.Cast    },
    get Is()     { return pkg.types.Is      },
    get typeOf() { return pkg.types.typeOf  },
    get merge()  { return pkg.merging.merge },
}