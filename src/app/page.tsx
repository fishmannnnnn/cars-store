'use client';
import Image from 'next/image';
import { cars } from '@/data';
import ProductCard from '@/components/ui/ProductCard';
import { useMemo, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface Filter {
	minPrice: number;
	maxPrice: number;
}
interface Inputs {
	minPrice: number;
	maxPrice: number;
}
export default function Home() {
	const [filter, setFilter] = useState<Filter>({
		minPrice: 0,
		maxPrice: 100000000,
	});
	const { handleSubmit, control, reset } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setFilter({ minPrice: data.minPrice, maxPrice: data.maxPrice });
		console.log(data);
	};

	const filteredCars = useMemo(
		() =>
			cars.filter(
				(item) =>
					item.price < filter?.maxPrice &&
					item.price > filter?.minPrice
			),
		[filter]
	);
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col w-fit'>
				<Controller
					name='minPrice'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<input {...field} className='h-7 w-16 bg-slate-500' />
					)}
				/>
				<Controller
					name='maxPrice'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<input {...field} className='h-7 w-16 bg-slate-500' />
					)}
				/>
				<button type='submit' className='text-black'>
					Apply filter
				</button>
			</form>
			<div className='flex w-fit flex-col mx-auto p-10 bg-stone-100 text-slate-950'>
				{filteredCars.map((item, i) => (
					<div key={i} className='border-b border-stone-300'>
						<ProductCard data={item} />
					</div>
				))}
			</div>
		</>
	);
}
