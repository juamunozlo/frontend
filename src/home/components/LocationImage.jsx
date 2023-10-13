import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function LocationImage() {
    return (
        <div style={{marginTop: "50px", marginLeft: "20px"}}>
            <Card sx={{
                backgroundColor: "transparent",
                boxShadow: "0"
            }}>
                <div style={{margin:"auto", height: "200px", width:"140px"}}>
                    <CardMedia
                        justify = "center"
                        component = "img"
                        image = "src/assets/LocationOn.png"
                    />
                </div>
                <CardMedia
                    component = "img"
                    image = "src/assets/Krusty.png"
                    height = "375"
                    width= "350"
                />
            </Card>
        </div>
    );
}