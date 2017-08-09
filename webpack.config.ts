import * as webpack from 'webpack';
import { validate } from 'jsonschema';
import pad = require('pad');

const npmPackage = require('./package.json');
const metadataPath = './src/meta.json';
const metadata = require(metadataPath);
const metadataSchema = require('./meta.schema.json');

interface IMetadata {
    [key: string]: string | boolean | string[];
}

function generateHeader(metadata: IMetadata) {
    const validateResult = validate(metadata, metadataSchema);
    if (!validateResult.valid) {
        throw new Error(`The script metadata at ${metadataPath} is not valid.\n${validateResult}`);
    }

    const lines: string[] = [];
    const padLength = Math.max(...Object.keys(metadata).map(k => k.length));
    const makeLine = (key: string, value: string) => `// @${pad(key, padLength)} ${value}`;

    lines.push('// ==UserScript==');
    for (let key of Object.keys(metadata)) {
        if (key[0] === '$') continue;
        const value = metadata[key];
        if (Array.isArray(value)) {
            for (let subValue of value) {
                lines.push(makeLine(key, subValue));
            }
        } else if (typeof (value) === 'string') {
            lines.push(makeLine(key, value));
        } else if (typeof (value) === 'boolean' && value) {
            lines.push(makeLine(key, ''));
        }
    }
    lines.push('// ==/UserScript==\n');

    return lines.join('\n');
}

export default <webpack.Configuration> {
    entry: './src/index.ts',
    output: {
        filename: `./dist/${npmPackage.name}.user.js`
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            { 
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: generateHeader(metadata),
            raw: true,
            entryOnly: true
        })
    ]
};