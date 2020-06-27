import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return (
            <div className="shop-page">
                <h1> Collections </h1>
                {this.state.collections.map(({id,...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}
 
export default ShopPage;