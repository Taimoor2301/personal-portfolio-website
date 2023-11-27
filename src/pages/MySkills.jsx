import bigArrow from "../assets/shapes/bigArrow.png";

function MySkills() {
	return (
		<div>
			<main className='max-w-7xl px-5 xl:px-0 mx-auto lg:py-28 py-10 flex flex-col gap-10 lg:gap-28'>
				<div className='grid grid-cols-2 items-center'>
					<h1 className='text-4xl lg:text-7xl text-center col-span-1 font-medium'>My Skills</h1>
					<img src={bigArrow} className='object-contain col-span-1' alt='' />
				</div>

				<div className=' grid gap-2 grid-cols-1 md:grid-cols-2 gap-x-10 font-mono'>
					<div className='flex flex-col gap-2'>
						{skills.slice(0, 5).map((s, i) => (
							<div key={i} className='flex justify-between gap-5'>
								<span className='text-lg font-medium tracking-wider'>{s.name}</span>
								<div className='flex gap-2 items-center'>
									{arr.map((n) => (
										<Circle key={n} fill={n <= s.rating ? true : false} />
									))}
								</div>
							</div>
						))}
					</div>
					<div className='flex flex-col gap-2'>
						{skills.slice(5, 10).map((s, i) => (
							<div key={i} className='flex justify-between gap-5'>
								<span className='text-lg font-medium tracking-wider'>{s.name}</span>
								<div className='flex gap-2 items-center'>
									{arr.map((n) => (
										<Circle key={n} fill={n <= s.rating ? true : false} />
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default MySkills;

const Circle = ({ fill }) => {
	return <div className={`h-2 md:h-4 aspect-square rounded-full ${fill ? "bg-pinkP" : "bg-pinkP/25"}`}></div>;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const skills = [
	{ name: "CSS", rating: 8 },
	{ name: "Tailwind", rating: 5 },
	{ name: "Javascript", rating: 7 },
	{ name: "React", rating: 9 },
	{ name: "Node.js", rating: 6 },
	{ name: "Express", rating: 5 },
	{ name: "Mongo DB", rating: 8 },
	{ name: "Firebase", rating: 8 },
	{ name: "Html", rating: 6 },
	{ name: "Bootstrap", rating: 8 },
];
