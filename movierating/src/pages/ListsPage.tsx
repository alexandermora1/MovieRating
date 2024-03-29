import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Fab, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';


export const ListsPage = () => {
    
    const [isActive, setIsActive] = React.useState<boolean>(false);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "center", marginRight: 4 }}>
                    <Fab variant="extended" color="primary" sx={{ marginTop: 4, marginLeft: 2 }}>
                            <AddIcon sx={{ marginRight: 1 }}/>
                            Add list
                    </Fab>                
                </Box>

            <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 2 }}>Lists Page</Typography>

            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} 
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="h5">List 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>             
                    <AccordionActions>
                        {!isActive ? <Button size="small">Make active</Button> : <Button size="small" disabled>Make active</Button>}
                    </AccordionActions>   
                </Accordion>
                
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} 
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5">List 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium totam quam nesciunt aperiam dicta? Sint, vel?
                    </AccordionDetails>     
                    <AccordionActions>
                        {!isActive ? <Button size="small">Make active</Button> : <Button size="small" disabled>Make active</Button>}
                    </AccordionActions>             
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} 
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5">List 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit esse tenetur rem earum ut quasi! Aut beatae dolore dolores porro laborum necessitatibus veniam commodi, praesentium at excepturi mollitia esse corrupti? Explicabo, voluptate?
                    </AccordionDetails>     
                    <AccordionActions>
                        {!isActive ? <Button size="small">Make active</Button> : <Button size="small" disabled>Make active</Button>}
                    </AccordionActions>             
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />} 
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5">List 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ex minus ducimus unde obcaecati officiis fugiat repellendus, earum, quibusdam ad reprehenderit consequuntur recusandae, porro rerum.
                    </AccordionDetails>     
                    <AccordionActions>
                        {!isActive ? <Button size="small">Make active</Button> : <Button size="small" disabled>Make active</Button>}
                    </AccordionActions>             
                </Accordion>
            </Box>
        </Box>
    )
}