import { initCLayer, Sku, ShippingCategory } from '@commercelayer/js-sdk';
import { getIntegrationToken } from '@commercelayer/js-auth';
let token;
let initialized = false;
export const getPrice = async () => {
    const endpoint = 'https://cantiere-creativo.commercelayer.io'
    const config = {
        clientId: 'uSlqPoAGKE8HUNfd5HVqCVO3viFWNZFxRRZdH-CteWY',
        clientSecret: 'tnwTGdbgOozJ2tvjXr33R0kd19qmVjD2Ja59fpIsPRU',
        endpoint: endpoint
    }
    token = await getIntegrationToken(config);
    console.log('My  token: ', token);
    console.log('Expiration date: ', token.expires);
    const { accessToken } = token;

    if (!initialized) {
        initCLayer({ accessToken, endpoint });
        initialized = true;
    }
    console.log('=======================================================')
    const sku = await Sku.includes('prices').findBy({ code: 'BABYONBU000000E63E7412MX' })
    const prices = sku.prices().toArray()
    console.log(prices)
    return prices[0].amountFloat
}


