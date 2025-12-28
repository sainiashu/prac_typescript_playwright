import { test, expect } from '@playwright/test';
import { reverse } from '../src/reverse';

test('Test Reverse word', async () => {  // note: async arrow function
    const input = "test reverse";
    console.log(reverse);
    const result = reverse(input);
    expect(result).toBe("reverse test");
});