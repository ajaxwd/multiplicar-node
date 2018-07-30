const argv = require('./conf/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'Crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`archivo reado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no encontrado');
}