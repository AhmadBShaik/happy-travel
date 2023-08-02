import Typography from '@mui/material/Typography';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImageListItem } from '@mui/material';
import { AccessTime } from '@mui/icons-material';


function RecentPhotoCard(props: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <ul className='border border-black h-full mt-2.5 rounded'>
      <ImageListItem key={props.image}>
        <div>
          <img
            src={`${props.image}`}
            srcSet={`${props.image}`}
            alt={props.title}
            loading="lazy"
            className='object-cover w-full h-44 lg:h-64'
          />
          <div className="mt-2.5 px-2.5">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
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
            <div className='flex space-x-1 my-2.5 items-center'>
              <AccessTime style={{ fontSize: '1.2rem' }} />
              <div className='text-sm'>
                {Math.floor((Math.random() * 10) + 2)} days ago
              </div>
            </div>
          </div>

        </div>
      </ImageListItem>
    </ul>

  );
}
const photographyItems = [

  {
    title: "Bananthimari Betta",
    image: "https://www.holidify.com/images/cmsuploads/articles/377.jpg",
    description: `"Bananthimari Betta, nestled in Karnataka, India, is a captivating hill adorned with lush greenery and a mystical aura. The serene trek to its peak is a nature lover's delight, offering breathtaking views of the surrounding landscapes. Legend has it that the hill once sheltered a sage named Bananthimari, lending it its name. Popular among adventure enthusiasts, it promises an unforgettable experience amid nature's tranquility.`

  }, {

    title: "Nachikuppam",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Nachikuppam_20190522153701.jpg",
    description: `Nachikuppam, a picturesque village in Tamil Nadu, India, enchants with its rustic charm and vibrant culture. Surrounded by verdant fields and hills, it offers a serene escape from urban bustle. The village is known for its warm hospitality, traditional festivals, and handicrafts. Nature enthusiasts can explore nearby forests and waterfalls. Nachikuppam is a hidden gem, inviting travelers to experience the essence of rural India.`,

  }, {

    title: "Nandi Hills",
    image: "https://www.holidify.com/images/cmsuploads/compressed/NandiHills_20190522151933.jpg",
    description: `Nandi Hills, a captivating hill fortress near Bangalore, India, stands tall at an altitude of 1,478 meters. Its breathtaking sunrise and sunset vistas, enveloped by mist, are awe-inspiring. A popular weekend getaway, the hills offer trekking, paragliding, and ancient temples to explore. Nature's beauty and historical allure make Nandi Hills a cherished destination for tourists and locals alike.`,

  }
  , {
    title: "Sakleshpur",
    image: "https://www.holidify.com/images/cmsuploads/articles/386.jpg",
    description: `Sakleshpur, nestled in the Western Ghats of Karnataka, India, is a serene and verdant hill station. Surrounded by coffee and spice plantations, it offers a refreshing escape. The region's lush landscapes, gushing waterfalls, and pleasant climate make it a haven for nature lovers. Adventurers can indulge in trekking and camping, while history enthusiasts can explore ancient temples and forts. Sakleshpur's tranquil charm makes it an ideal destination for a peaceful getaway.`,

  }, {
    title: "Chikmagalur",
    image: "https://www.holidify.com/images/cmsuploads/articles/380.jpg",
    description: `Chikmagalur, a paradise in Karnataka, India, is renowned for its misty hills, sprawling coffee estates, and enchanting landscapes. Home to Mullayanagiri, the highest peak in Karnataka, it entices trekkers and nature enthusiasts. The region's soothing climate, picturesque waterfalls, and ancient temples add to its allure. With aromatic coffee and lush greenery in abundance, Chikmagalur promises a rejuvenating experience for travelers seeking serenity and natural beauty.`,

  }, {
    title: "Amedikallu",
    image: "https://www.holidify.com/images/cmsuploads/compressed/5038507067_e955649785_b_20190522145800.jpg",
    description: `Amedikallu, a hidden gem in the Western Ghats of Karnataka, India, captivates with its breathtaking beauty and challenging trek. The trek to Amedikallu peak offers panoramic vistas of lush forests, cascading waterfalls, and rugged terrains. Its unique rock formations and serene atmosphere attract adventurers and nature lovers alike. Amedikallu's offbeat charm promises an unforgettable experience for those seeking an escape into the lap of pristine nature.`,
  }, {

    title: "Ettina Bhuja",
    image: "https://www.holidify.com/images/cmsuploads/compressed/5648955580_298b85ed08_b_20190522145542.jpg",
    description: `Ettina Bhuja, a majestic peak in Karnataka's Western Ghats, India, lures trekkers with its awe-inspiring beauty and thrilling ascent. The trek is a perfect blend of adventure and serenity, passing through dense forests and grasslands. At the summit, panoramic views and a massive rock formation resembling an ox's shoulder await, rewarding trekkers with an unforgettable experience amidst nature's grandeur.`,

  }, {

    title: "Hebri",
    image: "https://www.holidify.com/images/cmsuploads/articles/387.jpg",
    description: `Hebri, a charming town in Udupi district, Karnataka, India, is a serene escape nestled amidst lush greenery and paddy fields. Known for its pleasant climate and tranquil ambiance, Hebri offers a refreshing getaway. The region is famous for its ancient temples, including the Mahishamardini Temple. Nature enthusiasts can explore nearby waterfalls and the Agumbe Rainforest Research Station. Hebri's idyllic charm and warm hospitality make it an ideal destination for a peaceful retreat.`,

  },
  {
    title: "Bandaje Arbi",
    image: "https://www.holidify.com/images/cmsuploads/compressed/BandajeArbi_20190522150226.jpg",
    description: `Bandaje Arbi, a captivating trekking destination in Karnataka's Western Ghats, India, entices adventurers with its raw beauty and challenging trails. The trek leads through dense forests, gushing streams, and grasslands, offering a thrilling experience. At the summit, panoramic views of the surrounding hills and valleys unfold, rewarding trekkers with a breathtaking sight. Bandaje Arbi is a hidden gem for nature enthusiasts seeking an offbeat and memorable escapade into the heart of wilderness.`,
  },
  {
    title: "Meghane",
    image: "https://www.holidify.com/images/cmsuploads/compressed/14794276888_d4497720a1_b_20190522144211.jpg",
    description: `Meghane, in Shimoga district, is the highest peak in the Sharavathi valley. Surrounded by dense forests, it offers stunning views and waterfalls. A guide is recommended for this challenging trek, ideal for experienced trekkers seeking pristine nature. Beware of rain, which can make slopes slippery and attract leeches.`,
  }
];


