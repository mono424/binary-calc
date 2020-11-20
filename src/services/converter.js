const ALPHABET = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const decodeDezByBase = (base, num) => {
    if (num <= 0 || isNaN(num)) return [];
    return [...decodeDezByBase(base, Math.floor(num / base)), ALPHABET[num % base]];
};

const isLegal = (base, num) => {
    if (!num || num.length <= 0) return false;
    return [...num].every(c => ALPHABET.indexOf(c) >= 0 && ALPHABET.indexOf(c) < base);
}

const convertToDez = (base, num) => {
    if(base == 10) return parseInt(num);
    if (num == "") return 0;
    return ALPHABET.indexOf(num[num.length - 1]) + base * convertToDez(base, num.substr(0, num.length - 1));
};

const convertToDezFract = (base, num) => {
    if(base == 10) return parseInt(num);
    if (num == "") return 0;
    return ALPHABET.indexOf(num[num.length - 1]) + convertToDezFract(base, num.substr(0, num.length - 1)) / base;
};

export default {
    decodeDezByBase,
    isLegal,
    convertToDez,
    convertToDezFract,
}
