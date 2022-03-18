import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { texts } from "../../utils/texts";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useStyles } from "./home.styles";

const theme = createTheme();

export default function Home(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div
        onClick={() => props.setOpenSuggestionsBox(false)}
        className={classes.container}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {texts.pages.home.en.title}
            </Typography>
            <Box sx={{ mt: 1, marginTop: 0, paddingBottom: 40, width: "100%" }}>
              <div className={classes.menuWrapper}>
                <TextField
                  value={props.searchValue}
                  onChange={props.handleSearchFiledChange}
                  type="text"
                  autoComplete="off"
                  margin="normal"
                  fullWidth
                  label={texts.pages.home.en.textField}
                  autoFocus
                />
                {props.openSuggestionsBox && (
                  <MenuList className={classes.menu}>
                    {props.suggestions &&
                      props.suggestions.map((suggestion) => (
                        <MenuItem
                          onClick={() => props.handleItemClick(suggestion)}
                          key={suggestion}
                        >
                          <ListItemText>{suggestion}</ListItemText>
                        </MenuItem>
                      ))}
                  </MenuList>
                )}
              </div>
              {props.selectedCountry && (
                <div className={classes.outputBox}>
                  {JSON.stringify(props.selectedCountry)}
                </div>
              )}
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
