import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'

interface pointsTable {
    group1Points: number;
    group2Points: number;
}

export const MyTable = (props: pointsTable) => {
    return (
        <TableContainer component={Paper} style={{ borderRadius: '20px' }}>
            <Table className="table" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{ backgroundColor: 'lightcyan' }}>
                            <Typography variant="h5" >
                                קבוצה 1
                            </Typography>
                        </TableCell>
                        <TableCell align="center" style={{ backgroundColor: 'lightcyan' }}>
                            <Typography variant="h5">
                                קבוצה 2
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                        <TableCell align="center" style={{ fontSize: '25px' }}>
                            {props.group1Points}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: '25px' }}>{props.group2Points}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
