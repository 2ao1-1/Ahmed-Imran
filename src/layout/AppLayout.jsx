import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import { Footer } from './Footer';

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen cursor-default grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* <div className="overflow-scroll"> */}
      <div className="">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
