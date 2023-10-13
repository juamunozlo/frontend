import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Notification() {
    return (
        <div style={{backgroundColor: "red"}}>
            <Card sx={{
                boxShadow: "0"
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    AAA
                </Typography>
            </Card>
        </div>
    );
}