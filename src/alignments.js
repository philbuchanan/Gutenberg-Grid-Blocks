/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;



export default (attributes) => {
	let classes = [];

	if (attributes.alignHorizontally) {
		switch(attributes.alignHorizontally) {
			case 'centerHorizontal':
				classes.push('u-justify-content-center');
				break;
			case 'spaceBetween':
				classes.push('u-justify-content-space-between');
				break;
			case 'spaceAround':
				classes.push('u-justify-content-space-around');
				break;
			case 'right':
				classes.push('u-justify-content-end');
				break;
		}
	}

	if (attributes.alignVertically) {
		switch(attributes.alignVertically) {
			case 'centerVertical':
				classes.push('u-align-items-center');
				break;
			case 'bottom':
				classes.push('u-align-items-end');
				break;
		}
	}

	return classes;
};
