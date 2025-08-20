const DEFAULTS = {
    logLevel: 0,
    outputForrnat: 'html'
}
function processContent (options) {
    options = Object.assign({}, DEFAULTS, options)
    console.log(options)
}