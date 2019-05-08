const {
	SVG,
	Path,
} = wp.components;

export const alignTop = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
	</SVG>
);

export const alignCenterVertical = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
	</SVG>
);

export const alignBottom = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
	</SVG>
);

export const alignLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M11,16V13H21V11H11V8L7,12ZM3,20H5V4H3Z"/>
	</SVG>
);

export const alignCenterHorizontal = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M19,16V13h4V11H19V8l-4,4ZM5,8v3H1v2H5v3l4-4Zm6,12h2V4H11Z"/>
	</SVG>
);

export const alignRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M13,8v3H3v2H13v3l4-4Zm8-4H19V20h2Z"/>
	</SVG>
);

export const spaceBetween = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M3,20H5V4H3ZM13,1H11V5H8l4,4,4-4H13Zm6,3V20h2V4Z"/>
	</SVG>
);

export const spaceAround = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M11,20h2V4H11ZM6,1H4V5H1L5,9,9,5H6ZM20,5V1H18V5H15l4,4,4-4Z"/>
	</SVG>
);
