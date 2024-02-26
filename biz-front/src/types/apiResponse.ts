export type apiErrorType = {
  result: string;
  errorMsg: string;
  errorCode: string;
};

export type apiSuccessType = {
  result: string;
  payload: any;
  errorMsg: string;
  errorCode: string;
};

export type googleSuccessType = {
  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
};
