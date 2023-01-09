
// import { useNavigate } from "react-router-dom";
import {
    Button,
    Footer,
   } from "grommet"



export const FooterBar = () => {
    // const navigate = useNavigate();
    return (
        <Footer background="brand" pad="medium">
            <Button primary label="Home" href="/"/>
            <Button primary label="login" href="/login"/>
            <Button primary label="Addrecord" href="/Addrecord"/>
            <Button primary label="Chart" href="/Chart"/>
        </Footer>
    )
}