const unique = (arr) => [...new Set(arr)];

const chunk = (arr, size) =>
    arr.reduce((chunks, item, i) => {
        const chunkIndex = Math.floor(i / size);
        chunks[chunkIndex] = chunks[chunkIndex] || [];
        chunks[chunkIndex].push(item);
        return chunks;
    }, []);

const flatten = (arr) => arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item) : item), []);

const removeDuplicates = (arr) => Array.from(new Set(arr));

module.exports = { unique, chunk, flatten, removeDuplicates };
