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
		<div className='p-4'>
			<div className='grid grid-cols-[1.5fr,3fr,1fr] gap-6'>
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
