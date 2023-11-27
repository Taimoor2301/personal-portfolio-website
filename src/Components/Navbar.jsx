import React from "react";

function Navbar() {
	return (
		<nav className='hidden lg:flex justify-between items-center p-2 border-2 border-purpleP bg-darkP rounded-[50px] max-w-7xl mx-auto relative z-[1000]'>
			<section className='flex gap-10'>
				<span className='font-semibold text-3xl px-5'>TAIMOOR ALI</span>
				<div className='flex gap-5 text-xs font-medium items-center' id='nav-links'>
					<a className='hover:text-greyP after:bg-pinkP transition-all duration-300 ease-linear relative' href='#'>
						HOME
					</a>
					<a className='hover:text-greyP after:bg-pinkP transition-all duration-300 ease-linear relative' href='#'>
						ABOUT
					</a>
					<a className='hover:text-greyP after:bg-pinkP transition-all duration-300 ease-linear relative' href='#'>
						PROJECTS
					</a>
					<a className='hover:text-greyP after:bg-pinkP transition-all duration-300 ease-linear relative' href='#'>
						CONTACT
					</a>
				</div>
			</section>

			<section>
				<a
					href='#'
					className='text-xs font-medium bg-purpleP transition-all duration-300 ease-linear rounded-full flex items-center justify-center w-44 h-14'>
					CONTACT ME
				</a>
			</section>
		</nav>
	);
}

export default Navbar;
