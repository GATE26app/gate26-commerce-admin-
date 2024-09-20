//샌드버드 토큰 request type
export type SendBirdTokenDtoType = {
  code: string;
  count: number;
  data: {
    user_id: string;
    token: string;
    expires_at: number;
  };
  success: boolean;
};
//샌드버드 이미지 request type
export type SendBirdImageType = {
  ChannelUrl: string;
  imageId: string;
};
//샌드버드 토큰 request type
export type SendBirdImageDtoType = {
  code: string;
  count: number;
  data: {
    presignedUrl: string;
  };
  success: boolean;
};

//샌드버드 전체 채널 리스트 request type
export type SendBirdAllChannelListDtoType = {
  code: string;
  count: number;
  data: {
    channels: any;
    next: string;
    ts: number;
  };
  success: boolean;
};

//샌드버드 전체 채널 리스트 request type
export type SendBirdChannelMessageType = {
  channelUrl: string;
  ts: number;
  prevLimit: number;
  nextLimit: number;
  messageId?: string;
};
//샌드버드 전체 채널 리스트 request type
export type SendBirdMessageDtoType = {
  code: string;
  count: number;
  data: {
    messages: any;
  };
  success: boolean;
};

//샌드버드 관리자 채팅 전송
export type SendMessageType = {
  channelUrl: string;
  body: {
    message: string;
  };
};
