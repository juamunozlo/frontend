import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Notification() {
    return (
        <div style={{borderRadius: "50%"}}>
            <Card sx={{
                boxShadow: "0",
                marginBottom: "20px"
            }}>
                <div style={{backgroundColor:"#F5EDDC"}}>
                <Typography gutterBottom variant="h5" component="div">
                    Contenido notificacion
                </Typography>
                <Typography gutterBottom variant="h9" component="div" textAlign={"right"}>
                    Tiempo
                </Typography>
                </div>
            </Card>
        </div>
    );
}