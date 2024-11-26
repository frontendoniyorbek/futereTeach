import realICon from '../assets/realIcon.svg';
import profil from '../assets/profile.svg';
import star from '../assets/star.svg';

function RealReaders() {
	return (
		<section>
			<div className='bg-[#262626] text-white py-10 lg:py-20 2xl:py-[120px]'>
				<div className='custom-container md:flex items-center justify-between'>
					<div className='mb-[30px]'>
						<button className='sm:block text-xs lg:text-base 2xl:text-xl mb-[10px] lg:mb-[14px] 2xl:mb-4 bg-[#333] py-[6px] px-[10px]  font-medium  leading-normal text-white'>
							What Our Readers Say
						</button>
						<h2 className='text-[28px] lg:text-[44px] 2xl:text-[58px] font-medium'>Real Words from Real Readers</h2>
					</div>
					<button className='md:w-auto md:px-5 2xl:px-6 text-[14px] 2xl:text-lg bg-[#141414] flex items-center justify-center py-[14px] border border-[#262626] border-solid rounded-lg text-[#98989a] w-full '>
						<span className='inline-block mr-1 lg:mr-2'>View All Testimonials</span>{' '}
						<img className='w-5 h-5 2xl:w-6 2xl:h-6' src={realICon} alt='reallIcon' />
					</button>
				</div>
			</div>
			<div className='bg-black text-white'>
				<div className='custom-container'>
					<ul className='sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-10'>
						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>

						<li className='border-t-[1px] border-solid border-[#262626] py-10 lg:py-14 2xl:py-20 max-w-[%98] w-full flex-col items-center justify-center text-center'>
							<div className='mb-12 2xl:mb-14 flex  items-center justify-center'>
								<img
									className='mr-3 w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]'
									src={profil}
									alt='profil'
									width='60'
									height='60'
								/>
								<div>
									<h4 className='font-medium text-lg leading-normal 2xl:text-xl'>Sarah Thompson</h4>
									<h5 className='font-normal text-base leading-normal text-[#666] 2xl:text-lg'>San Francisco, USA</h5>
								</div>
							</div>
							<div className='p-5 pt-8 2xl:p-8 2xl:pt-12 bg-[#1a1a1a] relative  rounded-lg border border-[#262626] border-solid'>
								<div className='absolute flex -top-[18px] left-1/2 -translate-x-1/2 border border-[#262626] bg-[#141414] py-2 px-3 rounded-[100px] w-36'>
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
									<img src={star} alt='star' width='24' height='24' />
								</div>
								<p className='2xl:text-lg lg:text-base text-sm'>
									The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case
									studies that are invaluable for staying updated.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default RealReaders;
