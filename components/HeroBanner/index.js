
import Image from 'next/image'

function HeroBanner() {
    const backgroundImageUrl = '/image/bg-pattern.png'; // Replace with the actual path to your background image

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // Adjust this to control how the image covers the container
        

    
      };
    return (
        <div className="grid grid-cols-5 gap-2">
        <div className="flex flex-col justify-center items-center p-10 rounded-lg col-span-3 " style={...containerStyle} >

        <h1 className="text-5xl  font-light" style={{lineHeight:'1.5'}}>Hello, I’m Ali , a <span className='font-bold'>product Designer</span> With <span className='font-bold'>5 years</span> of <span className='font-bold'>experience</span>.</h1>
        <p className='font-normal'> I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
        </div>
        <div className="col-span-2 col-start-4">
        <Image
          src="/image/me.png"
          width={0}
          height={0}
          sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          alt="Picture of the author"
        />
        </div>
    </div>


        

    )
 
}

export default HeroBanner
