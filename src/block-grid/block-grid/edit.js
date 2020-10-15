/**
 * External dependencies
 */
import { uniqueId } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependncies
 */
import NumberControl from '../../components/number-control';
import GridAlignmentToolbar from '../../components/alignment-toolbar';
import classnames from '../../utils/classnames';

import {
	xsScreen,
	smScreen,
	mdScreen,
	lgScreen,
	xlScreen,
} from '../../components/icons';

const BlockGridEdit = ({
	className,
	attributes,
	setAttributes,
	isSelected,
	clientId,
}) => {
	const {
		alignVertically,
		alignHorizontally,
		xs,
		sm,
		md,
		lg,
		xl,
	} = attributes;

	/**
	 * Since we removed the default value for `lg` from settings.js, any
	 * `o-block-grid-3-lg` classes will be set as part of the block's className
	 * property and no value will be shown in the NumberControl for the `lg`
	 * attribute. This function automatically checks if there is a className for
	 * the `lg` screen size and, if so, sets the appropriate `lg` attribute
	 * value. It then notifies the user of the adjustment so they can review.
	 *
	 * Using `useEffect` with `[]` since this only needs to run once, not every
	 * time the component updates.
	 *
	 * Fixes issue #47
	 */
	const { createWarningNotice, removeNotice } = useDispatch('core/notices');
	const { selectBlock } = useDispatch('core/block-editor');

	useEffect(() => {
		if (!lg && className) {
			const matches = className.match(/o-block-grid-\d-lg/);

			if (!matches || !matches.length) {
				return;
			}

			const num = parseInt(matches[0].match(/\d+/)[0], 10);

			if (num < 0 || num > 6) {
				return;
			}

			setAttributes({lg: num});

			const noticeId = uniqueId('pbBlockGridSettingsChange');

			createWarningNotice(
				__('Due to a recent update the appearance of one of your Block Grids may have changed. Please ensure it is displaying as expected and save the post to apply the changes.', 'pb'),
				{
					id: noticeId,
					actions: [
						{
							label: __( 'Go to block settings' ),
							onClick: () => {
								selectBlock(clientId);
								removeNotice(noticeId);
							},
						},
					],
				}
			);
		}
	}, []);

	return (
		<Fragment>
			<BlockControls>
				<GridAlignmentToolbar
					type="horizontal"
					selected={ alignHorizontally }
					onChange={ (alignHorizontally) => setAttributes({alignHorizontally}) }
					isCollapsed={ true }
				/>
				<GridAlignmentToolbar
					type="vertical"
					selected={ alignVertically }
					onChange={ (alignVertically) => setAttributes({alignVertically}) }
					isCollapsed={ true }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __('Block Grid Items Per Line', 'pb') }>
					<p>{ __('How many items should display in a single row at each screen size?', 'pb') }</p>
					<NumberControl
						label={ __('Extra Small Screens', 'pb') }
						onChange={ (xs) => setAttributes({xs}) }
						value={ xs }
						max={ 6 }
						allowReset={ true }
						icon={ xsScreen }
					/>
					<NumberControl
						label={ __('Small Screens', 'pb') }
						onChange={ (sm) => setAttributes({sm}) }
						value={ sm }
						max={ 6 }
						allowReset={ true }
						icon={ smScreen }
					/>
					<NumberControl
						label={ __('Medium Screens', 'pb') }
						onChange={ (md) => setAttributes({md}) }
						value={ md }
						max={ 6 }
						allowReset={ true }
						icon={ mdScreen }
					/>
					<NumberControl
						label={ __('Large Screens', 'pb') }
						onChange={ (lg) => setAttributes({lg}) }
						value={ lg }
						max={ 6 }
						allowReset={ true }
						icon={ lgScreen }
					/>
					<NumberControl
						label={ __('Extral Large Screens', 'pb') }
						onChange={ (xl) => setAttributes({xl}) }
						value={ xl }
						max={ 6 }
						allowReset={ true }
						icon={ xlScreen }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ classnames('o-block-grid', className, {
				'u-justify-content-center': alignHorizontally === 'centerHorizontal',
				'u-justify-content-space-between': alignHorizontally === 'spaceBetween',
				'u-justify-content-space-around': alignHorizontally === 'spaceAround',
				'u-justify-content-end': alignHorizontally === 'right',
				'u-align-items-center': alignVertically === 'centerVertical',
				'u-align-items-end': alignVertically === 'bottom',
			}, [
				xs ? `o-block-grid-${ xs }` : '',
				sm ? `o-block-grid-${ sm }-sm` : '',
				md ? `o-block-grid-${ md }-md` : '',
				lg ? `o-block-grid-${ lg }-lg` : '',
				xl ? `o-block-grid-${ xl }-xl` : '',
			]) }>
				<InnerBlocks
					template={ [
						['pb/block-grid-item'],
					] }
					allowedBlocks={ ['pb/block-grid-item'] }
					renderAppender={ !!isSelected ? () => (
						<InnerBlocks.ButtonBlockAppender/>
					) : null }
				/>
			</div>
		</Fragment>
	);
}

export default BlockGridEdit;
