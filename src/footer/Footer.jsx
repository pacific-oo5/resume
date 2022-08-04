import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='footer'>
    <BottomNavigation sx={{ width: 1250, backgroundColor: 'rgb(255, 232, 236)'}} value={value} onChange={handleChange}>
      <NavLink to="/inst">
      <BottomNavigationAction 
      
        label="instagram"
        value="instagram"
        icon={<InstagramIcon />}
      />
      </NavLink >
      <NavLink to="/facebook">
      <BottomNavigationAction
        label="Facebook"
        value="Facebook"
        icon={<FacebookIcon />}
      />
      </NavLink>
      <NavLink to ="/git">
      <BottomNavigationAction
        label="Git hub"
        value="git hub"
        icon={<GitHubIcon />}
      />
      </NavLink>
     
    </BottomNavigation>
    </div>
  );
}
