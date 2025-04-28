// const Arrived = () => (
// <>
// <section id="latest-products" class="products-carousel">
//       <div class="container-lg overflow-hidden pb-5">
//         <div class="row">
//           <div class="col-md-12">

//             <div class="section-header d-flex justify-content-between my-4">
              
//               <h2 class="section-title">Just arrived</h2>

//               <div class="d-flex align-items-center">
//                 <a href="#" class="btn btn-primary me-2">View All</a>
//                 <div class="swiper-buttons">
//                   <button class="swiper-prev products-carousel-prev btn btn-primary">❮</button>
//                   <button class="swiper-next products-carousel-next btn btn-primary">❯</button>
//                 </div>  
//               </div>
//             </div>
            
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-md-12">

//             <div class="swiper">
//               <div class="swiper-wrapper">
                
//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-20.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-1.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Whole Wheat Sandwich Bread</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-21.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-22.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Gourmet Dark Chocolate</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-23.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-10.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Greek Style Plain Yogurt</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-11.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Pure Squeezed No Pulp Orange Juice</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-12.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Fresh Oranges</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="product-item swiper-slide">
//                   <figure>
//                     <a href="index.html" title="Product Title">
//                       <img src="images/product-thumb-13.png" alt="Product Thumbnail" class="tab-image"/>
//                     </a>
//                   </figure>
//                   <div class="d-flex flex-column text-center">
//                     <h3 class="fs-6 fw-normal">Gourmet Dark Chocolate Bars</h3>
//                     <div>
//                       <span class="rating">
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>
//                         <svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>
//                       </span>
//                       <span>(222)</span>
//                     </div>
//                     <div class="d-flex justify-content-center align-items-center gap-2">
//                       <del>$24.00</del>
//                       <span class="text-dark fw-semibold">$18.00</span>
//                       <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
//                     </div>
//                     <div class="button-area p-3 pt-0">
//                       <div class="row g-1 mt-2">
//                         <div class="col-3"><input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/></div>
//                         <div class="col-7"><a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
//                         <div class="col-2"><a href="#" class="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                  
//               </div>
//             </div>
            

//           </div>
//         </div>
//       </div>
//     </section>
// </>
// );
// export default Arrived;
import { useEffect, useState } from 'react';
import axios from 'axios';

const Arrived = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/product?sort=created_at&order=desc&limit=10')
      .then((res) => {
        console.log('Products fetched:', res.data); // Debug log
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please log in to add items to your cart');
        return;
      }
      const res = await axios.post(
        '/api/cart/add',
        {
          product_id: productId,
          quantity: 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('Add to cart response:', res.data); // Debug log
      alert('Added to cart!');
    } catch (err) {
      console.error('Add to cart error:', err);
      alert('Failed to add to cart: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <section id="latest-products" className="products-carousel">
      <div className="container-lg overflow-hidden pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between my-4">
              <h2 className="section-title">Just Arrived</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">View All</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="swiper">
              <div className="swiper-wrapper">
                {products.map((product) => (
                  <div className="product-item swiper-slide" key={product._id}>
                    <figure>
                      <a href={`/product/${product._id}`} title={product.name}>
                        <img
                          src={product.images[0] || 'images/product-thumb-20.png'}
                          alt={product.name}
                          className="tab-image"
                        />
                      </a>
                    </figure>
                    <div className="d-flex flex-column text-center">
                      <h3 className="fs-6 fw-normal">{product.name}</h3>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <span className="text-dark fw-semibold">${product.price}</span>
                      </div>
                      <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                          <div className="col-3">
                            <input
                              type="number"
                              className="form-control border-dark-subtle input-number quantity"
                              defaultValue="1"
                            />
                          </div>
                          <div className="col-7">
                            <button
                              onClick={() => addToCart(product._id)}
                              className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"
                            >
                              Add to Cart
                            </button>
                          </div>
                          <div className="col-2">
                            <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                              <svg width="18" height="18">
                                <use xlinkHref="#heart" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrived;