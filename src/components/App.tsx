import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#222831] font-sans text-white">
        <BackgroundHeading />
        {/* w-[972px]  [436px] */}
        <main className="grid h-[436px] w-3/4 grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden rounded-[8px] bg-[#31363F] shadow-[0_4px_4px_rgba(0,0,0,0.08)]">
          <Header />
          <TodoList />
          <SideBar />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
