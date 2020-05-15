// here I add one nore file to make easier for reader.

// import other
import {handleSubmit} from "./formHandler";
import "babel-polyfill"

describe('handle Submit for checking this fun if appear (null or not)', () => {
    test('shoul be', async () => {
        expect(handleSubmit).not.toBe(null);
    });
});


describe('handle Submit for checking this fun if appear (null or not)', () => {
    test('shoul be', async () => {
        expect(typeof handleSubmit).not.toBe(null);
    });
});

