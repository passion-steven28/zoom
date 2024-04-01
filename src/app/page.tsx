import ChatComp from "@/components/ChatComp";
import VideoComp from "@/components/VideoComp";
import VideoCompFooter from "@/components/VideoCompFooter";
import VideoCompNav from "@/components/VideoCompNav";

// Home page with a video component

export default function Home() {
  return (
    <main className="grid grid-cols-12 grid-rows-12 gap-4 justify-items-center items-start h-screen py-4">
      <div className="col-start-2 col-end-8 w-full h-fit">
        <VideoCompNav />
      </div>
      <div className="col-start-2 col-end-8 row-start-2 row-end-12 w-full h-full">
        <VideoComp />
      </div>
      <div className="col-start-2 col-end-8 w-full h-fit">
        <VideoCompFooter />
      </div>
      <div className="col-start-8 col-end-12 row-start-1 row-end-13 w-full h-full">
        <ChatComp />
      </div>
    </main>
  );
}
