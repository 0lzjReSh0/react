
// import { useNavigate } from "react-router-dom";
import {
    Button,
    Footer,
   } from "grommet"

import AddButton from "./AddButton";
import { BarChart,Catalog } from "grommet-icons";
export const FooterBar = () => {
    // const navigate = useNavigate();
    return (
        <Footer background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" pad="medium" border round="small" >
            <Button primary icon={<Catalog />}  href="/" />
            <AddButton />
            <Button primary icon={<BarChart />} href="/Chart"/>
        </Footer>
    )
}