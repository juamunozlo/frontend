import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';
export default function Location() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div style={{ marginTop: "50px", paddingLeft: isSmallScreen ? "16px" : "70px", borderRadius: "10%", paddingRight: isSmallScreen ? "16px" : "70px", paddingBottom: isSmallScreen ? "16px" : "70px", backgroundColor: "#E3C7B1", marginBottom: "50px" }}>
            <Card sx={{
                boxShadow: "0"
            }}>
                <div style={{ backgroundColor: "#E3C7B1" }}>
                    <CardContent>
                        <Typography fontWeight={"bold"} variant="h3" align="left">¿Donde estamos ubicados?</Typography>
                        <Typography align="left">Fondo de bikini, Ocenao Pacifico</Typography>
                    </CardContent>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500359.65269393293!2d165.0154321287808!3d11.547569057460512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sAtol%C3%B3n%20Bikini!5e0!3m2!1ses-419!2sco!4v1697248865356!5m2!1ses-419!2sco" width={isSmallScreen ? "100%" : "600"} height={isSmallScreen ? "300" : "450"} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Card>
        </div>
    );
}