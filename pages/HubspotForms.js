import React from 'react';
import HubspotForm from 'react-hubspot-form'

const HubspotForms = () => {
    return (
        <div className=' container flex flex-col items-center'>
            <div className="w-full text-center text-lg text-gray-800">
            <p>Get on our list and we will keep you updated with our progress.</p></div>
            <div className="w-full"><HubspotForm
                portalId="8636647"
                formId="cd57fd77-e5fe-4f3a-86e4-eae18dfd70cd"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
                cssClass=" w-1/2"
            /></div>
        </div>
    )
}
export default HubspotForms;

