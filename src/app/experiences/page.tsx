import FlyonTimeline from "@/components/FlyonTimeline";

export default function Experiences() {
  return (
    <div className="min-h-screen flex-col items-center justify-center">
      <div>
        <h2 className="text-center">Experiences</h2>
      </div>
      <div className="flex justify-center items-center w-lvw md:px-20">
        <FlyonTimeline />
      </div>
    </div>
  );
}
