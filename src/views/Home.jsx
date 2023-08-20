import React from 'react'
import { Alert, Card } from 'components/ui'
import Bunga from 'assets/images/Bunga.png'
import Family from 'assets/images/family.jpeg'



const Home = () => {



	let img = [
		''
	]


	
	



	const cardHeader = (
			<img className='w-full h-auto rounded-tl-lg rounded-tr-lg' src={Family} alt="keluarga" />
	)



		

	return (
		<div className='container'>
			<Alert title="My Project" rounded type="success">
				All of these projects are designed and developed by me, there were no other devs were involved
			</Alert>
			
				{/* <div className='border rounded-lg w-auto h-full overflow-hidden drop-shadow-md m-10'>
					<img src={Bunga} alt="bunga" />
					<p className='mb-[12px] mt-5 antialiased text-md text-slate-800 font-semibold' > Project Judul</p>
					<p>cek aja dulu</p>
				</div> */}


				<div className="h-auto mt-5 mb-5 flex justify-between flex-row">
					<Card
						header={cardHeader}
					>
						<div className="p-5">
							<h2 className="text-lg "> Cek Dulu </h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, distinctio!</p>
						</div>
					
					</Card>
					<Card
						header={cardHeader}
					>
						<div className="p-5">
							<h2 className="text-lg "> Cek Dulu </h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, distinctio!</p>
						</div>
					
					</Card>
					<Card
						header={cardHeader}
					>
						<div className="p-5">
							<h2 className="text-lg "> Cek Dulu </h2>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, distinctio!</p>
						</div>
					
					</Card>

				</div>
				

			

		</div>
	)
}

export default Home



