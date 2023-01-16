// import { useNavigate } from "react-router-dom";
import { Button, Footer } from "grommet";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import { BarChart, Catalog } from "grommet-icons";
export const FooterBar = () => {
  const navigate = useNavigate(); //React Hooks must be called in a React function component or a custom React Hook function.
  return (
    <Footer
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      pad="medium"
      border
      round="small"
    >
      {/* <Button primary icon={<Catalog />} /> */}
      <Button private icon={<Catalog />} onClick={() => navigate("/")} />

      <AddButton />
      <Button icon={<BarChart />} onClick={() => navigate("/Chart")} />
    </Footer>
  );
};
