function deretAngka(n) {
    let angka = "";
    for (let index = 0; index <= n; index++) {
        if (index % 3 == 0) {
            angka += "NIO ";
        } else if (index % 5 == 0) {
            angka += "MIC ";
        } else {
            angka += index + ' ';
        }
    }

    return angka;
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));