import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Notification() {
    return (
        <div style={{}}>
            <Card sx={{
                boxShadow: "0",
                marginBottom: "20px",
                borderRadius: "25px",
                paddingRight:"30px",
                backgroundColor:"#F5EDDC"
            }}>
                <div style={{backgroundColor:"#F5EDDC"}}>
                <Typography gutterBottom variant="h7" component="div">
                    Contenido notificacion
                </Typography>
                <Typography gutterBottom variant="h10" component="div" textAlign={"right"}>
                    Tiempo
                </Typography>
                </div>
            </Card>
        </div>
    );
}