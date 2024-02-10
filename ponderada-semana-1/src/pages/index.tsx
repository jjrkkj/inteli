import { supabase } from "@/server/api/supabase";
import { useEffect, useState } from "react";
import styles from '@/styles/index.module.css';

export default function Home() {
	const [data, setData] = useState<any>();

	async function getData() {
		setData((await supabase.from('user').select('*')).data)
	}

	useEffect(() => {
		getData();
	}, [])

	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data])

	return (
		<section className={styles['page']}>
			<div className={styles['card']}>
				<h1>Nome da pessoa</h1>
				<p>Mensagem</p>
			</div>
		</section>
	);
}
