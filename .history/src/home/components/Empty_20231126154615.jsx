import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Empty() {
    return (
        <div style={{marginTop: "50px", paddingLeft: "70px", borderRadius: "10%",
        paddingRight: "70px", paddingBottom: "70px", backgroundColor:"#E3C7B1",
        marginBottom: "50px"}}>
            <Card sx={{
                backgroundColor:"#E3C7B1",
                boxShadow: "0"
            }}>
                <div style={{backgroundColor:"#E3C7B1"}}>
                    <CardContent>
                        <Typography fontFamily={'SpongeBob Font Condensed'} variant="h4" align="left">Notificaciones</Typography>
                    </CardContent>
                    
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                </div>
            </Card>
        </div>
    );
}