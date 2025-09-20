import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Contact from '../Components/Contact/Contact';

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="İletişim"></BreadCumb>
            <Contact></Contact>
        </div>
    );
};

export default page;