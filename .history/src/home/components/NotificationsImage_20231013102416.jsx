import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function LocationImage() {
    return (
        <div style={{marginTop: "50px", marginLeft: "20px"}}>
            <Card sx={{
                backgroundColor: "transparent",
                boxShadow: "0"
            }}>
                <CardMedia
                    component = "img"
                    image = "src/assets/News.jpg"
                    height = "375"
                    width= "350"
                />
            </Card>
        </div>
    );
}