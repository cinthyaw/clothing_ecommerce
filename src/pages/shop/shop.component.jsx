import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import ErrorBoundary from "../../components/ErrorBoundary.component";


class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            collections : SHOP_DATA
        }
    }


    render() {

      const { collections } = this.state; 
      return (
        <div className="shop-page">
          { collections.map(({id, ...otherCollectionProps}) => (
            <ErrorBoundary>
               <CollectionPreview key={id} {...otherCollectionProps}/>
            </ErrorBoundary>
            ))
          }
        </div>
      );
    }
}

export default ShopPage;