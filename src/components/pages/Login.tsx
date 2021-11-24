// import { auth } from '../../.firebase/firebase';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';

// const Login = () => {
//   const history = useHistory();

//   // const handleSubmit = (event: {
//   //   preventDefault: () => void;
//   //   target: { elements: { email: any; password: any } };
//   // }) => {
//   //   console.log('ログインボタン押された');
//   //   event.preventDefault();
//   //   const { email, password } = event.target.elements;
//   //   auth.signInWithEmailAndPassword(email.value, password.value);
//   //   history.push('/home');
//   // };

//   return (
//     <div>
//       <h1>ログイン</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>メールアドレス</label>
//           <input name="email" type="email" placeholder="email" />
//         </div>
//         <div>
//           <label>パスワード</label>
//           <input name="password" type="password" placeholder="password" />
//         </div>
//         <div>
//           <button>ログイン</button>
//         </div>
//         <div>
//           ユーザ登録は<Link to={'/signup'}>こちら</Link>から
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

export const Login = () => {
  const handleSubmit = () => {
    console.log('クリックされました');
  };
  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};
