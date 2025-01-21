function dlzka(a, b, c) {
    const numerator = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    const denominator = 2 + Math.sqrt(3) / 2 * Math.sqrt(2 * Math.pow(a, 2) * Math.pow(b, 2) + 2 * Math.pow(a, 2) * Math.pow(c, 2) + 2 * Math.pow(c, 2) * Math.pow(b, 2) - Math.sqrt(Math.pow(a, 4) + Math.pow(b, 4) + Math.pow(c, 4)));

    const l = numerator / denominator;
    return l;
}

// const a = 2;
// const b = 3;
// const c = 4;

// const result = dlzka(a, b, c);
// console.log(`Result: ${result}`);
