import arrow from "../assets/shapes/arrow.png";
import img from "../assets/Backgrounds/img1.png";

function About() {
	return (
		<div className='backdrop-blur-xl' id='about'>
			<main className='max-w-7xl mx-auto px-5 xl:px-0 grid grid-cols-12 py-10 lg:py-28'>
				<div className='col-span-full lg:col-span-6'>
					<img src={img} alt='' />
				</div>

				<div className='col-span-full lg:col-span-6 flex flex-col gap-10'>
					<div className='text-6xl px-5 lg:px-0 lg:text-8xl font-semibold'>
						<h1>
							About <span className='lg:hidden'>me</span>
						</h1>
						<span className='flex justify-end lg:justify-between'>
							<span className='hidden lg:block'>me</span>
							<img className='object-contain' src={arrow} alt='' />
						</span>
					</div>
					<div className='flex flex-col gap-10 px-5 lg:px-0 lg:w-[80%] self-end'>
						<p className='text-greyP text-lg'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum ipsa, suscipit perspiciatis atque minus asperiores vero ab
							quaerat nisi repudiandae iusto labore dolore illum earum! Fugit cupiditate sint sequi voluptates quis, dolorem tenetur architecto enim
							veritatis atque eos? Nesciunt!
						</p>
						<a className='flex justify-center items-center font-bold text-sm rounded-full w-44 h-10 bg-pinkP' href='#'>
							Contact me
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

export default About;
