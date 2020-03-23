import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id + Math.random()} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
