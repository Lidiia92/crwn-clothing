import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../components/preview-collection/preview-collection";
import { selectCollections } from "../../redux/shop/shop-selectors";

const ShopPage = ({ collections }) => {
  console.log(collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
