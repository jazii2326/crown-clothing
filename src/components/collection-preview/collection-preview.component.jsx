import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
            <div className="preview">
            {
                items.filter(
                    (item,idx) => idx < 4
                ).map(({id, ...otherCollectionitems}) => (
                    <CollectionItem key={id} {...otherCollectionitems}/>
                ))
            }
            </div>
    </div>

);

export default CollectionPreview;