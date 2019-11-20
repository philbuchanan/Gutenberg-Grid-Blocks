export default (attributes) => {
	var classes = [
		'o-col'
	];

	if (attributes.xs) classes.push('u-' + attributes.xs + 'of12');
	if (attributes.sm) classes.push('u-' + attributes.sm + 'of12-sm');
	if (attributes.md) classes.push('u-' + attributes.md + 'of12-md');
	if (attributes.lg) classes.push('u-' + attributes.lg + 'of12-lg');
	if (attributes.xl) classes.push('u-' + attributes.xl + 'of12-xl');

	if (attributes.offsetxs) classes.push('u-offset-' + attributes.offsetxs + 'of12');
	if (attributes.offsetsm) classes.push('u-offset-' + attributes.offsetsm + 'of12-sm');
	if (attributes.offsetmd) classes.push('u-offset-' + attributes.offsetmd + 'of12-md');
	if (attributes.offsetlg) classes.push('u-offset-' + attributes.offsetlg + 'of12-lg');
	if (attributes.offsetxl) classes.push('u-offset-' + attributes.offsetxl + 'of12-xl');

	return classes;
};
