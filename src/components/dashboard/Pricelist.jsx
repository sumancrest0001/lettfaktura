import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import './../../styles/dashboard/dashboard.css';
import ItemList from './ItemList';
import ProductForm from './ProductForm';


const seederData = () => {
    const products = [];
    for (let i = 0; i < 30; i++) {
        products.push({
            article_number: "123",
            product_or_service: "Test product The link tag is a self-closing tag you should put at the head section of your HTML.",
            in_price: "43",
            price: "45",
            unit: "300",
            in_stock: "1000",
            description: "description addded  The link tag is a self-closing tag you should put at the head section of your HTML. for the testing The link tag is a self-closing tag you should put at the head section of your HTML. propose"
        });
    }
    return products;
}
const PriceList = () => {
    const languages = useSelector(state => state.languages);
    const [productList, setProductList] = useState(seederData());
    const selectedLanguage = languages.selectedLanguage;
    const translatedData = languages.languages[selectedLanguage];
    const [showProductModal, setShowProductModal] = useState(false);
    
    const showProductForm = () => {
        setShowProductModal(true);
    }
    const onSave = (data) => {
        setProductList(prev => [data, ...prev]);
        setShowProductModal(false);
    };

    const handleCancelButtonClick = () => {
        setShowProductModal(false);
    }


    return(
        <div className="price-list-main xl:w-[78%] w-[100%]">
            <div className="md:items-baseline md:justify-between md:flex price-list-top">
                <div>
                    <form
                        className="flex search-box md:w-[20rem] mb-2"
                        >
                        <input
                            className="text-black search-input grow"
                            type="text"
                            name="article"
                            id="article"
                            placeholder={translatedData?.price_list?.search_article_number}
                        />
                        <img src={'./assets/images/search.png'} className='cursor-pointer' />
                    </form>
                    <form
                        className="flex search-box md:w-[20rem]"
                        >
                        <input
                            className="text-black search-input grow"
                            type="text"
                            name="article"
                            id="article"
                            placeholder={translatedData?.price_list?.search_article_number}
                        />
                        <img src={'./assets/images/search.png'} className='cursor-pointer' />
                    </form>
                </div>
                <div className="flex items-center justify-between mt-5 price-list-actions md:mt-0 md:justify-end">
                    <div className='md:ml-4 rounded-full cursor-pointer py-[5px] price-list-action xl:ml-6 px-9 xl:px-3' onClick={() => {showProductForm()}}>
                        <span className='hidden mr-2 price-list-action-text xl:block'>{translatedData?.price_list?.new_product}</span>
                        <img src={`./assets/images/add-product.png`} className='price-list-action-image'/>
                    </div>
                    <div className='md:ml-4 rounded-full cursor-pointer py-[5px] price-list-action xl:ml-6 px-9 xl:px-3'>
                        <span className='hidden mr-2 price-list-action-text xl:block'>{translatedData?.price_list?.print_list }</span>
                        <img src={`./assets/images/product-list.png`} className='price-list-action-image'/>
                    </div>
                    <div className='md:ml-4 rounded-full cursor-pointer py-[5px] price-list-action xl:ml-6 px-9 xl:px-3'>
                        <span className='hidden mr-2 price-list-action-text xl:block'>{translatedData?.price_list?.advanced_mode }</span>
                        <img src={`./assets/images/advance-mode.png`} className='price-list-action-image'/>
                    </div>
                    
                </div>
            </div>
            <ItemList translatedLanguageData={translatedData} items={productList} className="mt-10"/>
            {showProductForm 
            ? (<ProductForm 
                pricelistData={translatedData?.price_list}
                onSave={onSave}
                onCancel={handleCancelButtonClick}
                show={showProductModal}
                />)
            : null}
        </div>
    )
};

export default PriceList;