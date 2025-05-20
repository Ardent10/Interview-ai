import Navbar from "../../../common/layout/Navbar";
import NewJobForm from "../components/NewJobForm";
import Sidebar from "../../../common/layout/Sidebar";

export default function RecruiterDashboard() {
  return (
    <div className="p-8 min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 px-6 py-10 flex justify-center ">
          <NewJobForm />
        </main>
      </div>
    </div>
  );
}
