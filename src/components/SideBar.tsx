import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

function SideBar() {
  const { login, register, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();

  return (
    <section className="col-[2/3] row-[2/3] flex flex-col border-l border-white/[0.08] bg-[#76ABAE] px-[25px] pb-[28px] pt-[18px]">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>
            <Button onClick={logout} buttonType="secondary">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
export default SideBar;
// 4:45:46
