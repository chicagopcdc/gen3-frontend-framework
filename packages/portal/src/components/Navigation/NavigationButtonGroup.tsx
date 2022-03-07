import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Button } from '@mui/material';
import { useRouter } from 'next/router'
import { RoleContentEntry } from "../Contents/RolesPageContent";

export interface NavigationButtonGroupProp {
    rolesPages: Record<string, RoleContentEntry>;
}

const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const NavigationButtonGroup = ({ rolesPages }: NavigationButtonGroupProp) => {
    const { asPath, basePath } = useRouter();
    return (
        <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            {Object.entries(rolesPages).map(entry => (
                <Item key={entry[0]
                }>
                    <Button variant="contained" className={(asPath === entry[1].link) ? "heal-btn" : "heal-btn heal-btn-purple"} href={`${basePath}${entry[1].link}` || `${basePath}/#`}>{entry[1].title ? entry[1].title : entry[0]}</Button>
                </Item>
            ))}
        </Stack>
    )
};

export default NavigationButtonGroup;
