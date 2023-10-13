export default function Notifications() {
    return (
        <div style={{marginTop: "50px", paddingLeft: "70px", borderRadius: "10%",
        paddingRight: "70px", paddingBottom: "70px", backgroundColor:"#E3C7B1",
        marginBottom: "50px"}}>
            <Card sx={{
                boxShadow: "0"
            }}>
                <div style={{backgroundColor:"#E3C7B1"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {notification.description}
                </Typography>
                </div>
            </Card>
        </div>
    );
}