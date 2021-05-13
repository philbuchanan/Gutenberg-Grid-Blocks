/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/components';

export const alignTop = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,4V5.5H20V4ZM14.5,9h-5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V9.5A.5.5,0,0,0,14.5,9Z"/>
	</SVG>
);

export const alignCenterVertical = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M20,11.25H15V4.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v6.75H4v1.5H9V19.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V12.75h5Z"/>
	</SVG>
);

export const alignBottom = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,18.5V20H20V18.5ZM9.5,15h5a.5.5,0,0,0,.5-.5V4.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v10A.5.5,0,0,0,9.5,15Z"/>
	</SVG>
);

export const alignLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,20H5.5V4H4ZM14.5,6.5h-5A.5.5,0,0,0,9,7V17a.5.5,0,0,0,.5.5h5A.5.5,0,0,0,15,17V7A.5.5,0,0,0,14.5,6.5Z"/>
	</SVG>
);

export const alignCenterHorizontal = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19.5,9H12.75V4h-1.5V9H4.5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h6.75v5h1.5V15H19.5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,19.5,9Z"/>
	</SVG>
);

export const alignRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M18.5,4V20H20V4Zm-4,2.5h-5A.5.5,0,0,0,9,7V17a.5.5,0,0,0,.5.5h5A.5.5,0,0,0,15,17V7A.5.5,0,0,0,14.5,6.5Z"/>
	</SVG>
);

export const spaceBetween = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M18.5,4V20H20V4Zm-4,5h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,14.5,9ZM4,20H5.5V4H4Z"/>
	</SVG>
);

export const spaceAround = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M20.5,9h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,20.5,9ZM11.25,20h1.5V4h-1.5ZM8.5,9h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,9Z"/>
	</SVG>
);

// Screen sizes
export const xsScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M15,4H9A2,2,0,0,0,7,6V18a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V6A2,2,0,0,0,15,4Zm1,14a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V6A1,1,0,0,1,9,5h6a1,1,0,0,1,1,1Zm-4-2a1,1,0,1,0,1,1A1,1,0,0,0,12,16Z"/>
	</SVG>
);

export const smScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M16,4H8A2,2,0,0,0,6,6V18a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6A2,2,0,0,0,16,4Zm1,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h8a1,1,0,0,1,1,1Zm-5-2a1,1,0,1,0,1,1A1,1,0,0,0,12,16Z"/>
	</SVG>
);

export const mdScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M18,6H6A2,2,0,0,0,4,8v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8A2,2,0,0,0,18,6Zm1,10a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V8A1,1,0,0,1,6,7H18a1,1,0,0,1,1,1Zm-2-5a1,1,0,1,0,1,1A1,1,0,0,0,17,11Z"/>
	</SVG>
);

export const lgScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M17.5,7a.5.5,0,0,1,.5.5V15H6V7.5A.5.5,0,0,1,6.5,7ZM6.5,6A1.5,1.5,0,0,0,5,7.5V16H19V7.5A1.5,1.5,0,0,0,17.5,6ZM4,16.5H20A1.5,1.5,0,0,1,18.5,18H5.5A1.5,1.5,0,0,1,4,16.5Z"/>
	</SVG>
);

export const xlScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,7.75a2,2,0,0,1,2-2H18a2,2,0,0,1,2,2v6a2,2,0,0,1-2,2H14a3.41,3.41,0,0,0,.25,1.5H15a.5.5,0,0,1,0,1H9a.5.5,0,0,1,0-1h.75a3.41,3.41,0,0,0,.25-1.5H6a2,2,0,0,1-2-2Zm1.4-.86a.86.86,0,0,0-.26.31A1.49,1.49,0,0,0,5,7.76v6a1.12,1.12,0,0,0,.14.6.8.8,0,0,0,.31.26,1.44,1.44,0,0,0,.54.14H18a1,1,0,0,0,.6-.15.76.76,0,0,0,.26-.3,1.44,1.44,0,0,0,.14-.54v-6a1,1,0,0,0-.15-.6.76.76,0,0,0-.3-.26A1.49,1.49,0,0,0,18,6.75H6A1.09,1.09,0,0,0,5.4,6.89Z"/>
	</SVG>
);
