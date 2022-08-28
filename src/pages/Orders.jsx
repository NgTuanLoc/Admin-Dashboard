import {
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
	GridComponent,
} from '@syncfusion/ej2-react-grids';

import { ordersGrid, ordersData } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Orders' />
			<GridComponent
				id='grid component'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
