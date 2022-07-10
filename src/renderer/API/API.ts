/* eslint-disable class-methods-use-this */
/* eslint-disable prettier/prettier */

import axios, { AxiosError } from 'axios';
import {
  ChallengeMatchInterface,
  UserRegisterInterface,
  userLoginInterface,
} from '../@types/arena';
import jwt_decode from 'jwt-decode';
export class APIService {
  public async addValorantMatch(match: ChallengeMatchInterface) {
    try {
      const response = await axios.post(
        'http://localhost:8800/api/rewards/addMatch',
        {
          userID: match.userID,
          game_match_id: match.game_match_id,
          game_name: match.game_name,
          puuid: match.puuid,
        }
      );
    } catch (error: unknown) {
      console.log(error);
    }
  }

  public async userRegister(user: UserRegisterInterface) {
    try {
      const response = await axios.post(
        'http://localhost:8800/api/auth/register',
        {
          username: user.username,
          email: user.email,
          password: user.password,
          fullName: user.fullName,
        }
      );
      return response.status;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log('registerda olan hata', err);
        if (err.response?.data === 0) {
          return 'Username Mevcut';
        }
        if (err.response?.data === 1) {
          return 'Email Mevcut';
        }
        return err;
      } else {
        return 'stock error';
      }
    }
  }
  public async userLogin(user: userLoginInterface) {
    try {
      const response = await axios.post(
        'http://localhost:8800/api/auth/login',
        {
          email: user.email,
          password: user.password,
        }
      );
      console.log(response)
      sessionStorage.setItem('refreshToken',response.data.refreshToken)
      sessionStorage.setItem('accessToken',response.data.accessToken);
      return response.status;
    } catch (err) {this.refreshToken
      if (axios.isAxiosError(err)) {
        if (err.response?.data === 0) {
          return 'Username Mevcut';
        }
        if (err.response?.data === 1) {
          return 'Email Mevcut';
        }
        return err.response?.data;
      } else {
        return 'stock error';
      }
    }
  }
  public async refreshToken() {
    try {
      const response = await axios.post(
        `http://localhost:8800/api/auth/refresh`,
        {}
      );
      const decoded: any = jwt_decode(response.data.token);
      return this.getPrivateUser(decoded?.id);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPrivateUser(id: string) {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/users/getPrivateUser/${id}`,
        {}
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  public async setRandomChallenges(id: string) {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/challenges/getChallenges`,
        {}
      )
      let a = -1
      let b = -2
      while (a === -1 || a === 0 || b === 0 || a === b) {
        a = Math.floor(Math.random() * response.data.length)
        b = Math.floor(Math.random() * response.data.length)
      }

      let challenges = []
      challenges.push(response.data[0])
      challenges.push(response.data[a])
      challenges.push(response.data[b])
      console.log(challenges)
      try {
        const response2 = await axios.post(
          `http://localhost:8800/api/users/updateChallenge`,
          { userID: id, challenges: challenges }
        )
        return challenges;
      } catch (e) {
        console.log(e)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
