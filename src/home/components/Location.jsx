import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import GoogleMaps from "simple-react-google-maps";

export default function Location() {
    return (
        <div style={{marginTop: "50px", paddingLeft: "70px", borderRadius: "10%",
        paddingRight: "70px", paddingBottom: "70px", backgroundColor:"#E3C7B1",
        marginBottom: "50px"}}>
            <Card sx={{
                boxShadow: "0"
            }}>
                <div style={{backgroundColor:"#E3C7B1"}}>
                    <CardContent>
                        <Typography fontWeight={"bold"} variant="h3" align="left">¿Donde estamos ubicados?</Typography>
                        <Typography align = "left">Fondo de bikini, Ocenao Pacifico</Typography>
                    </CardContent>
                </div>
                <GoogleMaps
                    apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
                    style={{ height: "400px", width: "500px" }}
                    zoom={12}
                    center={{
                        lat:11.606680364492856, lng: 165.37717861779691
                    }}
                    markers={[
                        {lat:11.606680364492856, lng: 165.37717861779691}
                    ]}
                />
            </Card>
        </div>
    );
}