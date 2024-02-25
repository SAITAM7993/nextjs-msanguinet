// esto es una pag dentro del slot @login
import LoginForm from '@/app/components/auth/LoginForm';
export const metadata = {
  title: 'EIPI - Login',
  description: 'página de login',
};
const LoginPage = () => {
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
