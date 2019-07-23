import React from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

// we want match to display the path, which in this case is shop
class ShopPage extends React.Component{  
    render(){
        const { match } = this.props;
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}
}


export default ShopPage;