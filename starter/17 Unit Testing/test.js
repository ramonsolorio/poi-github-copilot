const { generateRFC } = require('./index.js'); // assuming the function is in index.js

test('generateRFC function', () => {
    expect(generateRFC('John Doe', '1980-07-20')).toBe('DOJ800720');
    expect(generateRFC('Jane Smith', '1990-01-01')).toBe('SMJ900101');
});