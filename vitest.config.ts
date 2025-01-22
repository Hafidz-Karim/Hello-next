import {defineConfig} from 'vitest/config';

import path from 'path';

export default defineConfig({
    test:
    {
        globals: true,
        coverage: {
            reporter: ['text', 'html'],
            exclude: [
                'node-modules/',
                'test/**',
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
})