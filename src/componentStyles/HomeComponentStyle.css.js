const parentContainer = {
    position: "relative",
    height: "100vh",
}

const upperContainer = {
    width: "100%",
    height: "100%",
    textAlign: "center"
}

const lowerContainer = {
    width: "100%",
    height: "50%",
}

const image = {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "0.35",
    zIndex: "-1"
}

const h1 = {
    margin: "auto",
    paddingTop: "10vh",
    paddingBottom: "5vh",
    width: "100vw",
    fontSize: "8vh",
    fontFamily: "Verdana",
    color: "#000000"
}

const h2 = {
    margin: "auto",
    fontSize: "3.5vh",
    fontFamily: "Verdana"
}

const inputGroup = {
    position: "fixed",
    left: "50%",
    transform: "translate(-50%)",
    marginTop: "100px"
}

export default {parentContainer, upperContainer, lowerContainer, image, h1, h2, inputGroup}