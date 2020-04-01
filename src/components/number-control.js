/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	Icon,
} from '@wordpress/components';

const NumberControl = ({
	className,
	label,
	value,
	clientId,
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
}) => {
	const id = `number-control-${ clientId }`;

	// Set min and max defaults if not specified
	min = (typeof min !== 'undefined') ? min : 1;
	max = (typeof max !== 'undefined') ? max : 12;

	const onChangeValue = (event) => {
		let value = event.target.value;

		if (value !== '') {
			value = parseInt(value, 10);

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
		let width = 100;

		if (value) {
			width = Math.round(value / 12 * 100);
		}
		else {
			let values = [
				parentAttributes.xs,
				parentAttributes.sm,
				parentAttributes.md,
				parentAttributes.lg,
				parentAttributes.xl,
			];

			/**
			 * These values serve as the starting index for `i` in the
			 * proceeding for loop.
			 */
			let sizes = {
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
			for (let i = sizes[size]; i >= 0; i -= 1) {
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
	};

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
					value={ value ? value : '' }
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

export default NumberControl;
