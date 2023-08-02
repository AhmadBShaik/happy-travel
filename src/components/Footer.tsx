import { Box } from "@mui/material"

const Footer = () => {
    return (<Box component="footer" className="bg-orange-500 text-white py-auto text-center h-20 flex items-center justify-center" >
        <div className='text-xs lg:flex lg:space-x-16 lg:items-center lg:text-md'>
            <div className="">

                <div>Inspired by this <a href="https://www.figma.com/file/Dw1AZGxfJHoKWCGNhQubgF/Travel-Agency-Resposive-Web-Design-(Community)?type=design&node-id=0-1&mode=design" target="_blank" className="underline">Figma Design</a></div>
                <div>Image assets used in the website is from <a href="https://www.holidify.com/" target="_blank" className="underline">Holidify</a></div>
            </div>
            <div>

                <div className="mt-2 lg:mt-0">
                    Copyright ©2023-2024 Happy Travel
                </div>
            </div>
        </div>
    </Box>)
}

export default Footer