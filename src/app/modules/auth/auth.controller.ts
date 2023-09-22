import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    //refresh token cookies set
    const { refreshToken, ...others } = result.data;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Loged in!!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

//Refresh Token create (refresh Token age thake thakle notun token generate korte parbo)
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    //refresh token cookies set
    const { refreshToken, ...others } = result.data;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New Refresh Token generated!!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

//change Password
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword
};
