const {
	SVG,
	Path,
} = wp.components;

export const alignTop = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>
	</SVG>
);

export const alignCenterVertical = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/>
	</SVG>
);

export const alignBottom = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
	</SVG>
);

export const alignLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M11,16V13H21V11H11V8L7,12ZM3,20H5V4H3Z"/>
	</SVG>
);

export const alignCenterHorizontal = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M19,16V13h4V11H19V8l-4,4ZM5,8v3H1v2H5v3l4-4Zm6,12h2V4H11Z"/>
	</SVG>
);

export const alignRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M13,8v3H3v2H13v3l4-4Zm8-4H19V20h2Z"/>
	</SVG>
);

export const spaceBetween = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<path d="M3,20H5V4H3ZM13,1H11V5H8l4,4,4-4H13Zm6,3V20h2V4Z"/>
	</SVG>
);

export const spaceAround = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z"/>
		<Path d="M11,20h2V4H11ZM6,1H4V5H1L5,9,9,5H6ZM20,5V1H18V5H15l4,4,4-4Z"/>
	</SVG>
);

// Screen sizes
export const xsScreen = (
	<SVG viewBox="0 0 24 24">
		<Path d="M9,6v5l5-5Zm7.5-4H6.5A1.5,1.5,0,0,0,5,3.5v17A1.5,1.5,0,0,0,6.5,22h10A1.5,1.5,0,0,0,18,20.5V3.5A1.5,1.5,0,0,0,16.5,2ZM16,17H7V4h9Z"/>
	</SVG>
);

export const smScreen = (
	<SVG viewBox="0 0 24 24">
		<Path d="M8,5v6l6-6ZM18.5,1H5.5A1.5,1.5,0,0,0,4,2.5v19A1.5,1.5,0,0,0,5.5,23h13A1.5,1.5,0,0,0,20,21.5V2.5A1.5,1.5,0,0,0,18.5,1ZM18,21H6V3H18Z"/>
	</SVG>
);

export const mdScreen = (
	<SVG viewBox="0 0 24 24">
		<Path d="M21.5,4H2.5A1.5,1.5,0,0,0,1,5.5v13A1.5,1.5,0,0,0,2.5,20h19A1.5,1.5,0,0,0,23,18.5V5.5A1.5,1.5,0,0,0,21.5,4ZM21,18H3V6H21ZM5,8v6l6-6Z"/>
	</SVG>
);

export const lgScreen = (
	<SVG viewBox="0 0 24 24">
		<Path d="M0,20v1.5A1.5,1.5,0,0,0,1.5,23h21A1.5,1.5,0,0,0,24,21.5V20Zm5-8L18,6H5ZM2.46,19H21.54A1.47,1.47,0,0,0,23,17.54V3.46A1.47,1.47,0,0,0,21.54,2H2.46A1.47,1.47,0,0,0,1,3.46V17.54A1.47,1.47,0,0,0,2.46,19ZM3,4H21V17H3Z"/>
	</SVG>
);

export const xlScreen = (
	<SVG viewBox="0 0 24 24">
		<Path d="M22.5,0H1.5A1.5,1.5,0,0,0,0,1.5v15A1.5,1.5,0,0,0,1.5,18H9v3H7a2,2,0,0,0-2,2v1H19V23a2,2,0,0,0-2-2H15V18h7.5A1.5,1.5,0,0,0,24,16.5V1.5A1.5,1.5,0,0,0,22.5,0ZM21,14H3V3H21ZM4.5,4.5v6l13-6Z"/>
	</SVG>
);
