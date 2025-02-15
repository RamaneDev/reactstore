import React from 'react';
import { IProduct } from '../models/Product';

interface ProductItemProps {
    product: IProduct;
}

const ProductItem : React.FC<ProductItemProps> =  ({product}) => {

    return (
        <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          alt="Thumbnail [100%x225]"
          style={{ height: '225px', width: '100%', display: 'block' }}
          src={product.pictureUrl}
        />
        <div className="card-body">
          <a href="#">
            <p className="card-text">{product?.name}</p>
          </a>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    );
}

export default ProductItem;
