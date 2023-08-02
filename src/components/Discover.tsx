


import * as React from 'react';
import Typography from '@mui/material/Typography';



function DiscoverCard(props: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className='rounded border border-black h-full'>
      <div className='max-w-full'>
        <img src={props.image} className="object-cover w-full h-44 lg:h-64" />
      </div>
      <div className="mt-2.5 px-2.5">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props.title}
        </Typography>
      </div>
      <div className="my-2.5 px-2.5">

        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props.description}
        </Typography>
      </div>
    </div>

  );
}

const discoverItems = [
  {
    image: "https://www.holidify.com/images/cmsuploads/compressed/783_20190430172256.jpg",
    title: 'Borra Caves',
    description: `The Borra Caves, located in Andhra Pradesh, India, are natural wonders known for their stunning stalactites and stalagmites formations. These ancient limestone caves are a popular tourist attraction and offer a mesmerizing experience of nature's artistic beauty.`,
  },
  {
    image: "https://www.holidify.com/images/bgImages/INDIA.jpg",
    title: 'Taj Mahal',
    description:
      `The Taj Mahal, an iconic marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. A symbol of eternal love and a UNESCO World Heritage site.`
  },
  {
    image: 'https://www.holidify.com/images/cmsuploads/compressed/INS_Kursura_(S20)_20180317150517.jpg',
    title: 'Submarine Museum',
    description: `The Submarine Museum in Visakhapatnam (Vizag), India, is a unique maritime attraction where visitors can explore a decommissioned Indian Navy submarine, INS Kursura. It offers a fascinating insight into the life of submariners and their equipment, making it an intriguing destination for history and military enthusiasts.`,
  },
  {
    image: "https://www.holidify.com/images/cmsuploads/compressed/YARADA_BEACH_VIEW_20180305141516.jpg",
    title: 'Yarada Beach',
    description: `Yarada Beach, located near Visakhapatnam (Vizag) in Andhra Pradesh, India, is a serene and picturesque coastline known for its golden sands and clear blue waters. The beach is surrounded by lush green hills, offering a breathtaking view and a perfect escape for relaxation and rejuvenation. Its tranquil ambiance and gentle waves make it a popular destination for tourists seeking a peaceful seaside retreat.`,
  },

  {
    image: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
    title: 'Ladakh',
    description: `
        Discover Ladakh, India's "Land of High Passes." Be mesmerized by rugged mountains, serene lakes, and ancient monasteries. An adventure for the soul!`,
  },


  {
    image: "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
    title: 'Sri Nagar',
    description: `Srinagar, the summer capital of Jammu and Kashmir, India, enchants with its idyllic Dal Lake, Mughal gardens, and charming houseboats. A paradise for nature lovers and a blend of rich cultures.`,
  },
  {
    image: "https://www.holidify.com/images/bgImages/MANALI.jpg",
    title: 'Manali',
    description: `Manali, a picturesque hill station in Himachal Pradesh, India, is nestled in the Himalayas. It captivates with snow-capped peaks, lush valleys, adventurous activities like trekking and skiing, and a vibrant local culture. A dream destination for nature enthusiasts and thrill-seekers.`,
  },
  {
    image: "https://www.holidify.com/images/bgImages/COORG.jpg",
    title: 'Coorg',
    description: `Coorg, also known as Kodagu, is a stunning hill station in Karnataka, India. Its lush greenery, coffee plantations, misty landscapes, and cascading waterfalls make it a paradise for nature lovers. With a unique culture and warm hospitality, Coorg offers an enchanting retreat for those seeking tranquility and natural beauty.`,
  }, {
    image: "https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
    title: 'Andaman',
    description: `Andaman Islands, a tropical paradise in India, boasts pristine beaches, turquoise waters, and diverse marine life. Perfect for water sports, island hopping, and relaxing getaways. A haven of natural beauty and adventure in the Bay of Bengal.`,
  }, {
    image: "https://www.holidify.com/images/bgImages/UDAIPUR.jpg",
    title: 'Udaipur',
    description: `Udaipur, India's "City of Lakes," is a romantic and regal destination in Rajasthan. Adorned with palaces, havelis, and serene lakes, it offers a captivating blend of history, culture, and scenic beauty. A majestic oasis in the heart of the desert state.`,
  }
];


const Discover: React.FC = () => {
  return <div className='max-w-7xl w-full mx-auto p-5'>
    <div className='my-5'>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '1',
          WebkitBoxOrient: 'vertical',
        }}
      >
        Discover places
      </Typography>
    </div>
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5'>{discoverItems.map((item, index) => <li key={`${item.title}${index}`}>
      <DiscoverCard {...item} />
    </li>)}</ul>
  </div>
}

export default Discover