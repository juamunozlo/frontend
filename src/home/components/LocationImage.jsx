import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import { useMediaQuery } from '@mui/material';

export default function LocationImage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div style={{ marginTop: "50px", marginLeft: isSmallScreen ? "0" : "20px" }}>
        <Card sx={{
          backgroundColor: "transparent",
          boxShadow: "0"
        }}>
          <div style={{ margin: "auto", height: isSmallScreen ? "100px" : "200px", width: isSmallScreen ? "70px" : "140px" }}>
            <CardMedia
              justify="center"
              component="img"
              image = "src/assets/LocationOn.png"
            />
          </div>
          <CardMedia
            component="img"
            image = "src/assets/Krusty.png"
            height={isSmallScreen ? "188" : "375"}
            width={isSmallScreen ? "175" : "350"}
          />
        </Card>
      </div>
    );
}