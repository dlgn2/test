import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { Grid, InputBase } from '@mui/material';
import { useEffect, useState } from 'react';
import { APIService } from '../../../API/API';
import { UserContext } from 'renderer/Context/UserContext';
import string from '../../../utils/translations/en/common.json';
import Profile from '../Profile/Profile';
import  './button.css'

import {profileInterface} from '../../../@types/arena'

export default function Login() {
  const { user, setUser,snackBarError, setSnackBarError } =
    React.useContext(UserContext);
  const api = new APIService();
  const [modalRegister, setModalRegister] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const emailInput = (value: string) => {
    setEmail(value);
  };
  const passwordInput = (value: string) => {
    setPassword(value);
  };
  const fullNameInput = (value: string) => {
    setFullName(value);
  };
  const usernameInput = (value: string) => {
    setUsername(value);
  };
  const submitted = (e: any) => {
    e.preventDefault();
    if (modalRegister) {
      api
        .userRegister({ email, username, password, fullName })
        .then((registerStatus) => {
          if (registerStatus === 'Username Mevcut') {
            setSnackBarError({
              type: 'error',
              message: string.login.usernameTaken,
            });
          } else if (registerStatus === 'Email Mevcut') {
            setSnackBarError({
              type: 'error',
              message: string.login.emailTaken,
            });
          } else if (registerStatus === 200) {
            api.userLogin({ email, password }).then((loginStatus) => {
              setUser(loginStatus);
              if (loginStatus === 202) {
                window.location.reload();
              }
            });
          }
        });
    } else {
      api.userLogin({ email, password }).then((loginStatus) => {
        console.log(loginStatus);
        if (loginStatus === 202) {
          setUser(loginStatus);
          setIsLoaded(false);
         // window.location.reload();
        } else {
          setSnackBarError({
            type: 'error',
            message: string.login.emailPassDidntMatch,
          });
        }
      });
    }
  };

  useEffect(() => {
    api.refreshToken().then((data) => {
      if (data) {
        setUser(data);
        console.log(data);
        setIsLoaded(true);
      }else{
        setIsLoaded(true);
      }
    });
  }, []);

  const classes = useStyles();
  axios.defaults.withCredentials = true;
  return (
    <div>
      {isLoaded ? (
        <Grid>
          {user ? (
            <Profile username={user.username} photo={user.photo} id={user._id}/>
          ) : (
            <a href="#" style={{padding:"0px 55px 0px 55px",marginTop:"35px",borderRadius:"10px"}} className="btn-glow btn-hover-shine" onClick={handleOpen}>Login</a>
          )}
        </Grid>
      ) : (
        ''
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={loginStyle}>
          <Typography
            className={classes.loginText}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {modalRegister ? string.login.register : string.login.login}
          </Typography>
          <Typography
            className={classes.member}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {modalRegister
              ? string.login.alreadyMember
              : string.login.notMember}{' '}
            <span
              onClick={() => setModalRegister(!modalRegister)}
              style={{
                textDecoration: 'none',
                color: '#10baa8',
                cursor: 'Pointer',
                fontFamily: 'Rajdhani',
              }}
            >
              {modalRegister ? string.login.login : string.login.register}
            </span>
          </Typography>
          {modalRegister ? (
            ''
          ) : (
            <Grid>
              <Button
                variant="contained"
                fullWidth
                className={classes.loginGoogle}
                style={{ background: '#3640E2' }}
              >
                {string.login.loginDiscord}
              </Button>
              <Button
                variant="contained"
                fullWidth
                className={classes.loginGoogle}
                style={{ background: '#6e31e0' }}
              >
                {string.login.loginTwitch}
              </Button>
            </Grid>
          )}
          <form onSubmit={submitted}>
            {modalRegister ? (
              <InputBase
                autoFocus
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  fullNameInput(e.target.value)
                }
                style={{ marginTop: '20px' }}
                className={classes.loginInput}
                placeholder={string.login.fullName}
                required={true}
              />
            ) : (
              ''
            )}

            <InputBase
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                emailInput(e.target.value)
              }
              style={{ marginTop: '20px' }}
              className={classes.loginInput}
              placeholder={string.login.email}
              required={true}
            />
            {modalRegister ? (
              <InputBase
                autoFocus
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  usernameInput(e.target.value)
                }
                style={{ marginTop: '20px' }}
                className={classes.loginInput}
                placeholder={string.login.username}
                required={true}
              />
            ) : (
              ''
            )}
            <InputBase
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                passwordInput(e.target.value)
              }
              style={{ marginTop: '20px' }}
              className={classes.loginInput}
              placeholder={string.login.password}
              type="password"
              required={true}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.loginButton}
            >
              {modalRegister ? string.login.register : string.login.login}
            </Button>
          </form>

          <Typography
            className={classes.member}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <span
              onClick={() => setModalRegister(!modalRegister)}
              style={{
                textDecoration: 'none',
                color: '#10baa8',
                cursor: 'Pointer',
                fontFamily: 'Rajdhani',
              }}
            >
              {string.login.forgotPassword}
            </span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  loginText: {
    fontFamily: " 'Rajdhani', sans-serif !important",
    textAlign: 'center',
    color: 'white',
    fontWeight: '700 !important',
    fontSize: '35px !important',
    marginBottom: '20px !important',
  },
  loginGoogle: {
    fontFamily: " 'Rajdhani', sans-serif !important",
    height: '50px !important',
    marginBottom: '20px !important',
    borderRadius: '10px !important',
    fontSize: '15px !important',
    fontWeight: '700 !important',
    marginTop: '0px !important',
  },
  loginButton: {
    fontFamily: " 'Rajdhani', sans-serif !important",
    height: '50px !important',
    background: 'green !important',
    marginBottom: '20px !important',
    borderRadius: '10px !important',
    fontSize: '20px !important',
    fontWeight: '700 !important',
    marginTop: '40px !important',
  },

  loginInput: {
    color: 'white !important',
    paddingLeft: '15px !important',
    alignItems: 'center',
    border: '2px solid rgba(94,97,112,.5)',
    width: '400px',
    height: '50px',
    borderRadius: '10px',
    '&:hover,&:focus': {
      border: '2px solid #10baa8',
    },
  },

  member: {
    fontFamily: " 'Rajdhani', sans-serif !important",
    textAlign: 'center',
    color: 'white',
    fontWeight: '500 !important',
    fontSize: '18px !important',
    marginBottom: '20px !important',
  },
}));

const loginStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '550px',
  bgcolor: '#1B1C23',
  border: '2px solid #1B1C23',
  borderRadius: '20px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
