import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetUser from './../useEffects/getUser';
import UnControlled from './../useRef/unControlled';
import ButtonClicker from './../useState/buttonClicker';
import ButtonClickerReducer from './../useReducer/buttonClickerReducer';
import CompA from './../useContext/CompA';
import MemoizeValue from './../useMemo/memoizeValue';
import UseCallbackExample from './../useCallback/useCallbackExample';
import MobxExample from '../stateManagement/MobxExample';
import { TodoStore } from '../stateManagement/TodoStore';
import ImagesGallery from '../pictureGallery/ImagesGallery';
import { ImagesStore } from '../pictureGallery/ImagesStore';
import AgGridExample from '../ag-grid/AgGridExample';
import ControlledForms from '../forms/controlledforms/ControlledForms';
import Board from '../kanban/Board';
import CrudApp from '../redux/crud/CrudApp';

const AppRouter = () => {
  return <>
    <Routes>
      {/* <Route path="/" element={<AppLayout />}></Route> */}
      <Route index element={<ButtonClicker />} />
      <Route path="/usestate" element={<ButtonClicker />}></Route>
      <Route path="/useeffets" element={<GetUser />}></Route>
      <Route path="/usecontext" element={<CompA />}></Route>
      <Route path="/useref" element={<UnControlled />}></Route>
      <Route path="/usereducer" element={<ButtonClickerReducer />}></Route>
      <Route path="/usememo" element={<MemoizeValue />}></Route>
      <Route path="/usecallback" element={<UseCallbackExample />}></Route>
      <Route path="/mobx" element={<MobxExample todoStore={TodoStore}/>}></Route>
      <Route path="/mobxImages" element={<ImagesGallery imagesStore={ImagesStore}/>}></Route>
      <Route path="/aggrid-example" element={<AgGridExample />}></Route>
      <Route path="/controlledforms" element={<ControlledForms />}> </Route>
      <Route path="/kanbanboard" element={<Board />}> </Route>
      <Route path="/reduxcrud" element={<CrudApp />}> </Route>
    </Routes> 
  </>;
};

export default AppRouter;
