import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode : "development",
    entry : {
        index : resolve(__dirname, "src/js/index.js"),
        menu : resolve(__dirname, "src/js/menu.js"),
    },
    output : {
        path :  resolve(__dirname, "src/js/"),
        filename : "[name].js"
    }
}