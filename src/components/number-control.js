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
	Icon,
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
	icon,
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
			{ !!icon &&
				<Icon
					icon={ icon }
					size={ 20 }
					className="c-number-control__icon"
				/>
			}
			<input
				className="c-number-control__input"
				type="number"
				id={ id }
				value={ value }
				onChange={ onChangeValue }
				aria-describedby={ !!help ? id + '__help' : undefined }
				min={ !!min ? min : 1 }
				max={ !!max ? max : 11 }
				step={ 1 }
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
