import React from 'react';

const ItemList = ({translatedLanguageData, items, className}) => {
    const pricelistData = translatedLanguageData?.price_list;
    
    return(
        <table className={`price-list-table ${className}`}>
            <thead>
                <tr>
                    <th><div className='hidden mt-4 item-list-header-cell item-header-article-number lg:block'>{pricelistData?.article_number}</div></th>
                    <th><div className='mt-4 lg:ml-4 item-list-header-cell item-header-product'>{pricelistData?.product_or_service}</div></th>
                    <th><div className='hidden mt-4 ml-4 item-list-header-cell item-header-in-price lg:block'>{pricelistData?.in_price}</div></th>
                    <th><div className='mt-4 ml-4 item-list-header-cell item-header-price'>{pricelistData?.price}</div></th>
                    <th><div className='hidden mt-4 ml-4 item-list-header-cell item-header-unit md:block'>{pricelistData?.unit}</div></th>
                    <th><div className='hidden mt-4 ml-4 item-list-header-cell item-header-stock md:block'>{pricelistData?.in_stock}</div></th>
                    <th><div className='hidden mt-4 ml-4 item-list-header-cell item-header-description md:block'>{pricelistData?.description}</div></th>
                    <th><div className='mt-4 ml-4 item-list-header-cell item-header-actions '></div></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => ( <tr key={index}>
                    <td><div className='hidden mt-4 item-list-item-cell item-list-article-number lg:block'>{item.article_number}</div></td>
                    <td><div className='mt-4 lg:ml-4 item-list-item-cell item-list-product'>{item.product_or_service}</div></td>
                    <td><div className='hidden mt-4 ml-4 item-list-item-cell item-list-in-price lg:block'>{item.in_price}</div></td>
                    <td><div className='mt-4 ml-4 item-list-item-cell item-list-price'>{item.price}</div></td>
                    <td><div className='hidden mt-4 ml-4 item-list-item-cell item-list-unit md:block'>{item.unit}</div></td>
                    <td><div className='hidden mt-4 ml-4 item-list-item-cell item-list-stock md:block'>{item.in_stock}</div></td>
                    <td><div className='hidden mt-4 ml-4 item-list-item-cell item-list-description md:block'>{item.description}</div></td>
                    <td><div className='mt-4 ml-4' ><img className='mt-4'  src={"./assets/images/pricelist/options-icon.png"} /></div></td>
                </tr>))}
            </tbody>

        </table>
    );
};

export default ItemList;
