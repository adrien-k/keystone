import React from 'react';
import { StyleSheet } from 'aphrodite/no-important';
import { FormField, FormLabel } from '../../admin/client/App/elemental';
import theme from '../../admin/client/theme';

function NestedFormField ({ children, className, label, ...props }) {
	return (
		<FormField {...props}>
			<FormLabel aphroditeStyles={classes.label}>
				{label}
			</FormLabel>
			{children}
		</FormField>
	);
};
const classes = StyleSheet.create({
	label: {
		color: theme.color.gray40,
		fontSize: theme.font.size.small,

		[`@media (min-width: ${theme.breakpoint.tabletLandscapeMin})`]: {
			paddingLeft: '1em',
		},
	},
});

module.exports = NestedFormField;
