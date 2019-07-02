export default (attributes) => {
	var classes = [];

	if (attributes.xs) classes.push('o-block-grid-' + attributes.xs);
	if (attributes.sm) classes.push('o-block-grid-' + attributes.sm + '-sm');
	if (attributes.md) classes.push('o-block-grid-' + attributes.md + '-md');
	if (attributes.lg) classes.push('o-block-grid-' + attributes.lg + '-lg');
	if (attributes.xl) classes.push('o-block-grid-' + attributes.xl + '-xl');

	return classes;
};
