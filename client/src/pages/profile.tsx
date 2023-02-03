import FooterNavbar from "~/components/atoms/FooterNavbar";

const Profile = () => {
  return (
    <>
      <main className="text-center flex justify-center items-center font-bold text-5xl text-white min-h-screen h-full">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-btn-2">Profile Page</h1>
        </div>
      </main>
      <FooterNavbar />
    </>
  );
};

export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Profile;
