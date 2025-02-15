import ProductItem from "../components/ProductItem";
import useBrands from "../hooks/useBrand";
import useProductList from "../hooks/useProductList";
import useProductTypes from "../hooks/useProductType";



const StorePage = () => {
    const { products} = useProductList();
    const { productTypes } = useProductTypes();
    const { brands } = useBrands();

    return (
        <div className="container" style={{ marginTop: '140px' }}>
        <div className="row">
          <section className="col-3">
            <h5 className="text-warning">Sort</h5>
            <select className="custom-select mb-3">
              <option>Alphabetical</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

            <h5 className="text-warning ml-3">Brands</h5>
            <ul className="list-group my-3">
              {
                brands.map((brand) => (
                  <li className="list-group-item" key={brand.id}>
                    {brand.name}
                  </li>
                ))
              }
            </ul>

            <h5 className="text-warning ml-3">Types</h5>
            <ul className="list-group my-3">
            {
                productTypes.map((type) => (
                  <li className="list-group-item" key={type.id}>
                    {type.name}
                  </li>
                ))
              }
            </ul>
          </section>

          <section className="col-9">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <header>
                <span>Showing <strong>10</strong> of <strong>16</strong> Results</span>
              </header>
              <div className="form-inline mt-2">
                <input
                  className="form-control mr-2"
                  style={{ width: '300px' }}
                  placeholder="Search"
                />
                <button className="btn btn-outline-primary my-2">Search</button>
                <button className="btn btn-outline-success my-2 ml-2">Reset</button>
              </div>
            </div>

            <div className="row">
            {products.map((produc) => (
              <div className="col-md-4" key={produc.id}>
                <ProductItem product={produc} />
              </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    );
}

export default StorePage;

