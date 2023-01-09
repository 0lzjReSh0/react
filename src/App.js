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
    Text,
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
    colors: {
      brand: '#ffd700',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
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
          <Button primary label="login" href="/login"/>
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
