import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item // all of these save us from writing props.id etc
    return ( 
    <CollectionItemContainer>
        <BackgroundImage
        className='image'
        imageUrl={imageUrl}
        />
        <CollectionFooterContainer>
            <NameContainer> {name} </NameContainer>
            <PriceContainer> { price } </PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted> Add to Cart </AddButton>
    </CollectionItemContainer>
)}

const mapDispatchtoProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchtoProps)(CollectionItem);