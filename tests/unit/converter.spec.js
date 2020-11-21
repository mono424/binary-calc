import converter from '../../src/services/converter.js'

test('decodeDezByBase should convert dez to binary', () => {
    expect(converter.decodeDezByBase(2, 0)).toEqual([]);
    expect(converter.decodeDezByBase(2, 1)).toEqual(['1']);
    expect(converter.decodeDezByBase(2, 5)).toEqual(['1', '0', '1']);
    expect(converter.decodeDezByBase(2, 10)).toEqual(['1', '0', '1', '0']);
    expect(converter.decodeDezByBase(2, 15)).toEqual(['1', '1', '1', '1']);
});

test('decodeDezFractToBinary should convert dez fractional to binary', () => {
    expect(converter.decodeDezFractToBinary(0)).toEqual([]);
    expect(converter.decodeDezFractToBinary(0.5)).toEqual(['1']);
    expect(converter.decodeDezFractToBinary(0.25)).toEqual(['0', '1']);
    expect(converter.decodeDezFractToBinary(0.125)).toEqual(['0', '0', '1']);
    expect(converter.decodeDezFractToBinary(0.625)).toEqual(['1', '0', '1']);
    expect(converter.decodeDezFractToBinary(0.875)).toEqual(['1', '1', '1']);
    expect(converter.decodeDezFractToBinary(0.0625)).toEqual(['0', '0', '0', '1',]);
});

test('convertToDez should convert binary to dez', () => {
    expect(converter.convertToDez(2, '')).toEqual(0);
    expect(converter.convertToDez(2, '1')).toEqual(1);
    expect(converter.convertToDez(2, '101')).toEqual(5);
    expect(converter.convertToDez(2, '1010')).toEqual(10);
    expect(converter.convertToDez(2, '1111')).toEqual(15);
    expect(converter.convertToDez(2, '10 10')).toEqual(10); 
    expect(converter.convertToDez(2, '11 11')).toEqual(15);
});

test('convertToDezFract should convert binary fract to dez', () => {
    expect(converter.convertToDezFract(2, '')).toEqual(0);
    expect(converter.convertToDezFract(2, '1')).toEqual(0.5);
    expect(converter.convertToDezFract(2, '01')).toEqual(0.25);
    expect(converter.convertToDezFract(2, '001')).toEqual(0.125);
    expect(converter.convertToDezFract(2, '101')).toEqual(0.625);
    expect(converter.convertToDezFract(2, '111')).toEqual(0.875);
    expect(converter.convertToDezFract(2, '0001')).toEqual(0.0625);
    expect(converter.convertToDezFract(2, '1 11')).toEqual(0.875);
    expect(converter.convertToDezFract(2, '00 01')).toEqual(0.0625);
});

test('convertToDezFract should convert dez fract to dez', () => {
    expect(converter.convertToDezFract(10, '')).toEqual(0);
    expect(converter.convertToDezFract(10, '5')).toEqual(0.5);
    expect(converter.convertToDezFract(10, '25')).toEqual(0.25);
    expect(converter.convertToDezFract(10, '125')).toEqual(0.125);
    expect(converter.convertToDezFract(10, '625')).toEqual(0.625);
    expect(converter.convertToDezFract(10, '875')).toEqual(0.875);
    expect(converter.convertToDezFract(10, '005')).toEqual(0.005);
    expect(converter.convertToDezFract(10, '8 75')).toEqual(0.875);
    expect(converter.convertToDezFract(10, '0 05')).toEqual(0.005);
});