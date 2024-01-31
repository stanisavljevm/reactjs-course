import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
	return (
		<div className="accordion">
			{data.map((faq, i) => (
				<AccordionItem
					key={faq.title}
					num={i}
					title={faq.title}
					text={faq.text}
				/>
			))}
		</div>
	);
}
