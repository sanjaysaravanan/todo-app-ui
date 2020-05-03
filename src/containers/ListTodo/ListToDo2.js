import React, { forwardRef } from "react";

import MaterialTable from "material-table";
import { Container } from "@material-ui/core";
import moment from "moment";
import {
	Edit,
	DeleteOutline,
	Search,
	ViewColumn,
	Add,
	Clear,
	FirstPage,
	LastPage,
	ChevronRight,
	ChevronLeft,
	Remove,
	FilterList,
	ArrowUpward,
	Check
} from "@material-ui/icons";

export default function MaterialTableDemo() {
	const [state, setState] = React.useState({
		columns: [
			{
				title: "Description",
				field: "description",
				sorting: false,
				filtering: false
			},
			{
				title: "Target Date",
				field: "targetdate",
				type: "date",
				searchable: false,
				filtering: false
			},
			{
				title: "Completed",
				field: "completed",
				type: "boolean",
				sorting: false,
				searchable: false,
				filtering: false
			}
		],
		data: [
			{
				description: "Learn Forms 1",
				targetdate: moment(new Date(2020, 4, 21)).format("YYYY-MM-DD"),
				completed: true
			},
			{
				description: "Learn Forms 2",
				targetdate: moment(new Date()).format("YYYY-MM-DD"),
				completed: false
			}
		]
	});

	return (
		<Container>
			<MaterialTable
				title="ToDo List"
				columns={state.columns}
				data={state.data}
				icons={{
					Edit: () => <Edit />,
					Delete: () => <DeleteOutline />,
					Search: () => <Search />,
					ResetSearch: () => <Clear />,
					Clear: () => <Clear />,
					Add: () => <Add />,
					FirstPage: () => <FirstPage />,
					LastPage: () => <LastPage />,
					NextPage: () => <ChevronRight />,
					PreviousPage: () => <ChevronLeft />,
					ViewColumn: () => <ViewColumn />,
					ThirdStateCheck: () => <Remove />,
					Filter: () => <FilterList />,
					SortArrow: forwardRef((props, ref) => (
						<ArrowUpward {...props} ref={ref} />
					)),
					Check: () => <Check />
				}}
				options={{
					actionsColumnIndex: -1,
					headerStyle: {
						backgroundColor: "#008cff",
						color: "#FFF",
						fontSize: 20
					},
					searchFieldStyle: {
						fontSize: 20
					},
					rowStyle: {
						backgroundColor: "#f2f2f2"
					},
					showTitle: true
				}}
				editable={{
					onRowAdd: newData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								setState(prevState => {
									const data = [...prevState.data];
									data.push(newData);
									return { ...prevState, data };
								});
							}, 600);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									setState(prevState => {
										const data = [...prevState.data];
										data[data.indexOf(oldData)] = newData;
										return { ...prevState, data };
									});
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								setState(prevState => {
									const data = [...prevState.data];
									data.splice(data.indexOf(oldData), 1);
									return { ...prevState, data };
								});
							}, 600);
						})
				}}
			/>
		</Container>
	);
}
