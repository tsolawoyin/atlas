import Battery20Icon from '@mui/icons-material/Battery20'; // For 20%
import Battery30Icon from '@mui/icons-material/Battery30';
import Battery50Icon from '@mui/icons-material/Battery50';
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery80Icon from '@mui/icons-material/Battery80';
import Battery90Icon from '@mui/icons-material/Battery90';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

function Bar({score, streak}) {
    if (streak > 0) { // user is currently charging up
        if (score >= 400) {
            return <BatteryChargingFullIcon />
        } else if (score >= 360) {
            return <BatteryCharging90Icon />
        } else if (score >= 320) {
            return <BatteryCharging80Icon />
        } else if (score >= 240) {
            return <BatteryCharging60Icon />
        } else if (score >= 200) {
            return <BatteryCharging50Icon />
        } else if (score >= 120) {
            return <BatteryCharging30Icon /> 
        } else {
            return <BatteryCharging20Icon />
        }
    } else { // user is not charging anything...
        if (score >= 400) {
            return <BatteryFullIcon />
        } else if (score >= 360) {
            return <Battery90Icon />
        } else if (score >= 320) {
            return <Battery80Icon />
        } else if (score >= 240) {
            return <Battery60Icon />
        } else if (score >= 200) {
            return <Battery50Icon /> 
        } else if (score >= 120) {
            return <Battery30Icon />
        } else {
            return <Battery20Icon />
        }
    }
}

export default Bar; // nice and easy....
// React is the best library in my opinion