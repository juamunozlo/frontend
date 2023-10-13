import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Notification() {
    return (
        <div style={{}}>
            <Card sx={{
                boxShadow: "0"
            }}>
                <div style={{backgroundColor:"#F5EDDC"}}>
                <Typography gutterBottom variant="h5" component="div">
                    Contenido notificacion
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Tiempo
                </Typography>
                </div>
            </Card>
        </div>
    );
}