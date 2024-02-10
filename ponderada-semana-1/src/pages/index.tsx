import { supabase } from "@/server/api/supabase";
import { useEffect, useState } from "react";
import styles from '@/styles/index.module.css';

export default function Home() {
	const [data, setData] = useState<any>();

	async function getData() {
		setData((await supabase.from('message').select('*')).data)
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<section className={styles['page']}>
			{data?.map((message: any, index: number) => {
				return <>
					<div key={index} className={styles['card']}>
						<h1>{message.user}</h1>
						<p>{message.message}</p>
					</div>
				</>
			})}
		</section>
	);
}
