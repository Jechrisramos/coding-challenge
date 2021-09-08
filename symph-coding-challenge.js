const items = [
  { id: 2, seqId: 4, parent: 5, name: "index.tsx" },
  { id: 3, seqId: 3, parent: 1, name: "Sidebar" },
  { id: 4, seqId: 5, parent: 1, name: "Table" },
  { id: 7, seqId: 5, parent: 5, name: "SelectableDropdown.tsx" },
  { id: 5, seqId: 2, parent: 1, name: "AssignmentTable" },
  { id: 1, seqId: 1, parent: null, name: "components" },
  { id: 6, seqId: 2, parent: null, name: "controllers" },
];

const transformItems = (array) => {
	
	const sortItems = [...array].sort((a,b) => {
		return (a.id <= b.parent) ? -1 : 1;
	});

	sortItems.map( item => {
		switch(item.parent) {
		  case null:
		    item.depth = 0;
		    break;
		  case 1:
		    item.depth = 1;
		    break;
		  case 2:
		    item.depth = 2;
		    break;
		}
	});

	return sortItems;
}

const finalItems = transformItems(items);

console.log(finalItems);

/*
Output:
	{id: 1, seqId: 1, parent: null, name: 'components', depth: 0}
	{id: 3, seqId: 3, parent: 1, name: 'Sidebar', depth: 1}
	{id: 4, seqId: 5, parent: 1, name: 'Table', depth: 1}
	{id: 5, seqId: 2, parent: 1, name: 'AssignmentTable', depth: 1}
	{id: 2, seqId: 4, parent: 5, name: 'index.tsx', depth: 2}
	{id: 7, seqId: 5, parent: 5, name: 'SelectableDropdown.tsx', depth: 2}
	{id: 6, seqId: 2, parent: null, name: 'controllers', depth: 0}
*/

// I was able to get the order of items based on their heirarchy by sorting the cloned items array .
// to add the depth attribute to each item, I iterated the sortItems array using the map method and used switch-case to add the respective depth #.