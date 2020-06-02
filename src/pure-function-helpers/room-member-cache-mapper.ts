import { WechatyCacheRoomMemberPayload } from 'wechaty-cache'
import { PadplusRoomMemberPayload } from '../schemas'

export function cacheToPadplusRoomMemberPayload (
  cachePayload: WechatyCacheRoomMemberPayload,
): PadplusRoomMemberPayload {
  if (!cachePayload.contactId) {
    throw Error('cannot get contactId from cache payload: ' + JSON.stringify(cachePayload))
  }
  return {
    bigHeadUrl             : cachePayload.bigHeadUrl,
    contactId              : cachePayload.contactId,
    displayName            : cachePayload.displayName,
    inviterId              : cachePayload.inviterId,
    nickName               : cachePayload.nickName,
    smallHeadUrl           : cachePayload.smallHeadUrl,
  } as PadplusRoomMemberPayload
}

export function padplusToCacheRoomMemberPayload (
  padplusPayload: PadplusRoomMemberPayload,
): WechatyCacheRoomMemberPayload {
  if (!padplusPayload.contactId) {
    throw Error('cannot get contactId from padplus payload: ' + JSON.stringify(padplusPayload))
  }
  return {
    account                : undefined,
    bigHeadUrl             : padplusPayload.bigHeadUrl,
    contactId              : padplusPayload.contactId,
    displayName            : padplusPayload.displayName,
    inviterId              : padplusPayload.inviterId,
    nickName               : padplusPayload.nickName,
    sex                    : 1,
    smallHeadUrl           : padplusPayload.smallHeadUrl,
  } as WechatyCacheRoomMemberPayload
}
