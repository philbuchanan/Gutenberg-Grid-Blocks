/**
 * WordPress dependencies
 */
const {
	__,
	sprintf,
} = wp.i18n;

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
	size,
	parentAttributes,
	showPercentage,
	allowReset,
	icon,
	...props
}) {
	const id = `number-control-${ instanceId }`;

	// Set min and max defaults if not specified
	min = (typeof min !== 'undefined') ? min : 1;
	max = (typeof max !== 'undefined') ? max : 12;

	const onChangeValue = (event) => {
		var value = event.target.value;

		if (value !== '') {
			value = parseInt(value);

			if (value > max) {
				value = max;
			}
			else if (value < min) {
				value = min;
			}
		}

		onChange(value);
	};

	const getPercentageWidth = (value) => {
		var width = 100;

		if (value) {
			width = Math.round(value / 12 * 100);
		}
		else {
			var values = [
				parentAttributes.xs,
				parentAttributes.sm,
				parentAttributes.md,
				parentAttributes.lg,
				parentAttributes.xl,
			];

			var sizes = {
				xs: 0,
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4,
			};

			/**
			 * If no value is set, larger screens inherit their column spans
			 * from smaller screens. We need to loop over each screen size to
			 * find the next largest screen size that has a span (`value`) set.
			 */
			for (var i = sizes[size]; i >= 0; i -= 1) {
				if (values[i]) {
					width = Math.round(values[i] / 12 * 100);

					/**
					 * If this screen size has a value, we can break out of the
					 * loop. We'll use this value to calculate the width.
					 */
					break;
				}
			}
		}

		return sprintf(__('%d%% wide', 'pb'), width);
	}

	return (
		<BaseControl
			label={ label }
			id={ id }
			help={ help }
			className={ className }
		>
			<div>
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
					min={ min }
					max={ max }
					step={ 1 }
					{ ...props }
				/>
				{ !! showPercentage && (
					<span className="c-number-control__percentage">
						{ getPercentageWidth(value) }
					</span>
				) }
				{ !!allowReset &&
					<Button
						isLink
						isDestructive
						onClick={ () => onChange('') }
						className="c-number-control__reset"
					>
						{ __('Reset', 'pb') }
					</Button>
				}
			</div>
		</BaseControl>
	);
}

export default withInstanceId(NumberControl);
