import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) =>(
    <div className="shop-page">
    {collections.map(({id, ...otherItemsCollection}) => (
        <CollectionPreview key={id} {...otherItemsCollection}/>
    ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
collections: selectCollectionForPreview

});

export default connect(mapStateToProps)(CollectionOverview);