import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
	const [curOpen, setIsOpen] = useState(null);
	return (
		<div className="accordion">
			{data.map((faq, i) => (
				<AccordionItem
					key={faq.title}
					num={i}
					title={faq.title}
					curOpen={curOpen}
					onOpen={setIsOpen}
				>
					{faq.text}
				</AccordionItem>
			))}
		</div>
	);
}
