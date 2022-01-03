import React from "react";
import {Card, Typography} from "@mui/material";
import "./default.css"

class App extends React.Component {
    render() {
        return (<div className={"center"}>
            <Card className={"centerCard"}>
                <div className={"centerContent"}>
                    <Typography>MUI Template by <a href={"https://github.com/itqw"}>@itqw</a></Typography>
                </div>
            </Card>
        </div>);
    }
}

export default App;