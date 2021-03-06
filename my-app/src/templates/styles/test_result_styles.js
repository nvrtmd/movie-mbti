import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },

  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  resultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  resultDescriptionGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  buttonGrid: {
    gridColumn: "4/ span 6",
    gridRow: "span 1",
  },

  imageGrid: {
    gridColumn: "span 12",
    gridRow: "2/span 9",
  },

  characterImage: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: "15px",
  },

  characterTitleGrid: {
    gridColumn: "span 12",
    gridRow: "11/ span 2",
  },

  characterTitle: {
    align: "center",
    marginTop: 15,
    fontSize: "1.5vw",
    // fontSize: "22px",
    whiteSpace: "pre-wrap",
    fontWeight: "bold",
  },

  charScriptText: {
    fontSize: "1vw",
    letterSpacing: "1px",
    whiteSpace: "pre-wrap",
  },

  characterScript: {
    gridColumn: "2/span 10",
    gridRow: "3/span 2",
  },

  characterDetail: {
    gridColumn: "span 12",
    gridRow: "5/ span 8",
    padding: "10px",
  },

  characterDetailText: {
    fontSize: "1vw",
  },

  analysisBtn: {
    minWidth: "100%",

    color: "#dc1a28",
    border: "2px solid #dc1a28",
    "&.MuiButton-root:hover": {
      color: "lightgrey",
      border: "2px solid white",
    },
  },

  analysisText: {
    fontFamily: "Apple SD Gothic Neo",

  },

  //Mobile View

  mobileResultMainGrid: {
    color: "white",
  },

  mobileCharacterTitle: {
    textAlign: "left",
    marginLeft: 15,
    margin: 10,
    color: "white",
    fontSize: "6vw",
    fontWeight: "bold",
    whiteSpace: "pre-wrap",
    letterSpacing: "1px",
  },

  mobileCharacterMbtiBox:{
    marginLeft: 15,
    lineHeight: "25px",
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
    width: "55px",
    height: "25px",
    border: "2px solid white",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "17px",
  },



  mobileResultDescription: {
    color: "white",
    maxHeight: 100,

  },

  mobileImageBox: {
    margin: 15,
    textAlign: "center",
    alignItems: "center",
  },

  mobileButtonBox: {
    textAlign: "center",
    marginTop : "40px",
  },


  mobilecharacterImage: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: "15px",
  },

  mobileCharacterDetailText: {
    color: "white",
    margin: 15,
    marginBottom: 40,
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "30px",

  },

  mobileCharScriptText: {
    margin: 40,
    color: "white",
    fontSize: "20px",
    letterSpacing: "1px",

  },

  analysisBtnMobile: {
    width: "70%",
    margin: "5px",
    color: "white",
    border: "2px solid white",

    borderRadius: "20px",
    "&.MuiButton-root:hover": {
      color: "lightgrey",
      border: "2px solid white",
    },
  },

  span2: {
    textAlign: "right",
  },
  span1: {
    textAlign: "left",
  },

  //Tablet View
  tabletResultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 4",
    color: "white",
  },

  tabletImageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 6",
  },
  tabletCharacterTitleGrid: {
    gridColumn: "span 12",
    gridRow: "9/ span 2",
  },

  tabletCharacterTitle: {
    align: "center",
    marginTop: 15,

    fontSize: "17px",
    whiteSpace: "pre-wrap",
    letterSpacing: "1px",
  },

  tabletCharacterDetailText: {
    fontSize: "14px",
    letterSpacing: "1px",
  },

  tabletCharScriptText: {
    fontSize: "14px",
    letterSpacing: "1px",
  },

  tabletCharacterScript: {
    gridColumn: "2/span 10",
    gridRow: "span 2",
  },

  tabletCharacterDetail: {
    gridColumn: "span 12",
    gridRow: "4/span 8",
  },

  tabletButtonGrid: {
    gridColumn: "2/ span 10",
    gridRow: "span 1",
  },
  //PcWide View

  pcWideimageGrid: {
    gridColumn: "3/span 8",
    gridRow: "2/span 8",
  },
}));

export { useStyles };
