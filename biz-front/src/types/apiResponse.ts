interface apiErrorDataType {
  data: {
    result: string;
    error: string;
    errorMessage: string;
    errorCode: string;
  };
}

export type apiErrorType = {
  response: apiErrorDataType;
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
