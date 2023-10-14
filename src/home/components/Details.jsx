import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import Button from "@mui/material/Button";
import { addProduct } from "../../store/cart/thunks";
import { useDispatch } from "react-redux";

export default function Details() {

    const dispatch = useDispatch();

    const product = {
        name: 'La Cangreburguer Suprema',
        description: 'Una hamburguesa servida en un pan suave y dorado, con lechuga crujiente, tomate maduro y una deliciosa salsa secreta de la casa. Acompañada de papas fritas crujientes',
        price: 22500,
        image: 'src/assets/cangre.png',
    };

    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', maxWidth: '100%' }}>
                <div style={{ flex: '1', margin: '16px' }}>

                    <Card sx={{
                        boxShadow: "0",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: '24px',
                        backgroundColor: "#E3C7B1",
                        borderRadius: '16px',
                        px: isSmallScreen ? '16px' : '32px',
                    }}>
                        <div style={{ backgroundColor: "#E3C7B1", maxWidth: isSmallScreen ? '100%' : '550px', width: '100%' }}>
                            <CardContent>
                                <Typography fontWeight={"bold"} variant="h3" align="left" className="title" color="#ed716d">La Cangreburguer Suprema</Typography>
                                <Typography fontWeight={"bold"} variant="h6" align="left" className="title" color="black" sx={{ pt: '16px' }}>Una hamburguesa servida en un pan suave y dorado, con lechuga crujiente, tomate maduro y una deliciosa salsa secreta de la casa. Acompañada de papas fritas crujientes</Typography>
                                <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', pt: '16px' }}>
                                    <Typography fontWeight={"bold"} variant="h3" align="left" className="title" color="#ed716d" sx={{ pt: '16px' }}>$22.500</Typography>
                                    <div style={{ marginLeft: isSmallScreen ? '0' : '80px', pt: isSmallScreen ? '16px' : '0' }}>
                                        <Typography fontWeight={"bold"} variant="h6" align="left" className="title" color="black" sx={{ pt: '16px' }}>$25.000</Typography>
                                        <Typography fontWeight={"bold"} variant="h6" align="left" className="title" color="#ed716d" sx={{ pt: '16px' }}>Disfruta  -10% de descuento</Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
                <div style={{ flex: '1', margin: '16px' }}>
                    <Card sx={{
                        boxShadow: "0",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: '24px',
                        borderRadius: '16px',
                        backgroundColor: "#E3C7B1",
                        px: isSmallScreen ? '16px' : '32px',
                    }}>
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={('src/assets/cangre.png')} alt="Imagen de la Cangreburguer Suprema" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                            <Button size="small" onClick={() => dispatch(addProduct(product))}>
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}