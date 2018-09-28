export const productsSelector = (state) => {
	const data = state.contentReducer.vitamins.map(item=>{
		return {
			id: item.id,
			products:item.products
		}
	});
	return data;
}