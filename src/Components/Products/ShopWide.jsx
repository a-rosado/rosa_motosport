import React, { useState, useEffect, useRef, memo } from 'react';
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import Filter from "../Portfolio/Filter";

const ShopWide = ({ data, grid, className, filter, title }) => {
    const shopWrapper = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        // Import the initializeIsotop function and apply it to the grid
        import("../../Functions/Utilities").then(module => {
            const gridInstance = module.initializeIsotop(shopWrapper.current);
            gridInstance.on('arrangeComplete', () => setLoading(false));
        });
    }, []);

    const groupedByCategory = data.reduce((acc, item) => {
        
        // Group data by the 'category' property
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});
    // console.log(groupedByCategory);
    return (
        <>
          <div className="grid-wrapper">
            {filter && (
              <Filter title={title} filterData={filter.filterData} onFilterChange={filter.onFilterChange} />
            )}
            {Object.entries(groupedByCategory).map(([category, items]) => (
              <div key={category} className={className}>
                {/* Category Title Here - if needed */}
                <ul ref={shopWrapper} className={`grid-container ${grid ? grid : ''} ${loading ? ' loading' : ''}`}>
                  
                  {items.map((item, index) => (
                    <li key={index} className={`grid-item`}>
                      <m.div
                        initial={{ opacity: 0 }}
                        whileInView={!loading && { opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, ease: "easeOut" }}
                        className="product-box relative overflow-hidden w-full mb-[45px] xs:mb-0"
                      >
                     <div className="relative overflow-hidden rounded-md">
                        <Link aria-label="link" to={`/shop/single-product/${item.id}`}>
                            {item.img && (
                                <img className="default-image w-full" src={item.img} alt={item.title} />
                         )}
                         </Link>
                        </div>
                            <div className="product-footer text-center pt-[25px] xs:pt-[10px]">
                             <Link aria-label="link" to={`/shop/single-product/${item.id}`} className="text-darkgray hover:text-black font-medium inline-block">
                                 {item.title}
                                    </Link>
                                        </div>
                      </m.div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      );
    };

export default memo(ShopWide);

ShopWide.propTypes = {
    grid: PropTypes.string,
    className: PropTypes.string,
    filter: PropTypes.bool,
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};







