export const styles = (theme: any) => ({
  PageNotFoundTitle: {
    position: "absolute",
    top: "50px",
    left: "50px",
    height: "48px",
    margin: "0 79px 16px 0",
    fontSize: "32px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    color: theme.palette.primary.main,
  },
  PageNotFoundSubTitle: {
    position: "absolute",
    top: "100px",
    left: "50px",
    height: "40px",
    margin: "16px 0 0",
    width: "321px",
    backgroundColor: "var(--brownish-grey)",
    fontSize: "20px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.25",
    letterSpacing: "-0.25px",
    color: "var(--brownish-grey)",
  },
  Wrapper: {
    position: "relative",
    height: "100%",
  },
  LittleOval: {
    position: "absolute",
    top: "200px",
    left: "45.5%",
    width: "70px",
    height: "70px",
    backgroundColor: theme.palette.primary.light,
    opacity: 0.2,
    borderRadius: "100px",
    zIndex: 1,
  },
  BigOval: {
    width: "120px",
    height: "120px",
    backgroundColor: theme.palette.primary.light,
    opacity: 0.2,
    borderRadius: "100px",
    position: "absolute",
    top: "100px",
    left: "65.1%",
    zIndex: 1,
  },
  Code: {
    textStroke: `2px ${theme.palette.primary.main}`,
    position: "absolute",
    top: "20%",
    left: "50.1%",
    fontSize: "150px",
    fontWeight: "bold",
    color: "transparent",
    zIndex: 1000,
  },
});
