import { Chip, Theme, withStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

export interface CustomChipProps {
  label: string;
  onClick: () => void;
  icon: ReactElement;
}

const CustomChipElement = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
}))(Chip) as typeof Chip;

export const CustomChip = ({ label, onClick, icon }: CustomChipProps) => {
  return <CustomChipElement label={label} icon={icon} onClick={onClick} />;
};
