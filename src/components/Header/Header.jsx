import React from "react";
import { AppBar, Stack, Button, Link, Toolbar, Typography, Container } from "@mui/material"


function Header() {
  return (
    <>
    <Container>
      <AppBar position="static" variant="inherit">
        <Toolbar>
          <Typography variant="h6" href="#home">Smart TodoList</Typography>
          <Stack direction="row" spacing={2}>            
            <Button color="primary" variant="inherit" href="/list">List</Button>
            <Button  color="primary" variant="inherit" href="/add">Add</Button>
            </Stack>         
          </Toolbar>
      </AppBar>
      </Container>
      <br />
     
    </>
  );
}

export default Header;