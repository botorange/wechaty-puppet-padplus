// The npm package of my best choice for QR code decoding on Angular SPA
// https://dev.to/j_sakamoto/the-npm-package-of-my-best-choice-for-qr-code-decoding-on-angular-spa-4747?returning-user=true
import Jimp             from 'jimp'
import jsQR             from 'jsqr'

import { FileBox } from 'file-box'

export async function fileBoxToQrcode (file: FileBox): Promise<string> {
  const future = new Promise<string>(async (resolve, reject) => {
    await Jimp.read(await file.toBuffer()).then(image => {

      const qrCodeImageArray = new Uint8ClampedArray(image.bitmap.data.buffer)

      const qrCodeResult = jsQR(
        qrCodeImageArray,
        image.bitmap.width,
        image.bitmap.height,
      )

      if (qrCodeResult) {
        return resolve(qrCodeResult.data)
      } else {
        return reject(new Error('WXGetQRCode() qrCode decode fail'))
      }
    }).catch(err => {
      if (err) {
        return reject(err)
      }
    })
  })
  try {
    const qrCode = await future
    return qrCode
  } catch (e) {
    throw new Error('no qrcode in image: ' + e.message)
  }
}
