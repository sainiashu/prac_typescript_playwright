import {test} from '@playwright/test'
import {flattenArray} from '../src/flattenArray'

test('Flatten Array', async () => {
    expect(flattenArray([1,[2,[3,4]],5])).toEqual([1,2,3,4,5]);
});