import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Empty() {
    return (
        <div style={{marginTop: "200px", paddingLeft: "70px", marginLeft: "200px",
        paddingRight: "70px", paddingBottom: "70px", backgroundColor:"#E3C7B1",
        marginBottom: "50px"}}>
            <Card sx={{
                backgroundColor:"#E3C7B1",
                boxShadow: "0"
            }}>
                <div style={{backgroundColor:"#E3C7B1"}}>
                    <CardContent>
                        <Typography fontFamily={'SpongeBob Font Condensed'} variant="h4" align="left">No hay nada que mostrar</Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}