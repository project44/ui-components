import { Row, Col, message, Alert } from 'antd';

import AutoComplete from './components/Autocomplete/Autocomplete';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Chips from './components/Chips/Chips';
import DatePicker from './components/DatePicker/DatePicker';
import Dropdown from './components/Dropdown/Dropdown';
import Input from './components/Input/Input';
import TextArea from './components/TextArea/TextArea';
import MultiSelect from './components/MultiSelect/MultiSelect';
import Select from './components/Select/Select';
import ShipmentModeIcon from './components/ShipmentModeIcon/ShipmentModeIcon';
import SubHeader from './components/SubHeader/SubHeader';
import Radio from './components/Radio/Radio';
import DateRange from './components/DateRange/DateRange';
import StickyNav from './components/StickyNav/StickyNav';
import Popover from './components/Popover/Popover';
import ColorPicker from './components/ColorPicker/ColorPicker';
import {
  Layers,
  Settings,
  Checkmark,
  Close,
  Info,
  ChevronDown,
  Copy,
  Link,
  ChevronRight,
  DocumentIcon,
} from './components/Icons';
import colors from './styles/colors';
import MultiInput from './components/MultiInput/MultiInput';
import { ThemeProvider } from './styles/theme';

// Ant Design Styles
import './styles/ant/ant.less';
// Our global styles
import './styles/init.scss';

// export Components as named exports
export {
  AutoComplete,
  Button,
  Checkbox,
  Chips,
  DatePicker,
  Dropdown,
  Input,
  TextArea,
  MultiSelect,
  Select,
  ShipmentModeIcon,
  SubHeader,
  Radio,
  DateRange,
  StickyNav,
  Popover,
  ColorPicker,
  Layers,
  Settings,
  Checkmark,
  Close,
  ChevronDown,
  Link,
  Info,
  Copy,
  Row,
  Col,
  message,
  Alert,
  colors,
  MultiInput,
  ThemeProvider,
  ChevronRight,
  DocumentIcon,
};
