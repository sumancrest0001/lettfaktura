import React, {useState} from "react";
import InputLabel from "../../atoms/InputLabel";
import Modal from '../../atoms/Modal';
import './../../styles/dashboard/product-form.css';

const ProductForm = ({pricelistData, onSave, onCancel, show}) => {
    const [formData, setFormData] = useState({
        article_number: '',
        product_or_service: '',
        in_price: '',
        price: '',
        unit: '',
        in_stock: '',
        description: '',
    })

    const handleFormInputChange = (e, field) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({
        article_number: '',
        product_or_service: '',
        in_price: '',
        price: '',
        unit: '',
        in_stock: '',
        description: '',
    });
    }

    const handleCancel = () => {
        onCancel();
        setFormData({
        article_number: '',
        product_or_service: '',
        in_price: '',
        price: '',
        unit: '',
        in_stock: '',
        description: '',
    });
    }
    const handleCancelButtonClick = (e) => {
        e.preventDefault();
        onCancel();
        setFormData({
        article_number: '',
        product_or_service: '',
        in_price: '',
        price: '',
        unit: '',
        in_stock: '',
        description: '',
    });
    }
return(
    <Modal show={show} onCancel={handleCancel} heading={'New Product'}>
        <div className="lg:pl-12 lg:pr-12">
            <form>
            <div className="mb-5">
                <InputLabel>{pricelistData?.article_number}</InputLabel>
                <input name="article_number" className="input-field" type="number" value={formData.article_number} onChange={(e) => handleFormInputChange(e, 'article_number')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.product_or_service}</InputLabel>
                <input name="product_or_service" className="input-field" type="text" value={formData.product_or_service} onChange={(e) => handleFormInputChange(e, 'product_or_service')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.in_price}</InputLabel>
                <input name="in_price" type="number" className="input-field" value={formData.in_price} onChange={(e) => handleFormInputChange(e, 'in_price')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.price}</InputLabel>
                <input name="price" type="number" className="input-field" value={formData.price} onChange={(e) => handleFormInputChange(e, 'price')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.unit}</InputLabel>
                <input name="unit" type="number" className="input-field" value={formData.unit} onChange={(e) => handleFormInputChange(e, 'unit')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.in_stock}</InputLabel>
                <input name="in_stock" type="number" className="input-field" value={formData.in_stock} onChange={(e) => handleFormInputChange(e, 'in_stock')}  />
            </div>
            <div className="mb-5">
                <InputLabel>{pricelistData?.description}</InputLabel>
                <input name="description" type="text" className="input-field" value={formData.description} onChange={(e) => handleFormInputChange(e, 'description')}  />
            </div>
            <div className="mb-4 text-center"><button type="submit" className="rounded-full save-button" onClick={handleSubmit}>{pricelistData?.save}</button></div>
            <div className="text-center"><button type="submit" className="rounded-full cancel-button" onClick={(e) => handleCancelButtonClick(e)}>{pricelistData?.cancel}</button></div>
            </form>
        </div>
    </Modal>
)
};

export default ProductForm;