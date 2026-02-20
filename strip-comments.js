const fs = require('fs');
const path = require('path');

function stripComments(src) {
    let result = '';
    let i = 0;
    while (i < src.length) {
        // Single-quoted string
        if (src[i] === "'") {
            let j = i + 1;
            while (j < src.length && !(src[j] === "'" && src[j - 1] !== '\\')) j++;
            result += src.slice(i, j + 1);
            i = j + 1;
            // Double-quoted string
        } else if (src[i] === '"') {
            let j = i + 1;
            while (j < src.length && !(src[j] === '"' && src[j - 1] !== '\\')) j++;
            result += src.slice(i, j + 1);
            i = j + 1;
            // Template literal
        } else if (src[i] === '`') {
            let j = i + 1;
            while (j < src.length && !(src[j] === '`' && src[j - 1] !== '\\')) j++;
            result += src.slice(i, j + 1);
            i = j + 1;
            // Block comment
        } else if (src[i] === '/' && src[i + 1] === '*') {
            let j = i + 2;
            while (j < src.length && !(src[j] === '*' && src[j + 1] === '/')) j++;
            i = j + 2; // skip the closing */
            // Line comment
        } else if (src[i] === '/' && src[i + 1] === '/') {
            let j = i + 2;
            while (j < src.length && src[j] !== '\n') j++;
            i = j; // skip to newline (keep the newline)
        } else {
            result += src[i++];
        }
    }
    // Clean up lines that are now blank or only whitespace
    return result.replace(/^[ \t]+$/gm, '').replace(/\n{3,}/gm, '\n\n');
}

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== 'node_modules') {
            walk(full);
        } else if (entry.isFile() && /\.(js|jsx)$/.test(entry.name)) {
            const original = fs.readFileSync(full, 'utf8');
            const stripped = stripComments(original);
            if (stripped !== original) {
                fs.writeFileSync(full, stripped, 'utf8');
                console.log('✔', path.relative(process.cwd(), full));
            }
        }
    }
}

walk(path.join(__dirname, 'src'));
console.log('\nDone — all comments removed.');
