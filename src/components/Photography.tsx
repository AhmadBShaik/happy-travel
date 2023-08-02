import Typography from '@mui/material/Typography';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImageList, ImageListItem } from '@mui/material';
import { AccessTime } from '@mui/icons-material';


function RecentPhotoCard(props: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className='border border-black h-full mt-2.5 rounded'>
      <ImageListItem key={props.image}>
        <div>
          <img
            src={`${props.image}?w=248&fit=crop&auto=format`}
            srcSet={`${props.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={props.title}
            loading="lazy"
            className='object-cover'
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
                {Math.floor((Math.random() * 10) + 1)} days ago
              </div>
            </div>
          </div>

        </div>
      </ImageListItem>
    </div>

  );
}
const photographyItems = [

  {
    title: "Bananthimari Betta",
    image: "https://www.holidify.com/images/cmsuploads/articles/377.jpg",
    description: `"Bananthi" refers to a mother who is nursing a newborn, and "mari" means the violent goddesses. This captivating place is located at a distance of around 62 kilometres away from Bangalore. It is the most unusual trekking and camping site near Bangalore. Located in the middle of Konanadoddi and Kuthnahalli, Bananthi Betta is a little paradise on earth. The place is full of activities like trekking, boating, treasure hunt, and rappelling. One must carry a rain jacket and enough water bottles.`

  }, {

    title: "Nachikuppam",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Nachikuppam_20190522153701.jpg",
    description: `Nestled in the hilly terrain of Krishnagiri is the Alphonso capital of Nachikuppam. The best place to camp in Nachikuppam, is inside a 60-acre mango farm called ‘Alphonso by the lake’. It is maintained and promoted by a group called Linger. Starting from the drive towards the place, everything is scenic and colorful. This massive orchard is situated next to a small lake and a forest. Camping around tall mango trees, under a bright night sky and stunning mountains views that envelope the hills is a blissful experience. You can even take some mangoes back with you from the orchard.`,

  }, {

    title: "Nandi Hills",
    image: "https://www.holidify.com/images/cmsuploads/compressed/NandiHills_20190522151933.jpg",
    description: `Nandi hills have served the princely kingdom of Mysore for a long time and its rich culture and stunning biodiversity continues to serve hundreds of tourists that flock there every winter. A ruined fortress sits on top of the hill, which was once the summer retreat palace of Tipu Sultan. There are several such structures that recite stories from his reign. Tipu’s drop (a cliff from which prisoners were thrown off), Tipu’s summer residence, Bhoga Nandeeshwara temple and Brahmashram are some popular spots on/near Nandi hills. Besides cultural explorations, you can enjoy cycling, paragliding and trekking. Weather is pleasant year-round but winters are the best time to explore Nandi Hills on foot.`,

  }
  , {


    title: "Sakleshpur",
    image: "https://www.holidify.com/images/cmsuploads/articles/386.jpg",
    description: `Located in the Western Ghats, Sakleshpur is known for its rich biodiversity and exotic flora and fauna. It is a 4-hour drive from Bangalore and approximately 220 km away. This entrancing place cuts a beautiful picture with a scenic setting and hills covered in coffee plantations which make it an ideal place for camping near Bangalore. Plantation walks, jeep safari, biking, horse riding, trekking, and archery are some activities which one should try. `,

  }, {
    title: "Chikmagalur",
    image: "https://www.holidify.com/images/cmsuploads/articles/380.jpg",
    description: `If you are looking for a place to breathe fresh air, then nothing can be better than Chikmagalur. Surrounded by waterfalls and majestic hills, this little wonder provides a chance to connect with nature more than anything. Located in Kemmenagundi, it used to be the favourite summer camp of Krishnaraja Wodeyar IV. Varieties of flowers, wild animals and birds make an unforgettable experience for the travellers.`,

  }, {


    title: "Amedikallu",
    image: "https://www.holidify.com/images/cmsuploads/compressed/5038507067_e955649785_b_20190522145800.jpg",
    description: `Tracing the Amedikallu peak is difficult and usually preferred by experienced trekkers due to its steep slope and thick vegetation cover. This tortoise-shaped peak is home to one of the most difficult treks near Bangalore. Although the journey can be completed in one day (ascent and descent), it's the humid climate and rocky trails that induce the sweat. Majority of the trail is covered by thick forests and grasslands. Once on top, you can camp overnight and enjoy breathtaking views of mountains like Manchikallu and Omnigudda. This trail is inaccessible during monsoon season.`,



  }, {

    title: "Ettina Bhuja",
    image: "https://www.holidify.com/images/cmsuploads/compressed/5648955580_298b85ed08_b_20190522145542.jpg",
    description: ` Ettina Bhuja is the relatively unknown sister of Amedikallu. It is located close to Amedikallu and follows the same pattern of thick forest and steep inclines. The trek begins from Shishila, a village located at the base of the hills and is usually covered in 4-5 hours. Trek is moderate and pleasant. Bring a guide along with you to avoid any confusion as the chances of losing track runs high on this trail. This peak remains traffic-free and is great for a quaint camping experience.`,

  }, {

    title: "Hebri",
    image: "https://www.holidify.com/images/cmsuploads/articles/387.jpg",
    description: `Hebri is located in the Udupi district and has a pleasing environment surrounding it. Animal lovers will have a great time being close to Someshwara Wildlife Sanctuary which is packed with different birds and animals. Travellers are treated to the sight of Kudalatheertha Falls that cascades along the way of the campsite. The brave hearts can try rafting in Varahi River.`,

  },
  {
    title: "Bandaje Arbi",
    image: "https://www.holidify.com/images/cmsuploads/compressed/BandajeArbi_20190522150226.jpg",
    description: `Another picturesque location from the Western Ghats is the Bandaje Arbi Falls. It is located in the Charmadi Ghat and you can reach there only through trekking. Height of the fall is 200 ft and you have to cover around 15 kms to reach there. Trailing through thick vegetation can be tricky if you’ve never been there before. There are chances that the waterfall might be dry during summers. Trek is slightly difficult but extremely satisfying once the waterfalls come into view.`,
  },
  {
    title: "Meghane",
    image: "https://www.holidify.com/images/cmsuploads/compressed/14794276888_d4497720a1_b_20190522144211.jpg",
    description: `Meghane is part of the Sharavathi valley, located in the Shimoga district. It is the highest peak in the entire range and hosts some of the best views of Sharavathi valley. It is enveloped by dense forest, unmarred by pollution and noise. You will encounter several waterfalls on this trek. There is no clear route for this trek and you will probably need a guide to reaching the top. If you’re an experienced trekker and wish to explore unspoiled nature, Meghane is the perfect destination. Rainy season can be difficult to tackle as the slopes will become slippery and leeches will be a constant threat.`,
  }
];


