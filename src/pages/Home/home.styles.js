import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    mt: 1,
    marginTop: 0,
    paddingBottom: 40,
    width: "100%",
  },
  menuWrapper: {
    position: "relative",
  },
  menu: {
    background: "white",
    boxShadow: "0 1px 1px 1px #e1e1e1",
    zIndex: 99999,
    position: "absolute !important",
    width: "100%",
    maxHeight: 300,
    overflow: "auto",
  },
  outputBox: {
    paddingTop: 10,
    paddingBottom: 10,
    background: "#f8f8f8",
    width: "100%",
  },
});
