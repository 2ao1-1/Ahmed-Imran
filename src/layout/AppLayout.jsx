import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import { Footer } from './Footer';

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className="text-primary grid cursor-default grid-rows-[auto_1fr_auto] bg-white">
      {isLoading && <Loader />}
      {/* <div className="overflow-scroll"> */}
      <div className="container mx-auto">
        {/* header */}
        <Header />

        {/* main content */}
        <Outlet />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
