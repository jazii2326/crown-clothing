import {createSelector} from 'reselect';

const SHOP_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.id === SHOP_ID_MAP[collectionUrlParam])
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key=> collections[key])
);