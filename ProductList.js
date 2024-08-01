import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, imageUrl:'http://www.renewable-energy-directory.co.uk/photovoltaic-shadowed.jpg' , title: 'SOLAR HEATING PANNEL', description: 'Working alongside a conventional heating system solar panels reduce domestic and commercial hot water running costs for heating rooms, the hot water supply or, with larger systems, even swimming pools.',sellerInfo: { name: 'Sgr INDIA Engineering Company', email: 'sgreindia@gmail.com', phone: '07041937213' } },
    { id: 2, imageUrl: 'http://www.renewable-energy-directory.co.uk/wind-turbine-shadowed.jpg', title: 'WIND TURBINE', description: 'The amount of electricity that a wind turbine will produce is dependant on a number of factors, particularly windspeed and direction and the flow of the wind being uninterrupted by trees and buildings etc' ,sellerInfo: { name: 'Nipun Enterprises', email: 'nipunenter234@gmail.com', phone: '07490916419' } },
    { id: 3, imageUrl: 'http://www.renewable-energy-directory.co.uk/ground/ground-drop-shadowed.jpg', title: 'PHOTOVOLTAIC SYSTEM', description: 'The installers and manufacturers in our directory are specialists in domestic and light commercial photovoltaic electricity systems and will be able to help reduce your carbon footprint and lower your energy costs.' ,sellerInfo: { name: 'sagarhind industries', email: 'sbmhind@egmail.com', phone: '07890674535' }},
    { id: 4, imageUrl: 'http://www.renewable-energy-directory.co.uk/hydro/hydro-drop-shadowed.jpg', title: 'HYDRO PUMP', description: 'We are in the process of developing our directory of small scale hydro turbine specialists which will be launched soon. We are already able to put you in touch with the specialists who will be listed on the site however.' ,sellerInfo: { name: 'John indus', email: 'john@gmail.com', phone: '123-456-7890' }},
    { id: 5, imageUrl: 'http://www.renewable-energy-directory.co.uk/boiler/boiler-drop-shadowed.jpg', title: 'WOOD PALLET', description: 'The companies in our directory are installers, repair and maintenance specialists for wood pellet, wood chip and biomass boilers from manufacturers including Tatano, Saey, Extraflame, Veissman, Hoval and Talbotts Heating.  ' ,sellerInfo: { name: 'carter industries', email: 'cartindus@gmail.com', phone: '0986743226' }},
  ];

  return (
    <div className="container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          sellerInfo={product.sellerInfo}
        />
      ))}
    </div>
  );
};

export default ProductList;