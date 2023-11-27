import svg from "../assets/Hand-coding.svg";
import svg2 from "../assets/Backgrounds/bg2.svg";
import lines from "../assets/Backgrounds/lines.svg";
import bg from "../assets/Backgrounds/bg.png";
import circle from "../assets/Backgrounds/circle.png";
import Navbar from "../Components/Navbar";

const Hero = () => {
	return (
		<div id='tempgrad' className='relative pt-5 px-5'>
			<Navbar />
			<main className='max-w-7xl mx-auto grid grid-cols-12 px-5 lg:px-0 lg:pl-10 z-50 relative'>
				<TextSection />
				<div className='col-span-full lg:col-span-7'>
					<img src={circle} alt='illustration' />
				</div>
			</main>
		</div>
	);
};

export default Hero;

const TextSection = () => (
	<div className='col-span-full lg:col-span-5 flex flex-col justify-end items-center lg:items-start text-center lg:text-left min-h-full'>
		<span className='lg:text-3xl text-greyP w-max'>FRONTEND WEB DEVELOPER</span>
		<div className='text-5xl md:text-8xl font-bold flex lg:flex-col gap-5'>
			<h1>TAIMOOR</h1>
			<h1>ALI</h1>
		</div>

		<div className='flex gap-4 text-greyP text-lg my-10'>
			<div className='w-[2px] h-full bg-gray-400 rounded-full'></div>
			<p className=''>
				I'am a Frontend Web Developer <br /> base in Rawalpindi Pakistan.
			</p>
		</div>
	</div>
);
