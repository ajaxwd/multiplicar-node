const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        defaut: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'imprime la tabla de multiplicar', opts)
    .command('Crear', 'crear la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}