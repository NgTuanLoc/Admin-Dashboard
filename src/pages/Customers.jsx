import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
	const toolbarOptions = ['Delete'];

	const editing = { allowDeleting: true, allowEditing: true };

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Customers' />
			<GridComponent
				id='grid component'
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={toolbarOptions}
				editSettings={editing}>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Sort, Filter, Page, Edit, Selection, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
