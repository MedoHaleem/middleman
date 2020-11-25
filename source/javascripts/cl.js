import { initCLayer, Sku, ShippingCategory } from '@commercelayer/js-sdk';
import { getIntegrationToken } from '@commercelayer/js-auth';
let token;
let initialized = false;
const endpoint = 'https://cantiere-creativo.commercelayer.io'
const config = {
    clientId: 'uSlqPoAGKE8HUNfd5HVqCVO3viFWNZFxRRZdH-CteWY',
    clientSecret: 'tnwTGdbgOozJ2tvjXr33R0kd19qmVjD2Ja59fpIsPRU',
    endpoint: endpoint
}
const getToken = async () => {
    token = await getIntegrationToken(config);
    console.log('My  token: ', token);
    console.log('Expiration date: ', token.expires);
    const { accessToken } = token;

    if (!initialized) {
        initCLayer({ accessToken, endpoint });
        initialized = true;
    }
}

export const getPrice = async (code) => {
    await getToken()
    const sku = await Sku.includes('prices').findBy({ code: code })
    const prices = sku.prices().toArray()
    console.log(prices)
    return prices[0].amountFloat
}


