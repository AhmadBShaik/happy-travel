import HeroBg from '../assets/hero.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';




const steps = [
  {
    title: '🌍 New UNESCO World Heritage Sites',
    description: `Explore ancient wonders and cultural treasures with the recent additions to UNESCO's prestigious list. From majestic temples to stunning natural landscapes, these sites promise unforgettable experiences. Start planning your next adventure now!`,
  },
  { title: "🏖️ Top Beach Destinations of the Year", description: "Get ready to soak up the sun! Discover the hottest beach destinations of the year, offering pristine shores, crystal-clear waters, and vibrant beach culture. Find your perfect paradise and create lasting memories by the sea." },

  {
    title: "🚄 New High - Speed Rail Connection",
    description:
      "Travel just got faster and more convenient with the introduction of a new high - speed rail line connecting major cities.Say goodbye to long travel times and hello to smooth, efficient journeys."
  },
  {

    title: "🗺️ Off - the - Beaten - Path Escapes",
    description: "Escape the crowds and delve into hidden gems.Uncover lesser - known destinations brimming with charm, authenticity, and captivating landscapes.Your off - the - beaten - path adventure awaits!"
  }
  ,
  {
    title: "🌅 Sunset Spectacles Around the World",
    description: "Prepare to be mesmerized by nature's grand finale. Discover the most stunning sunset spots worldwide, where breathtaking hues paint the skies, leaving you in awe of our planet's beauty."
  }

];

function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
        }}
      ><div className='font-bold'>
          <Typography className='uppercase text-orange-500'>
            {steps[activeStep].title}
          </Typography>
        </div>
      </Paper>
      <Box sx={{ width: '100%', p: 2 }} className='text-black'>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <div className={`${activeStep === maxSteps - 1 ? "text-orange-300" : "text-orange-500"}`}>
              Next
            </div>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft className={`${activeStep === maxSteps - 1 ? "text-orange-300" : "text-orange-500"}`} />
            ) : (
              <KeyboardArrowRight className={`${activeStep === maxSteps - 1 ? "text-orange-300" : "text-orange-500"}`} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight className={`${activeStep === 0 ? "text-orange-300" : "text-orange-500"}`} />
            ) : (
              <KeyboardArrowLeft className={`${activeStep === 0 ? "text-orange-300" : "text-orange-500"}`} />
            )}
            <div className={`${activeStep === 0 ? "text-orange-300" : "text-orange-500"}`}>
              Back
            </div>
          </Button>
        }
      />
    </Box>
  );
}

function Hero() {
  return (
    <>
      <div className="flex-1 flex flex-col w-full min-h-screen">

        <div className="flex-1 relative w-full h-screen">
          <img src={HeroBg} alt='Happy Travel' className='h-full w-full object-cover object-center' />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 text-white">
            <div className="max-w-7xl mx-auto px-5 flex h-full">
              <div className="w-full flex lg:w-1/2 xl:py-10 flex-row justify-center items-center max-w-2xl mx-auto">
                <div className="xl:p-5">
                  <div className="font-bold text-center text-xl lg:text-left md:text-2xl lg:text-3xl xl:text-5xl border-b p-2.5 lg:p-5 mt-5 lg:mt-0">
                    HAPPY TRAVEL
                  </div>
                  <div className="mt-5 sm:mt-10 sm:pl-10 text-sm sm:text-lg font-medium ">
                    <div>
                      Discover your dream destinations with Wanderlust Adventures - the ultimate travel companion. Expertly curated itineraries, seamless planning, and exclusive deals await. Let the adventure begin! ✈️🌎 #DiscoverHappiness!
                    </div>
                    <div className="mt-5 font-bold sm:text-left md:text-2xl lg:text-3xl xl:text-5xl  text-center tracking-wide">
                      Get 10% Off on your next travel
                    </div>
                    <div className="flex flex-col sm:space-x-5 mt-5 text-sm sm:flex-row items-center space-y-5 sm:space-y-0">
                      <div className="rounded-full border-2 px-5 py-2.5 flex-1  w-full">
                        Enter your E-Mail
                      </div>
                      <div className="rounded-full border-2 px-5 py-2.5 bg-orange-500">
                        SUBSCRIBE
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="hidden w-1/2 lg:flex justify-end items-center m-auto">
                <div className="bg-white p-8 w-5/6 h-full space-y-3">
                  <div className="text-black text-3xl border-b-2 border-gray-500 p-2.5 font-bold">
                    TRAVEL NEWS
                  </div>
                  <TextMobileStepper />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="bg-white p-4 h-full space-y-3 my-5">
            <div className="text-black text-xl border-b-2 border-gray-500 p-2.5 font-bold text-center">
              TRAVEL NEWS
            </div>
            <TextMobileStepper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
