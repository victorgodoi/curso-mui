import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const theme = useTheme();

  return(
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{height: theme.spacing(12), width: theme.spacing(12)}}
              // src="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-computador-de-tecnologia_23-2149204144.jpg?w=360"
              src="https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-computador-de-tecnologia_23-2149199401.jpg" 
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}