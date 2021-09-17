import React, { useState } from 'react';
import AddressBar from '../components/common/AddressBar';
import InputFieldSet from '../components/common/inputs/InputFieldSet';
import OrderCard from '../components/product/OrderCard';
import applePay from '../assets/icons/apple-pay.png';
import googlePay from '../assets/icons/google-pay.png';
import paypal from '../assets/icons/paypal.png';
import ButtonDark from '../components/common/buttons/ButtonDark';
import DropdownInputField from '../components/common/dropdowns/DropdownInputField';
import PhoneCustomInput from '../components/common/dropdowns/PhoneCustomInput';
import Textarea from '../components/common/inputs/Textarea';
import PopUp from '../components/common/PopUp';

const paperSelectOptions = {
    title: 'Country / Region*',
    id: 'Paper',
    selected: {
        label: '',
        id: '0',
    },
    options: [
        {
            label: '1” (standard for all prints) **',
            id: '1” (standard for all prints) **',
        },
        {
            label: '2” (additional cost)',
            id: '2” (additional cost)',
        },
        {
            label: '3” (additional cost)',
            id: '3” (additional cost)',
        },
        {
            label: '4” (additional cost)',
            id: '4” (additional cost)',
        },
    ],
};

const streetAdressFields = {
    title: 'Street address*',
    fields: [
        {
            placeholder: 'House number and street name',
            id: '1',
        },
        {
            placeholder: 'Appartment, suite, unit, etc. (optional)',
            id: '2',
        },
    ],
};

const oneField = {
    title: 'Street address*',
    fields: [
        {
            placeholder: 'House number and street name',
            id: '1',
        },
    ],
};


const ShippingPaymentPage = () => {
    return (
        <div className="shipping-payment">
            {/* <PopUp /> */}
            <AddressBar address={'Home / Cart / Information / Shipping / Payment'} />
            <section className="shipping-payment__container">
                <div className="shipping-payment__left-column">
                    <h3 className="shipping-payment__title">
                        Contact information
                    </h3>
                    <div className="shipping-payment__input-list">
                        <InputFieldSet fieldSet={oneField} />
                        <InputFieldSet fieldSet={oneField} />
                        <InputFieldSet fieldSet={oneField} />
                        <PhoneCustomInput selectOptions={paperSelectOptions} />
                    </div>

                    <h3 className="shipping-payment__title">
                        Shipping address
                    </h3>
                    <div className="shipping-payment__input-list">
                        <DropdownInputField selectOptions={paperSelectOptions} />
                        <DropdownInputField selectOptions={paperSelectOptions} />
                        <DropdownInputField selectOptions={paperSelectOptions} />
                        <InputFieldSet fieldSet={oneField} />
                        <InputFieldSet fieldSet={streetAdressFields} />
                    </div>
                    <Textarea />
                </div>
                <div className="shipping-payment__right-column">
                    <h3 className="shipping-payment__title">
                        Your order
                    </h3>

                    <div className="shipping-payment__order-cards">
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                    </div>

                    <div className="shipping-payment__order-info">

                        <div className="shipping-payment__estimate">
                            <div className="shipping-payment__estimate-item">
                                <div>
                                    Subtotal
                                </div>
                                <div>
                                    $ 300.00
                                </div>
                            </div>
                            <div className="shipping-payment__estimate-item">
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    $ 10.00
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="shipping-payment__order-info">

                        <div className="shipping-payment__total">
                            <div>
                                Total
                            </div>
                            <div>
                                $ 310.00
                            </div>
                        </div>

                    </div>

                    <div className="shipping-payment__order-info">

                        <div className="shipping-payment__payment-methods-container">
                            <div className="shipping-payment__payment-method-btn">
                                <img src={applePay} alt="apple-pay" />
                            </div>
                            <div className="shipping-payment__payment-method-btn">
                                <img src={googlePay} alt="google-pay" />
                            </div>
                            <div className="shipping-payment__payment-method-btn">
                                <img src={paypal} alt="paypal" />
                            </div>

                        </div>

                    </div>

                    <div className="shipping-payment__action-btn-container">
                        <ButtonDark label="Place order" />
                    </div>

                </div>
            </section>
        </div>
    )
};

export default ShippingPaymentPage;