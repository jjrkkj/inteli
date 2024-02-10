import { supabase } from "@/server/api/supabase";
import { useEffect, useState } from "react";
import styles from '@/styles/index.module.css';

export default function Home() {
	const [data, setData] = useState<any>();
	const [modalVisibility, setModalVisibility] = useState(false);
	const [name, setName] = useState<string>();
	const [message, setMessage] = useState<string>();

	async function getData() {
		setData((await supabase.from('message').select('*')).data)
	}

	useEffect(() => {
		getData();
	}, [])

	function add() {
		if (name && message) {
			setModalVisibility(false);
			setName(undefined);
			setMessage(undefined);
		} else {
			alert('Preencha os campos obrigatórios, por favor!');
		}
	}

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
			<button className={styles['add-button']} onClick={() => setModalVisibility(true)}>
				+
			</button>

			{
				modalVisibility &&
				<>
					<div className={styles['bg']} onClick={() => { setModalVisibility(false); setName(undefined); setMessage(undefined) }}></div>
					<div className={styles['modal']}>
						<h1>Envie uma mensagem!</h1>
						<div className={styles['inputs-div']}>
							<input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Digite seu nome" />
							<input onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder="Digite sua mensagem" />
						</div>
						<button onClick={add}>Enviar</button>
					</div>
				</>
			}
		</section>
	);
}
