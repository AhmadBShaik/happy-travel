import Typography from "@mui/material/Typography"

const Contact: React.FC = () => {
  return (
    <div className='max-w-7xl w-full mx-auto p-5'>
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
          Contact
        </Typography>
      </div>
      <div className="border border-black p-5 w-fit rounded cursor-default">
        <div>This is an example project and sample of my work.</div>
        <div>Please visit my <a href="https://ahmad-portfolio-nine.vercel.app/" target="_blank" className="underline">Portfolio</a> to know more about me.</div>
      </div>
    </div>
  )
}

export default Contact