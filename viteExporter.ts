import { resolve } from 'path';
import * as fs from 'fs';

export function toEntry({exports, main}: {exports: string[], main: string}) {
    // update package.json
    let pkg = JSON.parse(fs.readFileSync(resolve(__dirname, './package.json'), 'utf-8'));
    let oldExports = pkg.exports;
    pkg.exports = {}
    for (const file of exports) {
        let fileWithoutExt = file.replace(/\.[^/.]+$/, "");

        pkg.exports[file === main ? '.' : ('./' + fileWithoutExt)] = {
            import: './dist/' + fileWithoutExt + '.mjs',
            require: './dist/' + fileWithoutExt + '.js',
        };
    }

    if (JSON.stringify(pkg.exports) !== JSON.stringify(oldExports)) {
        console.warn('package.json exports changed, updating...')
        fs.writeFileSync(resolve(__dirname, './package.json'), JSON.stringify(pkg, null, 4));
    }

    return exports.map((file) => resolve(__dirname, './src/', file));
}

