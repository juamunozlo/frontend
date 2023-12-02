import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { addProduct } from "../../store/cart/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Details() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const details = products.find((product) => product.id === parseInt(id));
  const precioAntes = details.price + details.price * 0.1;
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  const product = {
    name: "La Cangreburguer Suprema",
    description:
      "Una hamburguesa servida en un pan suave y dorado, con lechuga crujiente, tomate maduro y una deliciosa salsa secreta de la casa. Acompañada de papas fritas crujientes",
    price: 22500,
    image: "src/assets/cangre.png",
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "100%",
        }}
      >
        <div style={{ flex: "1", margin: "16px" }}>
          <Card
            sx={{
              boxShadow: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              py: "24px",
              backgroundColor: "#E3C7B1",
              borderRadius: "16px",
              px: isSmallScreen ? "16px" : "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "#E3C7B1",
                maxWidth: isSmallScreen ? "100%" : "550px",
                width: "100%",
              }}
            >
              <CardContent>
                <Typography
                  fontWeight={"bold"}
                  variant="h3"
                  align="left"
                  className="title"
                  color="#ed716d"
                >
                  {details.name}
                </Typography>
                <Typography
                  fontWeight={"bold"}
                  variant="h6"
                  align="left"
                  className="title"
                  color="black"
                  sx={{ pt: "16px" }}
                >
                  {details.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    pt: "16px",
                  }}
                >
                  <Typography
                    fontWeight={"bold"}
                    variant="h3"
                    align="left"
                    className="title"
                    color="#ed716d"
                    sx={{ pt: "16px" }}
                  >
                    {formatterPeso.format(details.price)}
                  </Typography>
                  <div
                    style={{
                      marginLeft: isSmallScreen ? "0" : "80px",
                      pt: isSmallScreen ? "16px" : "0",
                    }}
                  >
                    <Typography
                      fontWeight={"bold"}
                      variant="h6"
                      align="left"
                      className="title"
                      color="black"
                      sx={{ pt: "16px" }}
                    >
                      {" "}
                      Antes: {formatterPeso.format(precioAntes)}
                    </Typography>
                    <Typography
                      fontWeight={"bold"}
                      variant="h6"
                      align="left"
                      className="title"
                      color="#ed716d"
                      sx={{ pt: "16px" }}
                    >
                      Disfruta -10% de descuento
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div style={{ flex: "1", margin: "16px" }}>
          <Card
            sx={{
              boxShadow: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              py: "24px",
              borderRadius: "16px",
              backgroundColor: "#E3C7B1",
              px: isSmallScreen ? "16px" : "32px",
            }}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={details.image.url}
                  alt="Imagen de la Cangreburguer Suprema"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <Button
                size="small"
                onClick={() => dispatch(addProduct(details))}
              >
                Add to cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
