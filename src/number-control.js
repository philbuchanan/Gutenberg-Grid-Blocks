/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	withInstanceId,
} = wp.compose;



/**
 * Internal dependencies
 */
const {
	BaseControl,
	Button,
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
	allowReset,
	...props
}) {
	const id = `number-control-${ instanceId }`;
	const onChangeValue = (event) => {
		onChange((event.target.value === '') ? '' : parseInt(event.target.value));
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
				style={
					{
						'width': '70px',
						'marginRight': '10px',
					}
				}
				{ ...props }
			/>
			{ !!allowReset &&
				<Button
					isLink
					isDestructive
					onClick={ () => onChange('') }
				>
					{ __('Reset', 'pb') }
				</Button>
			}
		</BaseControl>
	);
}

export default withInstanceId(NumberControl);
