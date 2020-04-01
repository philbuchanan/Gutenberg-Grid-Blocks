/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/components';

export const alignTop = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M5,4V5.5H19V4Zm3.39,7.11h2.86V20h1.5V11.11h2.86L12,7.5Z"/>
	</SVG>
);

export const alignCenterVertical = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M5,11.25v1.5H19v-1.5ZM15.61,5.64H12.75V2h-1.5V5.64H8.39L12,9.25ZM8.39,18.36h2.86V22h1.5V18.36h2.86L12,14.75Z"/>
	</SVG>
);

export const alignBottom = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M5,18.5V20H19V18.5Zm10.61-5.61H12.75V4h-1.5v8.89H8.39L12,16.5Z"/>
	</SVG>
);

export const alignLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M4,19H5.5V5H4Zm7.11-7.75V8.39L7.5,12l3.61,3.61V12.75H20v-1.5Z"/>
	</SVG>
);

export const alignCenterHorizontal = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M11.25,19h1.5V5h-1.5Zm7.11-7.75V8.39L14.75,12l3.61,3.61V12.75H22v-1.5Zm-12.72,0H2v1.5H5.64v2.86L9.25,12,5.64,8.39Z"/>
	</SVG>
);

export const alignRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M18.5,5V19H20V5Zm-5.61,6.25H4v1.5h8.89v2.86L16.5,12,12.89,8.39Z"/>
	</SVG>
);

export const spaceBetween = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M4,19H5.5V5H4ZM18.5,5V19H20V5ZM12.75,2h-1.5V5.64H8.39L12,9.25l3.61-3.61H12.75Z"/>
	</SVG>
);

export const spaceAround = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M11.25,19h1.5V5h-1.5ZM19.12,5.64V2h-1.5V5.64H14.77l3.61,3.61L22,5.64ZM6.38,2H4.88V5.64H2l3.6,3.61L9.23,5.64H6.38Z"/>
	</SVG>
);

// Screen sizes
export const xsScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M10,7.75V10.5l2.83-3H10.25A.25.25,0,0,0,10,7.75ZM15,5H9A1.5,1.5,0,0,0,7.5,6.5v11A1.5,1.5,0,0,0,9,19h6a1.5,1.5,0,0,0,1.5-1.5V6.5A1.5,1.5,0,0,0,15,5Zm0,12a.5.5,0,0,1-.5.5h-5A.5.5,0,0,1,9,17V7a.5.5,0,0,1,.5-.5h5A.5.5,0,0,1,15,7Z"/>
	</SVG>
);

export const smScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M8.5,6.75V10.5l5.83-4H8.75A.25.25,0,0,0,8.5,6.75ZM16.5,4h-9A1.5,1.5,0,0,0,6,5.5v13A1.5,1.5,0,0,0,7.5,20h9A1.5,1.5,0,0,0,18,18.5V5.5A1.5,1.5,0,0,0,16.5,4Zm0,14a.5.5,0,0,1-.5.5H8a.5.5,0,0,1-.5-.5V6A.5.5,0,0,1,8,5.5h8a.5.5,0,0,1,.5.5Z"/>
	</SVG>
);

export const mdScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M6.5,8.75V12.5l7.83-4H6.75A.25.25,0,0,0,6.5,8.75ZM18.5,6H5.5A1.5,1.5,0,0,0,4,7.5v9A1.5,1.5,0,0,0,5.5,18h13A1.5,1.5,0,0,0,20,16.5v-9A1.5,1.5,0,0,0,18.5,6Zm0,10a.5.5,0,0,1-.5.5H6a.5.5,0,0,1-.5-.5V8A.5.5,0,0,1,6,7.5H18a.5.5,0,0,1,.5.5Z"/>
	</SVG>
);

export const lgScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M2.5,17.75v1a.5.5,0,0,0,.5.5H21a.5.5,0,0,0,.5-.5v-1Zm2-1h15a.5.5,0,0,0,.5-.5v-10a1.5,1.5,0,0,0-1.5-1.5H5.5A1.5,1.5,0,0,0,4,6.25v10A.5.5,0,0,0,4.5,16.75Zm1-10a.5.5,0,0,1,.5-.5H18a.5.5,0,0,1,.5.5v8a.5.5,0,0,1-.5.5H6a.5.5,0,0,1-.5-.5Zm1.25.5a.25.25,0,0,0-.25.25v3.75l7.83-4Z"/>
	</SVG>
);

export const xlScreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M5.5,6.25V11L16.33,6H5.75A.25.25,0,0,0,5.5,6.25Zm14-2.75H4.5A1.5,1.5,0,0,0,3,5V15a1.5,1.5,0,0,0,1.5,1.5h6.75V19H7v1.5H17V19H12.75V16.5H19.5A1.5,1.5,0,0,0,21,15V5A1.5,1.5,0,0,0,19.5,3.5Zm0,11a.5.5,0,0,1-.5.5H5a.5.5,0,0,1-.5-.5v-9A.5.5,0,0,1,5,5H19a.5.5,0,0,1,.5.5Z"/>
	</SVG>
);
