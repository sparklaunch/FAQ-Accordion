"use client";

import Image from "next/image";
import { useState } from "react";
import minus from "../assets/images/minus.svg";
import plus from "../assets/images/plus.svg";
import FAQItem from "../types/FAQItem";
import styles from "./FAQ.module.css";

export default function FAQ({ faq }: { faq: FAQItem }) {
	const [isOpen, setIsOpen] = useState(false);
	const { title, content } = faq;
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={styles.faq}>
			<div className={styles.faqItem} onClick={toggle}>
				<h2 className={styles.title}>{title}</h2>
				{isOpen ?
					<Image src={minus} alt="Close the FAQ" />
				:	<Image src={plus} alt="Open the FAQ" />}
			</div>
			{isOpen && (
				<div>
					<p className={styles.content}>{content}</p>
				</div>
			)}
		</div>
	);
}
