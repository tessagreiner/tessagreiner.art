import * as fs from 'fs';
import glob from 'glob';
import sharp from 'sharp';

function isObject(object) {
    return object != null && object.constructor.name === 'Object';
}

function isArray(object) {
    return object != null && object.constructor.name === 'Array';
}

/**
 * Load JSON configuration files.
 *
 * @param paths {string[]} An array of configuration file paths.
 * @returns {*[]} An array of configuration objects.
 */
function loadConfigs(paths) {
    const configs = [];

    paths.forEach(path => {
        const raw = fs.readFileSync(path);
        const parsed = JSON.parse(raw);

        configs.push(parsed);
    });

    return configs;
}

/**
 * Find all values corresponding to a matching property.
 *
 * @param property
 * @param object
 * @param values
 * @returns {*[]}
 */
function findAllValuesOfMatchingProperty(property, object, values = []) {
    if (isArray(object)) {
        object.forEach(value => {
            return findAllValuesOfMatchingProperty(property, value, values);
        });
    }

    if (isObject(object)) {
        Object.entries(object).forEach(([key, value]) => {
            if (key.match(property)) values.push(value);
            return findAllValuesOfMatchingProperty(property, value, values);
        });
    }

    return values;
}

function getFileTypes(fileNames) {
    const fileTypes = new Set([]);

    fileNames.forEach(fileName => {
        fileTypes.add(fileName.split('.').pop());
    });

    return fileTypes;
}

function findFiles(path, types) {
    return glob.sync(`${path}/*.${types.join('|')}`);
}

async function generateOptimisedImages(images, widths) {
    images.forEach(image => {
        widths.forEach(async (width) => {
            const left = image.substring(0, image.lastIndexOf('.'));
            const right = image.substring(image.lastIndexOf('.'), image.length);

            await sharp(image)
                .resize(width)
                .toFile(`${left}-${width}${right}`);
        });
    });
}

// Load the portfolio configuration files.
const loadedConfigs = loadConfigs([
    './static/artwork/artwork.json'
]);

const configuredImages = findAllValuesOfMatchingProperty('image', loadedConfigs);
const imageTypes = getFileTypes(configuredImages);
const builtImages = findFiles('./build/**', Array.from(imageTypes));

// Find the intersection of `configuredImages` and `builtImages`.
const imagesToOptimise = builtImages.filter(builtImage => {
    return configuredImages.some(configuredImage => {
        return configuredImage.includes(builtImage.split('/').pop());
    });
});

await generateOptimisedImages(imagesToOptimise, [200, 300, 400]);

// Logging.
// console.log(loadedConfigs);
// console.log(configuredImages);
// console.log(imageTypes);
// console.log(builtImages);
// console.log(imagesToOptimise);
console.log(`Optimised images.`);

