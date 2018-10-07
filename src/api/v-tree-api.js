const url = 'https://v-tree.ru';
const searchUrl = `${url}/api/autocomplete?w=`;

export const getVariants = (inputedValue) => {
	return fetch(`${searchUrl}${inputedValue}`).then(response => response.json());
}

export const getContent = ( { link } ) => {
	return fetch(`${url}${link}`).then(response => response.json());
}