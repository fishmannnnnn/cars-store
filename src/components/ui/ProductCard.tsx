import Image, { StaticImageData } from 'next/image';
interface Props {
	data: Car;
}
interface Car {
	image: StaticImageData;
	model: string;
	price: number;
	characteristics?: object;
}
const ProductCard = ({ data }: Props) => {
	return (
		<div className='p-4 max-w-[800px] w-[100%]'>
			<div className='grid grid-cols-[218px,279px,160px] gap-6'>
				<div className='max-w-[260px]'>
					<Image
						className='rounded '
						src={data.image.src}
						width={data.image.width}
						height={data.image.height}
						alt=''
					/>
				</div>
				<div className='h-5'>{data.model}</div>
				<div className='h-4 text-end'>{new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(+data.price)}</div>
			</div>
		</div>
	);
};
export default ProductCard;
