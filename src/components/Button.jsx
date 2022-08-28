const Button = ({ color, bgColor, text, borderRadius, size }) => {
	return (
		<button
			className={`text-${size} p-3 hover:drop-shadow-xl`}
			type='button'
			style={{ backgroundColor: bgColor, color, borderRadius }}>
			{text}
		</button>
	);
};

export default Button;
