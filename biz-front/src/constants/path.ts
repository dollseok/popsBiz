const PATH = {
  ROOT: '/',
  SIGNUP: '/signup',
  USERPROFILE: 'user/profile',

  POPUPLIST: 'popup/',
  POPUPDETAIL: 'detail/:id/',
  POPUPCOMMENT: 'detail/:id/comment',
  POPUPINQUIRY: 'detail/:id/inquiry',

  POPUPREGIST: 'popup/regist/',
  BASICDATA: '',
  ADDITIONALDATA: 'additional',
  TICKETDATA: 'ticket',
  POPUPTICKET: 'popup/ticket',
  NOTICE: 'notice',
  INQUIRY: 'inquiry',
  SOCIALLOGIN: '/sociallogin',
  SOCIALSIGNUP: '/socialsignup',
} as const;

export { PATH };
