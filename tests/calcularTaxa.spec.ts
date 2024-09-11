import {test, expect} from '@playwright/test'

test('calcular taxa 1', async({page}) =>{
    //acessa a pagina
    await page.goto('http://localhost:5173')

    //preenche os campos
    await page.fill('#\\:r1\\:', '150')
    await page.fill('#\\:r3\\:', '10')
    await page.fill('#\\:r5\\:', '120')

    //pressiona botão calcular
    await expect(page.getByRole('button', {name: 'CALCULAR'})).toBeVisible()
    await page.getByRole('button', {name: 'CALCULAR'}).click()

    //resultado
    const resultado = await page.locator('text=Rendimento de CDI, IPCA e Selic ao Longo do Tempo');
    await expect(resultado).toBeVisible();

    //pausa para verificar
    // await page.pause()

})

test('calcular taxa 2', async({page}) =>{
    //acessa a pagina
    await page.goto('http://localhost:5173')

    //preenche os campos
    await page.fill('#\\:r1\\:', '100')
    // await page.waitForTimeout(3000)
    await page.fill('#\\:r3\\:', '36')
    // await page.waitForTimeout(3000)
    await page.fill('#\\:r5\\:', '115')
    // await page.waitForTimeout(3000)

    //pressiona botão calcular
    await expect(page.getByRole('button', {name: 'CALCULAR'})).toBeVisible()
    await page.getByRole('button', {name: 'CALCULAR'}).click()

    //resultado
    const resultado = await page.locator('text=Rendimento de CDI, IPCA e Selic ao Longo do Tempo');
    await expect(resultado).toBeVisible();

    //pausa para verificar
    // await page.pause()

})