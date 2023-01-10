
// import { useNavigate } from "react-router-dom";
import {
    Button,
    Footer,
   } from "grommet"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddButton from "./AddButton";
import { BarChart,Catalog } from "grommet-icons";
export const FooterBar = () => {
    // const navigate = useNavigate();
    return (
        <Footer background="brand" pad="medium">
            <Button primary icon={<Catalog />} href="/"/>
            <AddButton />
            <Button primary icon={<BarChart />} href="/Chart"/>
        </Footer>
    )
}