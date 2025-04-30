import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <TopHeader />
        </div>
        <main className="d-flex flex-grow p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
