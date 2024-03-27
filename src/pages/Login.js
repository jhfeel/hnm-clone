import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-container">
        <h5>로그인</h5>
        <input className="id-input" type="text" placeholder="아이디" />
        <input className="pw-input" type="password" placeholder="패스워드" />
        <div className="auto-login-container">
          <input type="checkbox" id="customCheckbox" hidden />
          <label for="customCheckbox" class="custom-checkbox"></label>
          자동 로그인
        </div>
        <input type="button" className="login-submit-btn" value="로그인" />
        <input type="button" className="signup-btn" value="회원가입" />
      </div>
    </div>
  );
};

export default Login;
