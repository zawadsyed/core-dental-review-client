import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(result => result.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <section style={{ maxWidth: '1320px' }} className='mt-24 mx-auto'>
                <h1 style={{ color: '#0F3E3E' }} className='text-5xl font-semibold'>Dr. Fill's Services</h1>

                <div >
                    {
                        loading ?
                            <div className='mt-16'>
                                <ClipLoader color="#36d7b7" />
                            </div>
                            :
                            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>{
                                services.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                            }</div>
                    }

                </div>
            </section>
        </div>
    );
};

export default Services;