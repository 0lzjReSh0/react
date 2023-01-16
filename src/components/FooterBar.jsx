
// import { useNavigate } from "react-router-dom";
import {
    Button,
    Footer,
   } from "grommet"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export const FooterBar = () => {
    // const navigate = useNavigate();
    return (
        <Footer background="brand" pad="medium">
            <Button primary label="Home" href="/"/>
            <Fab color="primary" aria-label="add">
                <AddIcon href='/Addrecord'/>
            </Fab>
            <Button primary label="Addrecord" href="/Addrecord"/>
            <Button primary label="Chart" href="/Chart"/>
        </Footer>
    )
}