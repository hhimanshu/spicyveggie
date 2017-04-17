import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

const SpicyMenu = (props)  => (
    <Table>
        <TableBody displayRowCheckbox={false}>
            <TableRow>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);

export default SpicyMenu;