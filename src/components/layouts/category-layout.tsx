"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useParams, usePathname } from "next/navigation";
import { categoryMenu } from "@/data/it-menu";
import Link from "next/link";
import { Collapse, Divider, Typography } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import RightHeader from "../right-header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AppLogo from "../logo";
import { groupBy } from "@/utils/utils";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
}

export default function CategoryLayout(props: Props) {
  const pathname = usePathname(); // Get the current pathname
  const params = useParams();
  const splitPath = pathname.split("/");
  const validParams = Object.keys(params).length > 0 ? 2 : 1;
  const category = splitPath[splitPath.length - validParams];
  const menuItems = categoryMenu[`${category}`];
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const MenuDrawer = () => {
    const [state, setState] = React.useState<string[]>(["Frontend"]);
    const menuData = groupBy(menuItems, "techStack");
    console.log("menuData", menuItems)

    const onClickParentMenu = (parentMenu: string) => {
      setState((prevState) => {
        if (prevState.includes(parentMenu)) {
          return prevState.filter((item) => item !== parentMenu);
        }

        return [...prevState, parentMenu];
      });
    };

    return (
      <div>
        <Toolbar>
          <Link
            href="/categories"
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <KeyboardBackspaceIcon />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Back
            </Typography>
          </Link>
        </Toolbar>
        <Divider />
        <List component="nav">
          {Object.entries(menuData).map(([pMenu, value]) => {
            const isOpen = state.includes(pMenu);
            return (
              <React.Fragment key={pMenu}>
                <ListItemButton onClick={() => onClickParentMenu(pMenu)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={pMenu} />
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {value?.map((item) => {
                      return (
                        <Link href={item.url} key={item.id}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          })}
        </List>
      </div>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <AppLogo />
          <RightHeader />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <MenuDrawer />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <MenuDrawer />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