const items = [{
  title: "Coorg",
  image: "https://www.holidify.com/images/cmsuploads/articles/383.jpg",
  description: `Coorg, also known as Kodagu, is a mesmerizing hill station in Karnataka, India. Renowned for its lush coffee plantations, mist-covered hills, and vibrant culture, it's a haven for nature lovers. Visitors can explore waterfalls, ancient temples, and go trekking. Coorg is a tranquil escape, perfect for a rejuvenating getaway.`,

}, {
  title: 'Manchinbele',
  image: 'https://www.holidify.com/images/cmsuploads/articles/376.jpg',
  description: `Manchinbele, nestled near Bangalore, Karnataka, India, is a serene reservoir surrounded by picturesque hills. This scenic destination offers water-based activities like kayaking, boating, and camping, making it a popular weekend retreat. The lush green surroundings and the tranquil ambiance make Manchinbele an ideal spot for nature enthusiasts and adventure seekers alike.`,
}, {
  title: "Wayanad",
  image: "https://www.holidify.com/images/cmsuploads/articles/385.jpg",
  description: `Wayanad, a captivating district in Kerala, India, is a nature lover's paradise. Nestled in the Western Ghats, it boasts of lush forests, misty hills, and abundant wildlife. The region's attractions include ancient caves, serene lakes, and vibrant spice plantations. Wayanad's tranquil beauty and rich cultural heritage make it a must-visit destination for those seeking an enchanting escape into nature's embrace.`,

},
];


const Photography: React.FC = () => {
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
        Photography
      </Typography>
    </div>
    <div>  <AliceCarousel items={
      items.map(item => (
        <div className={`rounded max-w-7xl w-full h-72 lg:h-96 text-white font-bold select-none flex`} style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "100%"
        }} key={item.title}>

          <div className='h-full flex flex-col justify-between'>
            <div className='flex justify-between'>
              <div className='lg:text-2xl bg-black bg-opacity-50 w-fit px-5 py-2.5 rounded-br'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.title}
                </Typography>
              </div>

              <div className='lg:text-2xl bg-black bg-opacity-50 w-fit px-5 py-2.5 rounded-bl'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >Happening Now
                </Typography>
              </div>

            </div>
            <div className='lg:text-2xl bg-black bg-opacity-50 w-fit px-5 pb-0.5 pt-1.5'>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {item.description}
              </Typography>
            </div>
          </div>

        </div>
      ))
    } mouseTracking autoPlay autoPlayInterval={5000} infinite disableDotsControls disableButtonsControls />


    </div>
    <div className='mt-5'>
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
        Photography History
      </Typography>
    </div>

    <div className='cursor-auto'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5'>{photographyItems.map((item, index) => <li key={`${item.title}${index}`}>
        <RecentPhotoCard {...item} />
      </li>)}</ul>
    </div>
  </div>
}

export default Photography