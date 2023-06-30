
import { Home, Newspaper } from "@mui/icons-material"
import { AppBar, Button, Toolbar, Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

export const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
            <Typography variant="h5" sx={{display:{xs:"none", sm:"block"}}}>Jay's NC News</Typography>
            <Newspaper sx={{display:{xs:"block", sm:"none"}}}/>
            
            <Button
            component={Link}
            to='/'
            endIcon={<Home/>}
            size='medium'
            variant="contained"
            color='secondary'
             >Home</Button>

            <Button component={Link}
            to='/articles'
            endIcon={<Newspaper/>}
            size='medium'
            variant="contained"
            color='secondary'
            sx={{margin: 0.5}}
             >Articles</Button>
            </StyledToolbar>
        </AppBar>
    )
}