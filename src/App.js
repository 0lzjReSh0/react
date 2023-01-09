import React, { useState } from "react";
import Navigation from './navigation';
import {
    Box,
    Button,
    Grommet,
    Header,
    grommet,
    Page,
    PageContent,
    PageHeader,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Grid,
    Heading,
    Paragraph,
    ResponsiveContext,
   } from "grommet"
import { Moon, Sun } from "grommet-icons"
import { deepMerge } from "grommet/utils"


const theme = deepMerge(grommet, {
  global: {
    appBar: {
      position: "relative",
    },
    toolbarTitle: {
      flex: 1,
    },
    layout: {
      width: "auto",
      marginLeft: grommet.spacing(3),
      marginRight: grommet.spacing(3),
      [grommet.breakpoints.up(900 + grommet.spacing(3 * 2))]: {
        width: 900,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    colors: {
      brand: '#ffd700',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    footer: {
      marginTop: grommet.spacing(8),
      borderTop: `1px solid ${grommet.palette.divider}`,
      padding: `${grommet.spacing(6)}px 0`,
    },
  },
});

const AppBar = (props) => (
   <Header
     background="brand"
     pad={{ left: "medium", right: "small", vertical: "small" }}
     elevation="medium"
     {...props}
   />
  );

function App() {
  const [dark, setDark] = useState(false)
  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
      <PageContent>
        
        <AppBar>
          <Text size="large">Budgeter</Text>
          <Button
           a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
           icon={dark ? <Moon /> : <Sun />}
           onClick={() => setDark(!dark)}
           tip={{
                content: (
                  <Box
                    pad="small"
                    round="small"
                    background={dark ? "dark-1" : "light-3"}
                  >
                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  </Box>
                ),
                plain: true,
              }}
         />
        </AppBar>
        <Navigation />
        </PageContent>
      </Page>
    </Grommet>
    
  );
}

export default App;
