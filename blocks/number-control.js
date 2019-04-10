/**
 * WordPress dependencies
 */
const {
	compose,
	withInstanceId,
	withState,
} = wp.compose;



/**
 * Internal dependencies
 */
const {
	BaseControl
} = wp.components;



function NumberControl({
	className,
	label,
	value,
	instanceId,
	onChange,
	help,
	min,
	max,
	...props
}) {
	const id = `inspector-text-control-${ instanceId }`;
	const onChangeValue = (event) => {
		onChange((event.target.value === '') ? undefined : parseInt(event.target.value));
	};

	return (
		<BaseControl
			label={ label }
			id={ id }
			help={ help }
			className={ className }
		>
			<input
				type="number"
				id={ id }
				value={ value }
				onChange={ onChangeValue }
				aria-describedby={ !!help ? id + '__help' : undefined }
				min={ !!min ? min : 1 }
				max={ !!max ? max : 11 }
				step={ 1 }
				{ ...props }
				style={ {'width': '70px'} }
			/>
		</BaseControl>
	);
}

export default compose([
	withInstanceId,
	withState({
		currentInput: null,
	}),
])(NumberControl);
