import { Row, Col, message, Alert } from 'antd';

import AutoComplete from './components/Autocomplete/Autocomplete';
import Button from './components/Button/Button';
import Card from './components/Card/Card.jsx';
import Checkbox from './components/Checkbox/Checkbox';
import Chips from './components/Chips/Chips';
import ColorPicker from './components/ColorPicker/ColorPicker';
import DatePicker from './components/DatePicker/DatePicker';
import DateRange from './components/DateRange/DateRange';
import Dropdown from './components/Dropdown/Dropdown';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal.jsx';
import MultiSelect from './components/MultiSelect/MultiSelect';
import Popover from './components/Popover/Popover';
import Radio from './components/Radio/Radio';
import Select from './components/Select/Select';
import ShipmentModeIcon from './components/ShipmentModeIcon/ShipmentModeIcon';
import StickyNav from './components/StickyNav/StickyNav';
import SubHeader from './components/SubHeader/SubHeader';
import TextArea from './components/TextArea/TextArea';
import {
  BookIcon,
  Checkmark,
  ChevronDown,
  ChevronRight,
  Close,
  Copy,
  DocumentIcon,
  Info,
  Layers,
  Link,
  NoteIcon,
  Settings,
} from './components/Icons';
import colors from './styles/colors';
import MultiInput from './components/MultiInput/MultiInput';
import Drawer from './components/Drawer/Drawer';
import { ThemeProvider } from './styles/theme';

// Ant Design Styles
import './styles/ant/ant.less';
// Our global styles
import './styles/init.scss';

// export Components as named exports
export {
  Alert,
  AutoComplete,
  BookIcon,
  Button,
  Card,
  Checkbox,
  Checkmark,
  ChevronDown,
  ChevronRight,
  Chips,
  Close,
  Col,
  ColorPicker,
  colors,
  Copy,
  DatePicker,
  DateRange,
  DocumentIcon,
  Drawer,
  Dropdown,
  Info,
  Input,
  Layers,
  Link,
  message,
  Modal,
  MultiInput,
  MultiSelect,
  NoteIcon,
  Popover,
  Radio,
  Row,
  Select,
  Settings,
  ShipmentModeIcon,
  StickyNav,
  SubHeader,
  TextArea,
  ThemeProvider,
};
