import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <div className="prose grid grid-cols-3 grid-rows-2 gap-2">
        <div id="schedule" className="col-span-2 row-span-2">
          <h1>This is the schedule</h1>
        </div>
        <div id="videoLive" className="">
          <div className="w-64 h-40 bg-orange-600">Box</div>
        </div>
        <div id="videoSettings" className="">
          Settings
        </div>
      </div>
    </>
  );
};

export default Index;
