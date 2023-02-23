import { createRoot } from 'react-dom/client';
import React from 'react';

const Title = () => {
  return (
    <img
      src='data:image/png;base64,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'
      alt='logoImg'
      height='100px'
    />
  );
};

const HeaderComponent = () => (
  <div className='header'>
    <Title />
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

const restrautList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '73011',
      name: 'KFC',
      uuid: '27ff4155-fe46-418e-9862-ab98953bf953',
      city: '22',
      area: 'Anand Vihar Colony',
      totalRatingsString: '5000 ratings',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['American', 'Snacks', 'Biryani'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: 'kfc-chukkuwala-chukkuwala',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        'KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001',
      locality: 'Clock Tower',
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.1 kms',
      hasSurge: false,
      sla: {
        restaurantId: '73011',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '542132',
      name: 'Domnik Pizza',
      uuid: 'f2ee37f5-9ab0-4903-9420-6cae020b0a38',
      city: '22',
      area: 'Majra    Bansal Home',
      totalRatingsString: '50 ratings',
      cloudinaryImageId: 'sboh9oor0cvp6ztsyhvj',
      cuisines: ['Pizzas', 'Italian', 'Fast Food', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: 'domnik-pizza-patel-nagar-patel-nagar-2',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand',
      locality: 'Patel Nagar',
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '542132',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '321517',
      name: 'FOOD PLANET RESTAURANT',
      uuid: '899d5dd4-200a-48b2-a321-391bb9486ec2',
      city: '22',
      area: 'Majra',
      totalRatingsString: '50 ratings',
      cloudinaryImageId: 'ykboewqeoxnne8fgrnui',
      cuisines: ['Indian', 'Chinese', 'Tandoor', 'Thalis', 'Fast Food'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: 'food-planet-restaurant-patel-nagar-patel-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171',
      locality: 'Patel Nagar',
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '321517',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '2.8',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '311806',
      name: 'Burger King',
      uuid: '162a4dc4-50de-452a-82cf-751e18ac9952',
      city: '22',
      area: 'Anand Vihar Colony',
      totalRatingsString: '5000 ratings',
      cloudinaryImageId: 'iqh7ew5ldfgvpd5dpz60',
      cuisines: ['Burgers', 'American'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: '39 MINS',
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: 'burger-king-chakrata-road-ballupur',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        '5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND',
      locality: 'CHAKRATA ROAD',
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '6.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '311806',
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.2',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '132460',
      name: 'Annapurna Andhra Mess',
      uuid: 'c6460418-904b-4371-9e04-0ce8b1b46cae',
      city: '22',
      area: 'Dehradun',
      totalRatingsString: '1000 ratings',
      cloudinaryImageId: 'zw4qx2szsy9kbszk9n3d',
      cuisines: ['South Indian', 'Biryani', 'North Indian'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'annapurna-andhra-mess-subhash-nagar-subhash-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address:
        'keshav enclave sewla khurd chandrabani road behind uttranchal PG college',
      locality: 'Patel Nagar',
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '132460',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '496677',
      name: 'Uncle Ji Restaurant',
      uuid: 'e652ab57-22c2-4226-b5ea-a5caa26ee0f8',
      city: '22',
      area: 'Patel Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'kx2ghnwagcnqjtmd5jbc',
      cuisines: ['North Indian', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: 'uncle-ji-restaurant-patel-nagar-patel-nagar',
        city: 'dehradun',
      },
      cityState: '22',
      address: '348 santosh tower, majra road gram majra dehradun 248001',
      locality: 'Patel Nagar',
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '496677',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='restaurant-list'>
      {restrautList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<AppLayout />);
