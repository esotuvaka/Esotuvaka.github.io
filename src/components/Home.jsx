import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<>
			<div name="home" className="  w-full h-screen ">
				<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
					<p className="text-ash mb-4">- Frontend Developer -</p>
					<h1 className="text-teal-800 text-5xl  sm:text-8xl  font-semibold">
						I am Eric Otuvaka
					</h1>
					<p className="text-ash max-w-[700] mt-4">
						I specialize in building unique and aesthetic digital experiences
						<span className="font-bold text-teal-800">.</span>
					</p>
					<div className="flex gap-4">
						<button className="text-ash justify-center border-2 rounded-sm border-ash my-4 flex items-center hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
							<Link
								to="projects"
								smooth={true}
								duration={500}
								className="px-6 py-3"
							>
								View Projects
							</Link>
						</button>
						{/* <button className="text-ash w-[165px] justify-center  border-2 rounded-sm border-ash px-6 py-3 my-4 flex items-center hover:bg-teal-900 hover:border-teal-900 hover:text-white hover:-translate-y-1 hover:shadow-2xl duration-500">
						{/*LINK TO RESUME */}

						{/* </button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
