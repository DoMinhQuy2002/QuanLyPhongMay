import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/loginPage';
import RoomPage from './component/roomPage';
import AddRoom from './component/roomPage/addRoom';
import EditRoom from './component/roomPage/editRoom';
import DeleteRoom from './component/roomPage/deleteRoom';
import AddAssignment from './component/assignmentPage/addAssignment';
import EditAssignment from './component/assignmentPage/editAssignment';
import DeleteAssignment from './component/assignmentPage/deleteAssignment';
import AddDevice from './component/devicePage/addDevice';
import EditDevice from './component/devicePage/editDevice';
import DeleteDevie from './component/devicePage/deleteDevice';
import AddDeviceComponent from './component/deviceComponentPage/addComponentDevice';
import EditDeviceComponent from './component/deviceComponentPage/editComponentDevice';
import DeleteDevieComponent from './component/deviceComponentPage/deleteComponentDevice';
import MasterPage from './component/masterPage';
import DevicePage from './component/devicePage';
import DeviceComponentPage from './component/deviceComponent';
import AssignmentPage from './component/assignmentPage';

function App() {

  return (
    <>
      <Routes>
      <Route path='/masterpage' element={<MasterPage></MasterPage>} />
        <Route path='/' element={<LoginPage></LoginPage>} />
        <Route path='/roompage' element={<RoomPage></RoomPage>} />
        <Route path='/devicepage' element={<DevicePage></DevicePage>} />
        <Route path='/deviceComponentpage' element={<DeviceComponentPage></DeviceComponentPage>} />
        <Route path='/assignmentpage' element={<AssignmentPage></AssignmentPage>} />
        <Route path='/addroom' element={<AddRoom></AddRoom>} />
        <Route path='/editroom' element={<EditRoom></EditRoom>} />
        <Route path='/deleteroom' element={<DeleteRoom></DeleteRoom>} />
        <Route path='/addassignment' element={<AddAssignment></AddAssignment>} />
        <Route path='/editassignment' element={<EditAssignment></EditAssignment>} />
        <Route path='/deleteassignment' element={<DeleteAssignment></DeleteAssignment>} />
        <Route path='/adddevice' element={<AddDevice></AddDevice>} />
        <Route path='/editdevice' element={<EditDevice></EditDevice>} />
        <Route path='/deletedevice' element={<DeleteDevie></DeleteDevie>} />
        <Route path='/adddevicecomponent' element={<AddDeviceComponent></AddDeviceComponent>} />
        <Route path='/editdevicecomponent' element={<EditDeviceComponent></EditDeviceComponent>} />
        <Route path='/deletedevicecomponent' element={<DeleteDevieComponent></DeleteDevieComponent>} />
      </Routes>
    </>
  );
}

export default App;
