import { defineConfig } from '@playwright/test';

export default defineConfig({
    fullyParallel: false,
    use: {
        //exibição do navegador durante execução
        headless: false,
    },
    reporter: [['html', { outputFolder: 'test-results', open: 'never' }]],
});
