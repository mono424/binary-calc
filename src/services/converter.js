const ALPHABET = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const decodeDezByBase = (base, num) => {
    if (num <= 0 || isNaN(num)) return [];
    return [...decodeDezByBase(base, Math.floor(num / base)), ALPHABET[num % base]];
};

const decodeDezFractToBinary = (num) => {
    num = num * 2;
    if (num == 1) return [ALPHABET[1]];
    if (num == 0) return [];

    return (num > 1) 
    ? [ALPHABET[1], ...decodeDezFractToBinary((num - 1))]
    : [ALPHABET[0], ...decodeDezFractToBinary(num)];
};

const isLegal = (base, num) => {
    num = num.replace(" ", "");
    if (!num || num.length <= 0) return false;
    return [...num].every(c => ALPHABET.indexOf(c) >= 0 && ALPHABET.indexOf(c) < base);
}

const convertToDez = (base, num) => {
    num = num.replace(" ", "");
    if (num == "") return 0;
    if(base == 10) return parseInt(num);
    return ALPHABET.indexOf(num[num.length - 1]) + base * convertToDez(base, num.substr(0, num.length - 1));
};

const convertToDezFract = (base, num) => {
    num = num.replace(" ", "");
    if (num == "") return 0;
    if(base == 10) return parseFloat("0." + num);
    return (ALPHABET.indexOf(num[0]) + convertToDezFract(base, num.substr(1, num.length - 1))) / base;
};

const fractDezToBinaryWay = (onum) => {
    let num = onum * 2;
    if (num == 1) return [ { input: onum, process: ['*', '2'], processed: num, resCond: [num, '>=', '1'], result: ALPHABET[1] } ];
    if (num == 0) return [ { input: onum, process: ['*', '2'], processed: num, resCond: [num, '<', '1'], result: ALPHABET[0], notice: "Letzte null kann weggelassen werden" } ];

    return (num > 1) 
    ? [{ input: onum, process: ['*', '2'], processed: num, resCond: [num, '>=', '1'], result: ALPHABET[1] }, ...fractDezToBinaryWay((num - 1))]
    : [{ input: onum, process: ['*', '2'], processed: num, resCond: [num, '<', '1'], result: ALPHABET[0] }, ...fractDezToBinaryWay(num)];
};

export default {
    decodeDezByBase,
    isLegal,
    convertToDez,
    convertToDezFract,
    decodeDezFractToBinary,
    fractDezToBinaryWay,
}
