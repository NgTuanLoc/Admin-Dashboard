import {
	SparklineComponent,
	Inject,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={3}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			type={type}
			xName='x'
			yName='yval'
			tooltipSettings={{
				visible: true,
				// eslint-disable-next-line no-template-curly-in-string
				format: '${x} : data ${yval}',
				trackLineSettings: {
					visible: true,
				},
			}}>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