const items = [{
  title: "Coorg",
  image: "https://www.holidify.com/images/cmsuploads/articles/383.jpg",
  description: `The very famous Coorg is just a 5-hour drive from the main city, approximately 265 km away. Located at the edge of the forest, it is perfect for those who are adventure enthusiasts and complete with activities like white water rafting, wildlife safari and rope activities. It is a personal recommendation to be an early riser and head for the sunrise view - something you will never forget. The Scotland of India is one of the most picturesque sites for camping near Bangalore which gives its travellers the view of coffee and spice plantation and Harangi backwaters.`,

}, {
  image: 'https://www.holidify.com/images/cmsuploads/articles/376.jpg',
  title: 'Manchinbele',
  description: `This is a famous and popular camping site near Bangalore to chill and hang out with friends over the weekend. Paintball, rope course, and water sports like kayaking, canoeing, swimming, and raft building are some of the things to try. This one will surely be a memorable outing. The weather is unpredictable and the mornings are usually cold therefore always carry a light jacket or a cardigan.`,
}, {
  title: "Wayanad",
  image: "https://www.holidify.com/images/cmsuploads/articles/385.jpg",
  description: `A nearly 6-hour ride from Bangalore will bring you close to heaven called Wayanad. A camper's paradise, it is loaded with various activities like wildlife sightseeing, jeep trails, cross rivers, fishing, speed boating at the dam site and many others. If you are not adventurous, then you can lazily spend the evening around the campfire singing songs and cooking. For the risk-takers, a trip to Thirunelli will bring you amidst the Western Ghats and a tour to tribal villages and paddy fields is highly recommended.`,

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
      <div className='sm:hidden'>
        <ImageList variant="masonry" cols={1} gap={5}>
          {photographyItems.map((item) => (
            <RecentPhotoCard {...item} key={item.title} />
          ))}
        </ImageList>
      </div>
      <div className='hidden sm:grid lg:hidden'>
        <ImageList variant="masonry" cols={2} gap={7}>
          {photographyItems.map((item) => (
            <RecentPhotoCard {...item} key={item.title} />
          ))}
        </ImageList>
      </div>
      <div className='hidden lg:grid'>
        <ImageList variant="masonry" cols={3} gap={10}>
          {photographyItems.map((item) => (
            <RecentPhotoCard {...item} key={item.title} />
          ))}
        </ImageList>
      </div>

    </div>
  </div>
}

export default Photography