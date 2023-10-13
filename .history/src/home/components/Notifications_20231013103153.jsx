import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Notifications() {
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
            </Card>
        </div>
    );
}