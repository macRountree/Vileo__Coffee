//*Este layout tendra el acceso a la app

import {Outlet} from 'react-router-dom' ;  //*Si empieza con mayuzculas es un componente .. si empieza con 'use' es un hooks
import Modal from 'react-modal';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
import ModalProducto from '../components/ModalProducto';
import useQuiosco from '../hooks/useQuiosco';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')


export default function layout() {
  const {modal, handleClickModal} = useQuiosco();
  return (
    <>
      <div className='md:flex'>
        <Sidebar/>

          <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet/>

          </main>

          <Resumen/>
      </div>
            {/* */}
      {
        modal && (
          <Modal isOpen={modal} style={customStyles}>
            <ModalProducto/>
          </Modal>
        )
      }
    </>

  )
}
